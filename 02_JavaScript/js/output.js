const alertBtn = document.getElementById("alertBtn");
const 변수 = "변수";

function alertFn() {
  alert("이것은 alert 1번 내용입니다.");
  alert(`${변수}(으)로 작업된 alert 입니다.`);
}
function promptFn() {
  prompt("이것은 prompt 1번 내용입니다.\n 내용을 입력해주세요");
}
function confirmFn() {
  confirm("이것은 confirm 1번 내용입니다.\n ~~을 하시겠습니까?");
}
function consoleFn() {
  console.log("이것은 console.log 1번 내용입니다.");
}
