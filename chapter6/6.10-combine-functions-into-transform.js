// 여러 함수를 변환 함수로 묶기

// ex1
reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// client1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const texableCharge = Math.max(0, base - taxThreshold(aReading.yaer));

// client3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.yaer) * aReading.quantity;
}
