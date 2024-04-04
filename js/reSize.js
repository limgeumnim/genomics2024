// Throttle(가로 사이즈 860px 이하일 경우 메뉴 숨기기, 100)
//headerMenu 변수 {
const minIcon = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const dropmenu = document.querySelector(".drop-menu");
// }

//footerMenu 변수 {
const footerSize = document.querySelector("footer .info .inner ul");
// }

//aboutUs 변수 {
const aboutUsTextLine = document.querySelector(".About-us .text-line");
const aboutUsImage = document.querySelector(".About-us .image");
// }

//r&d 변수 {
const RDTextLine = document.querySelector(".Research-Development .main-group");
const RDImage = document.querySelector(".Research-Development .image");
// }

//service 변수 {
//service 페이지 체크 변수
const serivceImage1 = document.querySelector(".BD .text-line .sub-group-1");
//serivce title 변수
const headTitle = document.querySelectorAll(".Service.head-title");
const subTitle = document.querySelectorAll(".Service.sub-title");
//service BD 변수
const serivceImage = document.querySelectorAll(
  ".BD .inner .text-line .sub-group"
);
const serviceIcon = document.querySelectorAll(
  ".BD .text-line .sub-group .icon"
);
const serviceReSizeGroup = document.querySelectorAll(
  ".BD .text-line .sub-group .reSize-group"
);
const prCenterGroup = document.querySelector(
  ".main.PrCenter .inner .group .group-1"
);
// }

function variableCheck() {
  for (let i = 0; i < serivceImage.length; i++) {
    console.log(serivceImage[i]);
  }
}
// variableCheck();

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
if (isMobile()) {
  console.log("모바일");
} else {
  console.log("PC");
}
// isMobile();

function throttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      func.apply();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function checkWidth() {
  let width = 0;
  // if (isMobile()) {
  //   console.log("모바일 기기");
  //   if (window.matchMedia("(orientation: portrait)").matches) {
  //     console.log("세로 모드");
  //     width = screen.width;
  //     console.log("Display width =" + width);
  //   } else {
  //     console.log("가로 모드");
  //     width = screen.height;
  //     console.log("Display width =" + width);
  //   }
  //   return width;
  // } else {
  // console.log("Display width =" + document.documentElement.clientWidth);
  width = document.documentElement.clientWidth;
  return width;
  // }
}

function handleMenuResize() {
  let width = checkWidth();
  // console.log(width);
  if (width > 1145) {
    if (prCenterGroup) {
      prCenterGroup.classList.remove("flex");
    }
  }
  if (width <= 1145) {
    if (prCenterGroup) {
      prCenterGroup.classList.add("flex");
    }
  }
  if (width > 910) {
    if (RDTextLine) {
      RDTextLine.classList.remove("small");
      RDImage.classList.remove("small");
    }
  }
  if (width <= 910) {
    if (RDTextLine) {
      RDTextLine.classList.add("small");
      RDImage.classList.add("small");
    }
  }
  if (width > 860) {
    minIcon.classList.remove("show");
    menu.classList.add("show");
    if (aboutUsTextLine) {
      aboutUsTextLine.classList.remove("small");
      aboutUsImage.classList.remove("small");
    }
  }
  if (width <= 860) {
    minIcon.classList.add("show");
    menu.classList.remove("show");
    if (aboutUsTextLine) {
      aboutUsTextLine.classList.add("small");
      aboutUsImage.classList.add("small");
    }
  }
  if (width > 1180) {
    if (serivceImage1) {
      for (let i = 0; i < serivceImage.length; i++) {
        serivceImage[i].classList.remove("middle-size");
        serivceImage[i].classList.remove("small-size");
      }
    }
  }
  if (width <= 1180) {
    if (serivceImage1) {
      for (let i = 0; i < serivceImage.length; i++) {
        serivceImage[i].classList.remove("small-size");
        serivceImage[i].classList.add("middle-size");
      }
    }
  }
  if (width > 800) {
    for (let i = 0; i < serviceReSizeGroup.length; i++) {
      serviceReSizeGroup[i].classList.remove("small-size");
    }
    for (let i = 0; i < serviceIcon.length; i++) {
      serviceIcon[i].classList.remove("small-size");
    }
    for (let i = 0; i < headTitle.length; i++) {
      headTitle[i].classList.remove("small");
    }
    for (let i = 0; i < subTitle.length; i++) {
      subTitle[i].classList.remove("small");
    }
  }
  if (width <= 800) {
    if (serivceImage1) {
      for (let i = 0; i < serivceImage.length; i++) {
        serivceImage[i].classList.add("small-size");
      }
      for (let i = 0; i < serviceReSizeGroup.length; i++) {
        serviceReSizeGroup[i].classList.add("small-size");
      }
      for (let i = 0; i < serviceIcon.length; i++) {
        serviceIcon[i].classList.add("small-size");
      }
      for (let i = 0; i < headTitle.length; i++) {
        headTitle[i].classList.add("small");
      }
      for (let i = 0; i < subTitle.length; i++) {
        subTitle[i].classList.add("small");
      }
    }
  }
}

function handleFooterResize() {
  let width = checkWidth();

  if (width < 990) {
    footerSize.classList.add("small");
  } else {
    footerSize.classList.remove("small");
  }
}

//icon 클릭 시 드롭다운 메뉴 생성, blur 시 0.2초 딜레이
minIcon.addEventListener("click", function () {
  if (minIcon.classList.contains("click")) {
    minIcon.classList.remove("click");
    dropmenu.classList.remove("click");
  } else {
    minIcon.classList.add("click");
    dropmenu.classList.add("click");
  }
});

minIcon.addEventListener("blur", function () {
  setTimeout(function () {
    minIcon.classList.remove("click");
    dropmenu.classList.remove("click");
  }, 200);
});
//

//사이즈 조절 Evnet
// window.addEventListener("resize", throttle(handleMenuResize, 100));
window.addEventListener("resize", handleMenuResize);
window.addEventListener("load", handleMenuResize);

window.addEventListener("resize", throttle(handleFooterResize, 100));
window.addEventListener("load", handleFooterResize);
