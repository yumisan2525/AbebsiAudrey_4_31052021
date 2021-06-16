function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const span = document.getElementsByClassName("close")[0];
const email = document.getElementById('email');
const first = document.getElementById('first');
const last = document.getElementById('last');


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

// Check validité prénom 

first.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (first.validity.typeMismatch) {
        first.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    } else {
        first.setCustomValidity("");
    }
});

// Check validité nom 

last.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (last.validity.typeMismatch) {
        last.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    } else {
        last.setCustomValidity("");
    }
});

// Check validité adresse email

email.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Veuillez entrer une adresse mail valide !");
    } else {
        email.setCustomValidity("");
    }
});