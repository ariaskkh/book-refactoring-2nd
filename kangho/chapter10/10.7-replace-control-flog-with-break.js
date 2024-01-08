// 제어 플래그를 탈출문으로 바꾸기

// ex1)
// 생략
for (const p of people) {
  if (p === "조커") {
    sendAlert();
    found = true;
    return;
  }
  if (p === "사루만") {
    sendAlert();
    found = true;
    return;
  }
}
// 생략
