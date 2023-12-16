// 여러 함수를 클래스로 묶기

// ex1

reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// client1
const rawReading = acquireReading();
const aReading = new Reading(rawReading)
const baseCharge = aReading.baseCharge;
// client2
const rawReading = acquireReading();
const aReading = new Reading(rawReading)
const texableCharge = aReading.texableCharge;
//client3
const rawReading = acquireRading();
const aReading = new reading(rawReading)
const basicChargeAmount = aReading.baseCharge // 단일 접근 원칙: 한 모듈에서 제공하는 모든 서비스는 저장된 값인지 계산된 값인지 구분 없이 단일한 방식으로 접근

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data._month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  get basaeCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }

  get texableCharge() {
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
  }
}
