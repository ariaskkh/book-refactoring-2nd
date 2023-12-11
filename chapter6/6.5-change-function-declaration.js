// 함수 선언 바꾸기

import { assert } from "console";

// ex1 함수 이름 바꾸기
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// ex2 매개변수 추가하기
class Book {
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

// ex3 매개변수 속성으로 바꾸기
function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxNEWinNewEngland(stateCode);
}
function xxNEWinNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
