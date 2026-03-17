const { generateMonthlyPlan, parseManualBentoDays } = require("./app.js");

const plan = generateMonthlyPlan(2026, 3, {
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
}, 4, 1);
const manualBentoDays = parseManualBentoDays("3, 7, 12, 28", 2026, 3);
const manualBentoPlan = generateMonthlyPlan(2026, 3, {
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
}, 2, 1, {
  days: manualBentoDays,
  name: "持っていくお弁当"
});
const bento = plan.days.filter((day) =>
  day.meals.some((meal) => meal.name === "とまりのお弁当" || meal.name === "そそどのお弁当")
).length;
const tomariBento = plan.days.filter((day) => day.meals.some((meal) => meal.name === "とまりのお弁当")).length;
const sosodoBento = plan.days.filter((day) => day.meals.some((meal) => meal.name === "そそどのお弁当")).length;
const shimaBento = plan.days.filter((day) => day.meals.some((meal) => meal.name === "島ばあちゃんのお弁当")).length;
const curry = plan.days.filter((day) => day.meals.some((meal) => meal.name === "カレーランチ")).length;
const stew = plan.days.filter((day) => day.meals.some((meal) => meal.name === "クリームシチュー献立")).length;
const manualBento = manualBentoPlan.days
  .filter((day) => day.meals.some((meal) => meal.name === "持っていくお弁当"))
  .map((day) => ({
    day: day.day,
    slots: day.meals.filter((meal) => meal.name === "持っていくお弁当").map((meal) => meal.slot),
    dishes: day.meals.find((meal) => meal.name === "持っていくお弁当").dishes,
    estimatedCost: Math.round(day.meals.find((meal) => meal.name === "持っていくお弁当").estimatedCost)
  }));

console.log(JSON.stringify({
  days: plan.days.length,
  weeks: plan.weeks.length,
  kidsCount: plan.kidsCount,
  adultCount: plan.adultCount,
  bento,
  tomariBento,
  sosodoBento,
  shimaBento,
  curry,
  stew,
  manualBentoDays,
  manualBento,
  manualBentoMonthlyEstimatedCost: Math.round(manualBentoPlan.weeks.reduce((total, week) => total + week.estimatedCost, 0)),
  firstWeekEstimatedCost: Math.round(plan.weeks[0].estimatedCost),
  monthlyEstimatedCost: Math.round(plan.weeks.reduce((total, week) => total + week.estimatedCost, 0))
}, null, 2));
