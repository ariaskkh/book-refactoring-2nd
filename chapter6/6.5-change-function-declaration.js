// 함수 선언 바꾸기

import { assert } from "console";

// ex1
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// ex2
class Book {
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}
