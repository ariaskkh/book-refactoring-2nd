export const MockInvoice = {
  customer: "찌노리",
  dueDate: null,
  orders: [
    {
      amount: 3,
    },
    {
      amount: 4,
    },
  ],
};

export class Today {
  getFullYear() {
    return 2023;
  }

  getMonth() {
    return 11;
  }
  getDate() {
    return 25;
  }
}
