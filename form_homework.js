const clear = document.querySelector("#clear_radio");

const y = document.querySelector("#yellow");
const g = document.querySelector("#green");
const r = document.querySelector("#red");
const colors = [y, g, r];

colors.forEach((eachcolor) => {
  eachcolor.addEventListener("click", (e) => {
    clear.style.display = "block";
  });
});

clear.addEventListener("click", (e) => {
  colors.forEach((eachcolor) => {
    eachcolor.checked = false;
    clear.style.display = "none";
  });
});
