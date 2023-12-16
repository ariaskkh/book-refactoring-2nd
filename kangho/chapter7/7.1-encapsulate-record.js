// 레코드 캡슐화하기

//ex1
const organization = { name: "대대손손 진호형 옷가게", country: "CN" };

result += `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기 예
getRawDataOfOrganization().name = newName; // 쓰기 예

function getRawDataOfOrganization() {
  return organization;
}
