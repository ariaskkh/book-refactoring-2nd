// 문장 슬라이드하기

/**
 * 명령과 질의 분리
 * 명령: 상태는 변경시키지만 return 값이 없다
 * 질의: 상태를 변경시키지 않고(side effect x) return 값 존재
 */
// ex1
const pricingPlay = retrievePricingPlan();
const order = retreiveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discount;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);

// ex2 조건문이 있을 때의 슬라이드
let result;
if ((availableResources.lenth = 0)) {
  result = createResource();
} else {
  result = availableResources.pop();
}
allocatedResources.push(result);
return result;
