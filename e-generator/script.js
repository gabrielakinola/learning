var masterbtn = document.querySelector("#master-btn");
var purchaser = document.getElementById("purchaser");
var artistName = document.getElementById("artist-name");
var tourTitle = document.getElementById("tour-title");
var eventVenue = document.getElementById("event-venue");
var generate = document.querySelector("generatetm");
/*var pass = document.getElementById("purchaser");
var pass = document.getElementById("purchaser");
var pass = document.getElementById("purchaser");
var pass = document.getElementById("purchaser");*/

masterbtn.addEventListener("click", onclick);
function onclick(e) {
  e.preventDefault();

  window.location = "./master/tixm.html";
}

generate.addEventListener("click", onclick1);
function onclick1(e) {
  e.preventDefault();

  console.log(tourTitle.value);
}
