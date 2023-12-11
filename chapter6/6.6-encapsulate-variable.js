// 변수 캡슐화하기

//ex1)
let defaultOwner = { firstName: "마틴", lastName: "파울러" };
function getDefaultOwner() {
  return defaultOwner;
}
function setDefaultOwner(arg) {
  return (defaultOwner = arg);
}

spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: "하이", lastName: "찌노리" });
