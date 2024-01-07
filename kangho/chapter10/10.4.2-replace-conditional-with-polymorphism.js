// 조건부 로직을 다형성으로 바꾸기

// ex2) 변형 동작을 다형성으로 표현하기

// 투자 등급
function rating(voyage, history) {
  return createRating(voyage, history).value
}

// 함수들을 Rating 클래스로 묶었다.
class Rating {
    constructor(voyage, history){
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
    get voyageRisk(voyage) {
        let result = 1;
        if (voyage.length > 4) result += 2;
        if (voyage.length > 8) result += voyage.length - 8;
        if (["중국", "동인도"].includes(voyage.zone)) result += 4;
        return Math.max(result, 0);
    }

    // 선장의 항해 이력 위험 요소
    get captainHistoryRisk(voyage, history) {
        let result = 1;
        if (history.length < 5) result += 4;
        result += history.filter((v) => v.profit < 0).length;
        if (voyage.zone === "중국" && hasChina(history)) result -= 2;
        return Math.max(result, 0);
    }

    // 중국을 경유하는가?
    get hasChina(history) {
    return history.some((v) => "중국" === v.zone);
    }

    // 수익 요인
    get voyageProfitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === "중국") result += 1;
    if (voyage.zone === "동인도") result += 1;
    if (voyage.zone === "중국" && hasChina(history)) {
        result += 3;
        if (history.length > 10) result += 1;
        if (history.length > 12) result += 1;
        if (history.length > 18) result -= 1;
    } else {
        if (history.length > 8) result += 1;
        if (history.length > 14) result -= 1;
    }
    return result;
    }

}


class ExperiencedChinaRating extends Rating {

}

function createRating(voyage, history){
    if (voyage.zone === "중국" && history.some((v) => "중국" === v.zone))
    return new ExperiencedChinaRating(voyage, history);
    else return new Rating(voyage, history)
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
