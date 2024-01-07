// 특이 케이스 추가하기

// ex1)
class Site {
    get customer() {return this._customer}
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
    get paymentHistory(){
        // ...
    }
}

// client 1
const aCustomer = site.customer
// ...
let customerName;
if(aCustomer === '미확인 고객') customerName = '거주자';
else customerName = aCustomer.name;

// client 2
const plan = (aCustomer === '미확인 고객') ?
    registry.billingPlans.basic :
    aCustomer.billingPlan;

// client 3
if (aCustoemr !== '미확인 고객') aCustomer.billingPlan = newPlan

// client 4
const weeksDelinquent = (aCustomer === '미확인 고객') ? 0 : aCustomer.paymentHistory.weeksDelinquent