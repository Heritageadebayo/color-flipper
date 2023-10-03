const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
btn = document.getElementById("btn");
color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getsumm();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getsumm() {
  return Math.floor(Math.random() * colors.length);
}
