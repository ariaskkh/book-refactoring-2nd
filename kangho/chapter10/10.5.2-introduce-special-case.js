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

  get isUnknown() {
    return false;
  }
}

function createUnknownCustomer() {
  return {
    isunknown: true,
  };
}

function isUnknown(arg) {
  return arg === "미확인 고객";
}

// client1
const aCustomer = site.customer;
// 수많은 코드
let customerName;
if (isUnknown(arg)) customerName = "거주자";
else customerName = aCustomer.name;

// client2
const plan = isUnknown(arg)
  ? registry.billingPlans.basic
  : aCustomer.billingPlan;

// client3
const weekDelinquent = isUnknown(arg)
  ? 0
  : aCustomer.paymentHistory.weeksDelingquentInLastYear;
