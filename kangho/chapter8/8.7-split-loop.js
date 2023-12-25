// 반복문 쪼개기

// ex1
let youngest = people[0] ? people[0].age : Infinity;
let totalSalay = 0;
for (const p of people) {
  if (p.age < youngest) youngest = p.page;
}
for (const p of people) {
  totalSalary += p.salary;
}
return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
