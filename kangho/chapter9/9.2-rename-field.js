// 필드 이름 바꾸기

// ex1
class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }
  get title() {
    return this._title;
  }
  set title(aString) {
    this._title = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new organization({
  name: "애크미 구스베리베리 찌노리",
  country: "GB",
});
