document.addEventListener("DOMContentLoaded", function (event) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.response);
            document.getElementById('img').innerHTML =  xhr.response;
        }
    }
    xhr.open('GET', '../php/display_files.php', true);
    xhr.send('');
});