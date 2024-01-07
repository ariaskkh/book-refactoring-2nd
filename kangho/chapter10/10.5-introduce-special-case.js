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
}

function isUnknown(arg) {
    if(!((arg instanceof Customer) || (arg === '미확인 고객')))
    throw new Error(`잘못된 값과 비교: <${arg}>`)
    return arg.isUnknown;
}

// client 1
const aCustomer = site.customer
// ...
let customerName;
if(isUnknown(aCustomer)) customerName = '거주자';
else customerName = aCustomer.name;

// client 2
const plan = (isUnknown(aCustomer)) ?
    registry.billingPlans.basic :
    aCustomer.billingPlan;

// client 3
if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan

// client 4
const weeksDelinquent = (isUnknown(aCustomer)) ? 0 : aCustomer.paymentHistory.weeksDelinquent