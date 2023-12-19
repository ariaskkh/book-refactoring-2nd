// 중개자 제거하기

// ex1

class Person {
  get manager() {
    return this._department.manager;
  }
}

class Department {
  get manager() {
    return this._manager;
  }
}

//client
manager = aPerson.manager;
