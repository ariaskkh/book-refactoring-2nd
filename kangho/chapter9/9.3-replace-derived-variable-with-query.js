// 파생 변수를 질의 함수로 바꾸기

const { assert } = require("console");

// ex1
class ProductionPlan {
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}

// ex2 소스가 둘 이상일 때
class ProductionPlan {
  constructor(production) {
    this._initialProduction = production;
    this._adjustments = [];
  }

  get production() {
    return this._initialProduction + this.caluculatedProductionAccumulator;
  }
  get caluculatedProductionAccumulator() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjestment(anAdjustment) {
    this._adjestments.push(anAdjustment);
  }
}
