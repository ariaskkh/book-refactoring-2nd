// 여러 함수를 변환 함수로 묶기

import { assert } from "console";

// ex1
reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// client1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// client2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const texableCharge = Math.max(
  0,
  aReading.baseCharge - taxThreshold(aReading.yaer)
);

// client3
const rawReading = acquireReading();
const aReading = erichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.yaer) * aReading.quantity;
}

function enrichReading(original) {
  // 본질은 같고 부가 정보만 덧붙이는 변환 함수 이름을 enrich라 함.
  const result = _.clonDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

// test code
it("check reading unchaged", function () {
  const baseReading = { customer: "ivan", quantity: 15, month: 5, year: 2017 };
  const oracle = _.cloneDeep(baseReading);
  enrichReading(baseReading);
  assert.deepEqual(baseReading, oracle);
});
