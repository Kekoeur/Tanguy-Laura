document.getElementById('nav-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('nav-toggle').classList.toggle("active");
    document.getElementById('nav-menu').classList.toggle("active");
})// When the user scrolls the page, execute myFunction
let navBtn = document.querySelectorAll('#nav-menu li');
navBtn.forEach(element => {
    element.addEventListener('click', function(){
        document.getElementById('nav-toggle').classList.remove('active')
        document.getElementById('nav-menu').classList.remove("active");
    })
});

window.onscroll = function() {StickyNav()};
// Get the navbar
var navbar = document.getElementById("nav-menu");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function StickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.getElementById('display-eglise').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('eglise').classList.toggle("active");
  document.getElementById('body').classList.toggle("modal");
})
document.getElementById('display-salle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('salle').classList.toggle("active");
  document.getElementById('body').classList.toggle("modal");
})
document.getElementById('display-gps-eglise').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('info-gps-eglise').classList.toggle("active");
  document.getElementById('body').classList.toggle("modal");
})
document.getElementById('display-gps-salle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('info-gps-salle').classList.toggle("active");
  document.getElementById('body').classList.toggle("modal");
})
document.getElementById('close-eglise').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('eglise').classList.remove("active");
  document.getElementById('body').classList.remove("modal");
})
document.getElementById('close-salle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('salle').classList.remove("active");
  document.getElementById('body').classList.remove("modal");
})
document.getElementById('close-gps-eglise').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('info-gps-eglise').classList.remove("active");
  document.getElementById('body').classList.remove("modal");
})
document.getElementById('close-gps-salle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('info-gps-salle').classList.remove("active");
  document.getElementById('body').classList.remove("modal");
})