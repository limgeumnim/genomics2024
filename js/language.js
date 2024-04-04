//언어 쿠키 설정 1시간 만료
function setCookie(cookieName, cookieValue, expiresHour) {
  if (getCookie(cookieName) != "") {
    const expires = new Date();
    expires.setTime(expires.getTime() + expiresHour * 60 * 60 * 1000);
    const cookie = `${cookieName}=${cookieValue};expires=${expires.toUTCString()};path=/`;
    document.cookie = cookie;
  }
}

//언어 쿠키 값 가져오는 함수
function getCookie(cookieName) {
  const name = `${cookieName}=`;
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "en";
}

// 언어 변경 함수
function changeLanguage(newLang) {
  // 새로운 언어로 설정
  let lang = newLang;
  //쿠키에 값 저장
  setCookie("langCookie", lang, 1);
  console.log("Cookie = " + getCookie("langCookie"));
  // 새로운 언어에 맞는 문자열 로드
  loadLanguage(lang);
}

// 언어 로드 함수
function loadLanguage(lang) {
  fetch("language_" + lang + ".json")
    .then((response) => response.json())
    .then((data) => {
      // console.log("Load Data");
      // 로드한 문자열로 페이지 업데이트
      // 포포포문
      for (let key1 in data) {
        for (let key2 in data[key1]) {
          // console.log(
          //   document.querySelector("." + key1 + ("." + key2))
          // );
          const array = document.querySelectorAll("." + key1 + ("." + key2));
          for (let i = 0; i < array.length; i++) {
            let className = array[i];
            className.innerHTML = data[key1][key2];
            // console.log(data[key1][key2]);
          }
        }
      }

      let disableButton = document.querySelector(".enable");
      if (disableButton) {
        disableButton.classList.remove("enable");
      }
      let langButton = document.querySelector("." + lang.toString());
      langButton.classList.add("enable");

      let formLink = document.querySelector(".iframe");
      if (lang == "en") {
        formLink.innerHTML = `<iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd6dR5yUJ8piAwQEjag0oHPijTYBqbhwIeoyKwWXO5fpaeprQ/viewform?embedded=true"
        frameborder="0" scorlling="no" class="iframe">
      </iframe>
    </div>`;
      }
      if (lang == "ko") {
        formLink.innerHTML = `<iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdCdagkaMY2380TZDty67WxqEl2bsqFFkDgPulGXukVxpxPPQ/viewform?embedded=true"
        frameborder="0" scorlling="no" class="iframe">
      </iframe>`;
      }
    });
}

setCookie("langCookie", getCookie("langCookie"), 1);
loadLanguage(getCookie("langCookie"));
