// 클래스 추출하기

// ex1
class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber(); // Person 인스턴스 생성 시 전화번호 인스턴스도 생성
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
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
    return this.number;
  }
  set number(arg) {
    this.number = arg;
  }

  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}
