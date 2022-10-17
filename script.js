// <!-- ------------JavaScript for the hamburger-------- -->

const nav_Links = document.getElementById("navLinks");

function showMenu() {
  nav_Links.style.zIndex = "2";
}

function hideMenu() {
  nav_Links.style.zIndex = "-2";
}

const home = document.getElementById("home");
const about = document.getElementById("about");
const course = document.getElementById("course");
const conatct = document.getElementById("contact");

course.addEventListener("click", function () {
  console.log("printed");
  document.querySelector(".course").scrollIntoView({ behavior: "smooth" });
});
