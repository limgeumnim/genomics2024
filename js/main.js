// scroll 상단 고정
history.scrollRestoration = "manual";

//Swiper
const swiper = new Swiper(".swiper-container", {
  //speed : 클수록 느려짐
  speed: 600,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides: 1,
  observer: true,
  navigation: {
    prevEl: ".main .swiper-prev",
    nextEl: ".main .swiper-next",
  },
});

//팝업 함수
//문구 팝업
let popupString = document.getElementById("notice");
//이미지 팝업
let popupImg = document.getElementById("notice-img");
function openPopup() {
  popupImg.style.display = "block";
}

// 팝업 닫기 함수
function closePopup() {
  popupImg.style.display = "none";
}

function checkWidth() {
  let width = 0;
  // console.log("Display width =" + document.documentElement.clientWidth);
  width = document.documentElement.clientWidth;
  return width;
}
function checkHeigth() {
  let heigth = 0;
  // console.log("Display Height =" + document.documentElement.clientHeight);
  heigth = document.documentElement.clientHeight;
  return heigth;
}

const popupWidth = document.querySelector("#notice");
const popupMainText = document.querySelector("#notice .main-text");
function reSizePopup() {
  let width = checkWidth();
  let heigth = checkHeigth();
  console.log(width);
  if (width < 812 || heigth < 790) {
    if (!popupWidth.classList.contains("small")) {
      popupWidth.classList.add("small");
      popupMainText.classList.add("hidden");
    }
  } else {
    if (popupWidth.classList.contains("small")) {
      popupWidth.classList.remove("small");
      popupMainText.classList.remove("hidden");
    }
  }
}

//index.html 시작 시 팝업
window.onload = function () {
  if (!getCookie("popUpCheck")) {
    openPopup();
  }
};

function setCookie(cookieName, cookieValue, expiresHour) {
  if (getCookie(cookieName) !== "") {
    const expires = new Date();
    expires.setTime(expires.getTime() + expiresHour * 60 * 60 * 1000);
    const cookie = `${cookieName}=${cookieValue};expires=${expires.toUTCString()};path=/`;
    document.cookie = cookie;
  }
}
function getCookie(cookieName) {
  const name = cookieName + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length) === "true";
    }
  }
  return false;
}

// console.log("cookie = " + getCookie("popUpCheck"));

window.addEventListener("resize", reSizePopup);
window.addEventListener("load", reSizePopup);
