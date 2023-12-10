import { MockInvoice, Today } from "./6.1-extract-function.fixture.js";

function print0wing(invoice) {
  let outstanding = 0;

  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)을 기록한다.
  // NOTE: 책의 Clock.today 대신 Today class를 만듦
  const today = new Today();

  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("***************");
  console.log("**** 고객 채무 ****");
  console.log("***************");
}

function printDetails(invoice, outstanding) {
  console.log(`고객맹: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

print0wing(MockInvoice);
