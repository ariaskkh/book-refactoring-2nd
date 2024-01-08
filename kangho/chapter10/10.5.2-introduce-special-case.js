// 특이 케이스 추가하기

// ex2) 객체 리터럴 이용하기

class Site {
  get customer() {
    return this._customer;
  }
}

class Customer {
  get name() {
    // ...
  }
  get billingPlan() {
    // ...
  }
  set billingPlan(arg) {
    // ...
  }
  get paymentHistory() {
    // ...
  }
}

// client1
const aCustomer = site.customer;
// 수많은 코드
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// client2
const plan =
  aCustomer === "미확인 고객"
    ? registry.billingPlans.basic
    : aCustomer.billingPlan;

// client3
const weekDelinquent =
  aCustomer === "미확인 고객"
    ? 0
    : aCustomer.paymentHistory.weeksDelingquentInLastYear;
