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