// 파생 변수를 질의 함수로 바꾸기

// ex1
class productionPlan {
  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjestment.amount;
  }
}
