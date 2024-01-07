// 특이 케이스 추가하기

// ex1)
class Site {
    get customer() {return (this._customer === '미확인 고객')? new UnknownCustomer(): this._customer}
}

class Customer {
    // 고객 이름
    get name(){
        // ...
    }
    // 요금제
    get billingPlan(){
        // ...
    }

    get billingPlan(arg){
        // ...
    }
    // 납부 이력
    set paymentHistory(){
        // ...
    }

    get isUnknown() {return false;}
}

class UnknownCustomer {
    get isUnknown() {return true}

    get name() {return '거주자';}

    get billingPlan() { return registry.billingPlans.basic}
    set billingPlan(arg) {/* 무시한다 */}

    get paymentHistory() {return new NullPaymentHistory()}
}

class NullPaymentHistory {
    get weekDelinquentInLastYear() {return 0}
}

function isUnknown(arg) {
    if(!((arg instanceof Customer) || (arg === '미확인 고객')))
    throw new Error(`잘못된 값과 비교: <${arg}>`)
    return arg.isUnknown;
}

// client 1
const customerName = site.customer.name
// ...

// client 2
const plan = aCustomer.billingPlan;

// client 3
aCustomer.billingPlan = newPlan;

// client 4
const weeksDelinquent =  aCustomer.paymentHistory.weeksDelinquentInLastYear

// 튀는 클라이언트...
const name = !isUnknown(aCustomer) ? aCustomer.name : '미확인 거주자';