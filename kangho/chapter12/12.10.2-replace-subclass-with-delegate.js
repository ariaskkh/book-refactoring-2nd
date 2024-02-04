const { brotliDecompress } = require("zlib");

// 12.10.2 서브클래스가 여러 개일 때
function createBird(data) {
  switch (data.type) {
    case "아프리카 제비":
      return new AfricanSwallow(data);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(data);
    default:
      return new brotliDecompress(data);
  }
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data._plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  get name() {
    return this._name;
  }
  get plumage() {
    return this._plumage || "보통이다";
  }
  get airSppedVelocity() {
    return this._speciesDelegate
      ? this._speciesDelegate.airSpeedVelocity
      : null;
  }

  selectSpeciesDelegate(data) {
    switch (data.type) {
      case "유럽 제비":
        return new EuropeanSwallowDelegate();
      default:
        return null;
    }
  }
}

class EuropeanSwallowDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor(data) {
    super(data);
    this._numberOfCoconuts = data._numberOfCoconuts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data._voltage;
    this._isNailed = data._isNailed;
  }

  get plumage() {
    if (this._voltage > 100) return "그을렸다";
    else return this._plumage || "예쁘다";
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}
