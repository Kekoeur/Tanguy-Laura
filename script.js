document.getElementById('nav-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('nav-toggle').classList.toggle("active");
    document.getElementById('nav-menu').classList.toggle("active");
})