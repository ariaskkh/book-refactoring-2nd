// 매개변수 객체 만들기

// ex1
const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

const rage = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temeratureCeiling
);

function readingOutsideRange(station, min, max, range) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

alerts = readingOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling,
  null
);

class NumberRange {
  constructor(min, max) {
    this._data = { min: min, max: max };
  }

  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}
