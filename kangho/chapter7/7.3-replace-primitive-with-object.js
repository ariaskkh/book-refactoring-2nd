// 기본형을 객체로 바꾸기

// ex1
class Order {
  constructor(data) {
    this._priority = data.priority;
    // 나머지 초기화 코드 생략
  }
  get priority() {
    return this._priority;
  }
  set priority(aString) {
    this._priority = aString;
  }
}

// client
highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
