// 특이 케이스 추가하기

// ex2) 객체 리터럴 이용하기

class Site {
  get customer() {
    return this._customer === "미확인 고객"
      ? createUnknownCustomer()
      : this._customer;
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
    isUnknown: true,
    name: "거주자",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelingquentInLastYear: 0,
    },
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

// client1
// 수많은 코드
customerName = aCustomer.name;

// client2
const plan = aCustomer.billingPlan;

// client3
const weekDelinquent = aCustomer.paymentHistory.weeksDelingquentInLastYear;
