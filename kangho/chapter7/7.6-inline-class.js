// 클래스 인라인하기

// ex1
class TrackingInformation {
  get shippingCompany() {
    return this._shippingCompany;
  } // 배송 회사
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
  // 위임 함수 생성
  get shippingCompany() {
    return this._trackingInformation.shippingCompany;
  }
  set shippingCompany(arg) {
    this._trackingInformation.shippingCompany = arg;
  }
}

// client
aShipment.shippingCompany = request.vendor;
