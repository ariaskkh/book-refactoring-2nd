// 참조를 값으로 바꾸기

// ex1
class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return (this._telephoneNumber.number = arg);
  }
  set officeNumber(arg) {
    this._telephoneNumber.officeNumber = arg;
  }
}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg) {
    this._areaCode = arg;
  }
  get number() {
    return this._number;
  }
  set number(arg) {
    this._number = arg;
  }
}
