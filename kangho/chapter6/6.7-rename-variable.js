// 변수 이름 바꾸기

let tpHd = "untitled";
result = `<h1>${title}</h1>`;
setTitle(obj["articleTitle"]);

function title() {
  return tpHd;
}
function setTitle(arg) {
  return (tpHd = arg);
}
