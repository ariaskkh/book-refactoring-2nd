// 중개자 제거하기

// ex1

class Person {
  get department() {
    return this._department;
  }
}

class Department {
  get manager() {
    return this._manager;
  }
}

//client
manager = aPerson.department.manager;
