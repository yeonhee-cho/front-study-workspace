function setTimeFn() {
  setTimeout(() => {
    alert("setTimeout 2초 후!");
  }, 2000);
}

// 전역 변수
let intervalId;

function intervalSetFn() {
  intervalId = setInterval(() => {
    console.log("setInterval 1초 마다 생성");
  }, 1000);
}

function intervalClearFn() {
  clearInterval(intervalId);
}
