// 기본형을 객체로 바꾸기

// ex1
class Order {
  constructor(data) {
    this.priority = data.priority;
    // 나머지 초기화 코드 생략
  }
}

// client
highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
