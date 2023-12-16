// 레코드 캡슐화하기

//ex1
const organization = new Organization({
  name: "대대손손 진호형 옷가게",
  country: "CN",
});

function getRawDataOfOrganization() {
  return organization.data;
}
function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this_.data = data;
  }
}

result += `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기 예
getRawDataOfOrganization().name = newName; // 쓰기 예
