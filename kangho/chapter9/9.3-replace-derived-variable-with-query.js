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
