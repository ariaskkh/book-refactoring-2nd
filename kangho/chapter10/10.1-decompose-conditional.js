// 조건문 분해하기

//ex 1
if (summer()) summerCharge();
else regularCharge();

function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
  return quantity * plan.summerRate;
}

function regularCharge() {
  return (charge = quantity * plan.regularRate + plan.regularServiceCharge);
}
