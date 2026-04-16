const clear = document.querySelector("#clear_radio");

const y = document.querySelector("#yellow");
const g = document.querySelector("#green");
const r = document.querySelector("#red");
const colors = [y, g, r];

colors.forEach((everycolor) => {
  everycolor.addEventListener("click", (e) => {
    clear.style.display = "block"; //按任一顏色會跑出清除按鈕
  });
});

clear.addEventListener("click", (e) => {
  colors.forEach((everycolor) => {
    everycolor.checked = false;
    clear.style.display = "none";
  });
});
