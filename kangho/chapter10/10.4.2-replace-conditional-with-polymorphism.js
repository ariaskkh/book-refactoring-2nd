// 조건부 로직을 다형성으로 바꾸기

// ex2) 변형 동작을 다형성으로 표현하기

// 투자 등급
function rating(voyage, history) {
  return createRating(voyage, history).value;
}

// 함수들을 Rating 클래스로 묶었다.
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpf * 3 > vr + chr * 2) return "A";
    else return "B";
  }

  // 항해 경로 위험요소
  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += voyage.length - 8;
    if (["중국", "동인도"].includes(voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  // 선장의 항해 이력 위험 요소
  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  // 중국을 경유하는가?
  get hasChina() {
    return this.history.some((v) => "중국" === v.zone);
  }

  // 수익 요인
  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === "중국") result += 1;
    if (this.voyage.zone === "동인도") result += 1;
    result += this.historyLengthFactor;
    result += this.voyageAndHistoryLengthFactor;
    return result;
  }

  get voyageAndHistoryLengthFactor() {
    let result = 0;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }

  get historyLengthFactor() {
    return this.history.length > 8 ? 1 : 0;
  }
}

class ExperiencedChinaRating extends Rating {
  // 선장의 항해 이력 위험 요소
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageAndHistoryLengthFactor() {
    let result = 0;
    result += 3;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }

  get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0;
  }
}

function createRating(voyage, history) {
  if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone))
    return new ExperiencedChinaRating(voyage, history);
  else return new Rating(voyage, history);
}

// client
const voyage = { zone: "서인도", length: 10 };
const history = [
  { zone: "동인도", profit: 5 },
  { zone: "서인도", profit: 15 },
  { zone: "중국", profit: -2 },
  { zone: "서아프리카, profit: 7" },
];

const myRating = rating(voyage, history);
