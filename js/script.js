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

modal = {
  'eglise':['display-eglise','close-eglise'],
  'salle':['display-salle','close-salle'],
  'info-gps-eglise':['display-gps-eglise','close-gps-eglise'],
  'info-gps-salle':['display-gps-salle','close-gps-salle'],
  'modal':['display_modal','close-modal']
}

for(let key in modal){
  toggle(modal[key][0], key);
  hide(modal[key][1], key);
}
function toggle(btn, modal){
  document.getElementById(btn).addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById(modal).classList.toggle("active");
    document.getElementById('body').classList.toggle("modal-active");
  })
}

function hide(btn, modal){
  document.getElementById(btn).addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById(modal).classList.remove("active");
    document.getElementById('body').classList.remove("modal-active");
  })
}