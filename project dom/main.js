const btn = document.querySelector(".btn");
const pass = document.querySelector("#password");

btn.addEventListener("click", onclick);
function onclick(e) {
  e.preventDefault();
  if (pass.value.toUpperCase() === "ADMIN") {
    window.location = "./landing.html";
  }
}
console.log(window.);
