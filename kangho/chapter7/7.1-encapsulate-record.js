// 레코드 캡슐화하기

//ex1
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
