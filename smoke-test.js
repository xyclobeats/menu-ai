const { generateMonthlyPlan } = require("./app.js");

const plan = generateMonthlyPlan(2026, 3, {
  tomari: "とまりのお弁当",
  sosodo: "そそどのお弁当"
}, 4, 1);
const bento = plan.days.filter((day) =>
  day.meals.some((meal) => meal.name === "とまりのお弁当" || meal.name === "そそどのお弁当")
).length;
const curry = plan.days.filter((day) => day.meals.some((meal) => meal.name === "カレーランチ")).length;
const stew = plan.days.filter((day) => day.meals.some((meal) => meal.name === "クリームシチュー献立")).length;

console.log(JSON.stringify({
  days: plan.days.length,
  weeks: plan.weeks.length,
  kidsCount: plan.kidsCount,
  adultCount: plan.adultCount,
  bento,
  curry,
  stew,
  firstWeekEstimatedCost: Math.round(plan.weeks[0].estimatedCost),
  monthlyEstimatedCost: Math.round(plan.weeks.reduce((total, week) => total + week.estimatedCost, 0))
}, null, 2));
