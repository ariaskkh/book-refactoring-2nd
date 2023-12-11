// 변수 캡슐화하기

import { assert } from "console";

// ex1
let defaultOwner = { firstName: "마틴", lastName: "파울러" };
function getDefaultOwner() {
  return Object.assign({}, defaultOwner);
}
function setDefaultOwner(arg) {
  return (defaultOwner = arg);
}

spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: "하이", lastName: "찌노리" });

// ex2 값 캡슐화하기
const owner1 = defaultOwner();
assert.equal("파울러", owner1.lastName, "처음 값 확인");
const owner2 = defaultOwner();
owner2.lastName = "파슨스";
assert.equal("파슨스", owner1.lastName, "owner2를 변경한 후"); // 성공할까?
