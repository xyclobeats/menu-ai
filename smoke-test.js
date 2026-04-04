const assert = require("assert");
const {
  generateMonthlyPlan,
  parseManualBentoDays,
  parseFlexibleMonthDays,
  estimateIngredientCost,
  scaleQuantity,
  getServingMultiplier,
  getRecipeForDish,
  mergeQuantity
} = require("./app.js");

const bentoConfig = {
  tomari: "とまりのお弁当",
  sosodo: "そそどのお弁当",
  shima: "島ばあちゃんのお弁当",
  schedule: {
    "とまりのお弁当": [8, 22],
    "そそどのお弁当": [15],
    "島ばあちゃんのお弁当": [29]
  },
  prices: {
    "とまりのお弁当": 650,
    "そそどのお弁当": 480
  }
};

const plan = generateMonthlyPlan(2026, 3, bentoConfig, 4, 1);
const basePlan = generateMonthlyPlan(2026, 3, bentoConfig, 2, 1);
const largePlan = generateMonthlyPlan(2026, 3, bentoConfig, 8, 2);
const manualBentoDays = parseManualBentoDays("3, 7, 12, 28", 2026, 3);
const manualBentoPlan = generateMonthlyPlan(2026, 3, bentoConfig, 2, 1, {
  days: manualBentoDays,
  name: "持っていくお弁当"
});
const skipDays = parseFlexibleMonthDays("2, 9, 40", 2026, 3);
const skipDayPlan = generateMonthlyPlan(2026, 3, bentoConfig, 2, 1, {
  skipDays,
  skipDayName: "お休みの日"
});

function aggregateWeekIngredientsFromDays(days, weekLabel) {
  return days
    .filter((day) => day.weekLabel === weekLabel)
    .reduce((accumulator, day) => {
      day.meals.forEach((meal) => {
        Object.entries(meal.ingredients || {}).forEach(([name, quantity]) => {
          accumulator[name] = mergeQuantity(accumulator[name], quantity);
        });
      });
      return accumulator;
    }, {});
}

function aggregateFortnightIngredients(weeks) {
  return weeks.reduce((accumulator, week) => {
    Object.entries(week.ingredients || {}).forEach(([name, quantity]) => {
      accumulator[name] = mergeQuantity(accumulator[name], quantity);
    });
    return accumulator;
  }, {});
}

function parseQuantityText(quantity) {
  const match = String(quantity).match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return null;
  }
  return {
    value: Number(match[1]),
    unit: match[2]
  };
}

assert.deepStrictEqual(manualBentoDays, [3, 12], "平日のお弁当日だけが残ること");
assert.strictEqual(plan.days.length, 31, "3月の日数が31日であること");
assert.strictEqual(plan.weeks.length, 6, "週の分割数が想定どおりであること");
assert.strictEqual(plan.fortnights.length, 3, "2週間集計の分割数が想定どおりであること");
assert.strictEqual(getServingMultiplier(2, 1), 1, "既定家族人数では倍率1になること");
assert.strictEqual(scaleQuantity("4個", 4.2, "卵"), "17個", "個数は切り上げで扱うこと");
assert.strictEqual(scaleQuantity("0.5玉", 4.2, "キャベツ"), "2.5玉", "玉単位は0.5刻みで扱うこと");
assert.strictEqual(scaleQuantity("少々", 4, "塩"), "0.5小さじ", "少々は多人数時に具体量へ寄せること");

const firstManualBento = manualBentoPlan.days.find((day) =>
  day.meals.some((meal) => meal.name === "持っていくお弁当")
);
assert(firstManualBento, "手動のお弁当日が生成されること");
assert(firstManualBento.meals.some((meal) => meal.slot === "弁当"), "平日弁当スロットが入ること");

assert.deepStrictEqual(skipDays, [2, 9], "作らない日は月内の日付だけを受け付けること");
const firstSkipDay = skipDayPlan.days.find((day) => day.day === 2);
assert(firstSkipDay, "作らない日が生成されること");
assert.strictEqual(firstSkipDay.meals.length, 1, "作らない日は1件だけ表示されること");
assert.strictEqual(firstSkipDay.meals[0].slot, "休み", "作らない日は休みスロットになること");
assert.strictEqual(Object.keys(firstSkipDay.meals[0].ingredients).length, 0, "作らない日は材料を持たないこと");

assert.strictEqual(estimateIngredientCost("鶏もも肉", "2枚"), null, "未正規化の鶏もも肉はそのままでは見積もれないこと");
assert.strictEqual(
  generateMonthlyPlan(2026, 3, bentoConfig, 2, 1).weeks.every((week) => {
    const quantity = week.ingredients["鶏もも肉"];
    return !quantity || (quantity.includes("g") && !quantity.includes("+") && !quantity.includes("枚"));
  }),
  true,
  "週の買い物リストの鶏もも肉はgで一意に集計されること"
);
assert.strictEqual(
  generateMonthlyPlan(2026, 3, bentoConfig, 2, 1).weeks.every((week) => {
    const quantity = week.ingredients["しょうが"];
    return !quantity || (quantity.includes("個") && !quantity.includes("+") && !quantity.includes("片"));
  }),
  true,
  "週の買い物リストのしょうがは個で一意に集計されること"
);
assert.strictEqual(
  generateMonthlyPlan(2026, 3, bentoConfig, 2, 1).weeks.every((week) => {
    const quantity = week.ingredients["大根"];
    return !quantity || (quantity.includes("g") && !quantity.includes("+") && !quantity.includes("本"));
  }),
  true,
  "週の買い物リストの大根はgで一意に集計されること"
);

basePlan.weeks.forEach((week) => {
  assert.deepStrictEqual(
    aggregateWeekIngredientsFromDays(basePlan.days, week.label),
    week.ingredients,
    `${week.label} の買い物リストが、その週の献立材料合計と一致すること`
  );
  Object.entries(week.ingredients).forEach(([name, quantity]) => {
    assert(name && typeof name === "string", "買い物リストの食材名が空でないこと");
    assert(quantity && !/undefined|NaN/.test(String(quantity)), "買い物リストの数量表示が壊れていないこと");
  });
});

basePlan.fortnights.forEach((fortnight, index) => {
  const sourceWeeks = basePlan.weeks.slice(index * 2, index * 2 + 2);
  assert.deepStrictEqual(
    aggregateFortnightIngredients(sourceWeeks),
    fortnight.ingredients,
    `${fortnight.label} の買い物リストが、2週間分の材料合計と一致すること`
  );
});

const udonLunch = plan.days
  .flatMap((day) => day.meals)
  .find((meal) => meal.name === "うどんランチ");
if (udonLunch) {
  assert(!Object.values(udonLunch.ingredients).includes("少々"), "既知の調味料が少々に落ちないこと");
}

const curryLunchCount = plan.days.filter((day) =>
  day.meals.some((meal) => meal.name === "カレーランチ")
).length;
assert.strictEqual(curryLunchCount, 2, "カレーランチは2週間に1回であること");

const udonRecipe = getRecipeForDish("きつねうどん", { note: "", slot: "" });
assert.strictEqual(udonRecipe.condiments["めんつゆ"], "180ml", "うどんはつゆ基準で出ること");
const misoSoupRecipe = getRecipeForDish("豆腐の味噌汁", { note: "", slot: "" });
assert.strictEqual(misoSoupRecipe.condiments["味噌"], "36g", "味噌汁は味噌量が具体化されること");
assert.strictEqual(misoSoupRecipe.condiments["和風だし"], "600ml", "味噌汁はだし量が具体化されること");

const baseFirstBreakfast = basePlan.days[0].meals.find((meal) => meal.slot === "朝");
const largeFirstBreakfast = largePlan.days[0].meals.find((meal) => meal.slot === "朝");
assert.strictEqual(baseFirstBreakfast.name, largeFirstBreakfast.name, "人数差でメニュー自体は変わらないこと");
const baseBread = parseQuantityText(baseFirstBreakfast.ingredients["食パン"]);
const largeBread = parseQuantityText(largeFirstBreakfast.ingredients["食パン"]);
if (baseBread && largeBread) {
  assert.strictEqual(baseBread.unit, largeBread.unit, "同一材料の単位は維持されること");
  assert(largeBread.value > baseBread.value, "人数が増えたら同じ朝食の材料量も増えること");
}

const baseWeekOneRice = parseQuantityText(basePlan.weeks[0].ingredients["ごはん"] || "");
const largeWeekOneRice = parseQuantityText(largePlan.weeks[0].ingredients["ごはん"] || "");
if (baseWeekOneRice && largeWeekOneRice) {
  assert.strictEqual(baseWeekOneRice.unit, largeWeekOneRice.unit, "買い物リストのごはん単位が揃うこと");
  assert(largeWeekOneRice.value > baseWeekOneRice.value, "人数が増えたら週の買い物量も増えること");
}

basePlan.days.forEach((day) => {
  day.meals.forEach((meal) => {
    assert(meal.slot, "各メニューに表示用スロットがあること");
    assert(meal.name, "各メニューに表示用名前があること");
    Object.values(meal.ingredients || {}).forEach((quantity) => {
      assert(quantity && !/undefined|NaN/.test(String(quantity)), "メニュー材料の数量表示が壊れていないこと");
    });
  });
});

console.log(JSON.stringify({
  days: plan.days.length,
  weeks: plan.weeks.length,
  fortnights: plan.fortnights.length,
  servingMultiplierDefault: getServingMultiplier(2, 1),
  scaledEggsForTenLikeFamily: scaleQuantity("4個", 4.2, "卵"),
  scaledPinchForLargeFamily: scaleQuantity("少々", 4, "塩"),
  curryLunchCount,
  udonRecipeCondiments: udonRecipe.condiments,
  misoSoupRecipeCondiments: misoSoupRecipe.condiments,
  baseWeekOneRice: basePlan.weeks[0].ingredients["ごはん"],
  largeWeekOneRice: largePlan.weeks[0].ingredients["ごはん"],
  manualBentoDays,
  monthlyEstimatedCost: Math.round(plan.weeks.reduce((total, week) => total + week.estimatedCost, 0)),
  manualBentoMonthlyEstimatedCost: Math.round(manualBentoPlan.weeks.reduce((total, week) => total + week.estimatedCost, 0))
}, null, 2));
