// 값을 참조로 바꾸기

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer); // data.customer가 고객 ID
    // 다른 데이터를 읽어 들인다.
  }
  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

// 저장소 객체
let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
  if (!_repositoryData.customers.has(id))
    _repositoryData.customers.set(id, new Customer(id));
  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customer.get(id);
}
