// Markdown 파일 경로
let markdownFile = "notice.md";
const popupCotent = document.querySelector("#notice .content");
const noticeContent = document.querySelector("#notice-page");

console.log(noticeContent);

fetch(markdownFile)
  .then((response) => response.text())
  .then((mdContent) => {
    // Markdown을 HTML로 변환
    let htmlContent = marked.parse(mdContent);
    if (popupCotent) {
      popupCotent.innerHTML = htmlContent;
    }
    if (noticeContent) {
      noticeContent.innerHTML = htmlContent;
    }

    // console.log(htmlContent);
  })
  .catch((error) => {
    console.error("파일 읽기 오류:", error);
  });
