// 레코드 캡슐화하기

// ex1 간단한 레코드 캡슐화하기
const organization = new Organization({
  name: "대대손손 진호형 옷가게",
  country: "CN",
});

function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this.name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._data.name;
  }
  set name(aString) {
    this._data.name = aString;
  }
  get country() {
    return this._data.country;
  }
  set country(aCountryCode) {
    return (this._country = aCountryCode);
  }
}

result += `<h1>${organization().name}</h1>`; // 읽기 예
organization().name = newName; // 쓰기 예

// ex2 중첩된 레코드 캡슐화하기
// 쓰기 예
getCustomerData().setUsage(customerID, year, month, amount);
// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

function getCustomerData() {
  return customerData;
}
function getRawDataOfCustomers() {
  return customerData._data;
}
function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}
