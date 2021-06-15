function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
var modalbg = document.querySelector(".bground");
var modalBtn = document.querySelectorAll(".modal-btn");
var formData = document.querySelectorAll(".formData");
var span = document.getElementsByClassName("close")[0];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// fermer la modale
span.onclick = function() {
    modalbg.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalbg) {
        modalbg.style.display = "none";
    }
}