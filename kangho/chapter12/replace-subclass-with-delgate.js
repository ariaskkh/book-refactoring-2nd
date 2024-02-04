// 서브클래스를 위임으로 바꾸기

class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  hasTalkback() {
    return this._premiumDelegate
      ? this._premiumDelegate.hasTalkback
      : this._show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get basePrice() {
    return this._premiumDelegate
      ? this._premiumDelegate.basePrice
      : this._privateBasePrice;
  }

  get _privateBasePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }

  get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
  }
}

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking; // 이게 왜 필요할까?
    this._extras = extras;
  }

  get hasTalkback() {
    return this._host._show.hasOwnProperty("talkback");
  }

  get basePrice() {
    return Math.round(this._host._privateBasePrice + this._extras.premiumFee);
  }
}

function createBooking(show, date) {
  return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
  const result = new PremiumBooking(show, date, extras);
  result._bePremium(extras);
  return result;
}

// client
const show = { price: 100, talkback: true };
const date = new Date();
const extras = { dinner: true, premiumFee: 50 };

const aBooking1 = createBooking(show, date);
console.log(aBooking1);
console.log("basePrice: ", aBooking1.basePrice);
console.log("hasTalkback: ", aBooking1.hasTalkback());
console.log("\n");

const aBooking2 = createPremiumBooking(show, date, extras);
console.log(aBooking2);
console.log("basePrice: ", aBooking2.basePrice);
console.log("hasTalkback: ", aBooking2.hasTalkback());
console.log("hasDinner: ", aBooking2.hasDinner);
console.log("\n");
