// 문장을 함수로 옮기기

// ex1 사진 관련 데이터를 HTML로 내보내는 코드
function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}
function photoDiv(p) {
  return ["<div>", emitPhotoData(p), "</div>"].join("\n");
}

function emitPhotoData(p) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join("\n");
}
