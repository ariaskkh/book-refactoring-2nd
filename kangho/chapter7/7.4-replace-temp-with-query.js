// 임의 변수를 질의 함수로 바꾸기

// ex1
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }
  get price() {
    var basePrice = this._quantity * this._item.price; // 임시 변수
    var discountFactor = 0.98; // 임시 변수

    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}
