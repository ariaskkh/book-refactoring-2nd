// 조건부 로직을 다형성으로 바꾸기

// ex1)
function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
    return new createBird(bird).plumage
}

function airSpeedVelocity(bird){
    return new createBird(bird).airSpeedVelocity
}

// factory 함수
function createBird(bird){
    switch (bird.type){
        case "유럽 제비":
            return new EuropeanSwallow(bird);
        case "아프리카 제비":
            return new AfricanSwallow(bird);
        case "노르웨이 파랑 앵무":
            return new NorwegianBlueParrot(bird)
        default:
            return new Bird(bird);
    }
}

class Bird {
    constructor(birdObject){
        Object.assign(this, birdObject);
    }

    get plumage() {
        // 깃털 상태
        return "알 수 없다";
      }
      
    get airSpeedVelocity(bird) {
        // 비행 속도
            return null;
    }      
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "보통이다"
    }

    get airSpeedVelocity() {
        return 35
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return bird.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    }

    get airSpeedVelocity() {
        return 40 - 2 * bird.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return bird.voltage > 100 ? "그을렸다" : "예쁘다";
    }

    get airSpeedVelocity() {
        return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    }
}

