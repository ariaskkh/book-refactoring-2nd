// 문장을 호출한 곳으로 옮기기

// ex1
function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  renderPerson(outStream, pserson.photo);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      renderPerson(outStream, pserson.photo);
      outStream.write(`<p>위치: ${photo.location}</p>\n`);
      outStream.write("<div>\n");
    });
}

function renderPerson(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}
