function editNav() {
    let x = document.getElementById("myTopnav");
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
const btnSubmit = document.getElementById("submit");
const form = document.getElementById("form");
const closeBtn = document.getElementById("close-modal");

//selection de tous les inputs

const inputFirst = document.querySelector('input[name=first]');
const inputLast = document.querySelector('input[name=last]');
const inputEmail = document.querySelector('input[name=email]');
const inputBirth = document.querySelector('input[name=birthdate]');
const inputTourn = document.querySelector('input[name=quantity]');
const inputCity = document.querySelector('input[name=location]');
const inputConditions = document.querySelector('input[name=conditions]');


//selection de l'id de la div validation 
let resultFirst = document.getElementById("first-validate");
let resultLast = document.getElementById("last-validate");
let resultEmail = document.getElementById("email-validate");
let resultBirth = document.getElementById("birthdate-validate");
let resultTourn = document.getElementById("tournament-validate");
let resultCity = document.getElementById("city-validate");
let resultConditions = document.getElementById("cgv-validate");
let resultDate = document.getElementById("date-validation");

//regex
// lettre et 2 caractères minimun
let regPrenomNom = /[a-zA-Z]{2,64}/;
//lettres, caractères, @ lettres, caratères, POINT , lettres caractères
let regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,16})(\.[a-z]{2,16})?$/;



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
// fermer la modale
function closeModal() {
    modalbg.style.display = 'none';
}

function displayNone(e) {
    e.style.display = "none";
}

// afficher message d'erreur
function afficherMessage(inputdiv) {
    inputdiv.style.display = 'inline-block';
}


/* bordure rouge quand false */
const textC = document.querySelectorAll('.text-control');
textC.forEach(items => {
    items.style.border = '2px solid #e54858'
});

//  bordure en vert quand ok
function borderGreen(indexDuChamp) {
    indexDuChamp.style.border = '2px solid green';
}

inputFirst.addEventListener('keyup', function(e) {
    let value = e.target.value;
    if (value.match(regPrenomNom)) {
        displayNone(resultFirst);
        borderGreen(textC[0]);
    } else {
        afficherMessage(resultFirst);
        resultFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});

inputLast.addEventListener('keyup', function(e) {
    let value = e.target.value;
    if (value.match(regPrenomNom)) {
        displayNone(resultLast);
        borderGreen(textC[1]);
    } else {
        afficherMessage(resultLast);
        resultLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    }
});

inputEmail.addEventListener('keyup', function(e) {
    let value = e.target.value;
    if (value.match(regEmail)) {
        displayNone(resultEmail);
        borderGreen(textC[2]);
    } else {
        afficherMessage(resultEmail);
        resultEmail.innerHTML = "Vous devez choisir une adresse électronique valide.";
    }
});


inputBirth.addEventListener('change', function(e) {
    if (inputBirth.value.length > 0) {
        // sup à 0 pas d'alerte
        displayNone(resultBirth);
        borderGreen(textC[3]);
    } else {
        afficherMessage(resultBirth);
        resultBirth.innerHTML = "Vous devez entrer votre date de naissance.";
    }
});

inputTourn.addEventListener('change', function(e) {
    // écouter changement d'état
    if (inputTourn.value.length > 0) {
        displayNone(resultTourn);
        borderGreen(textC[4]);
    } else {
        afficherMessage(resultTourn);
        resultTourn.innerHTML = "Merci renseigner le nombre de tournoi";
    }
});




// acceptation des CGV 
document.getElementById("checkbox1").attributes["required"] = "";


// notification lorsque le formulaire est ok
function notification() {
    document.getElementById("message").style.display = "block";

}

let count = 0;

function caseVide(input) {
    input.style.display = 'block'
    input.innerHTML = 'Merci de compléter ce champ'
};

//fonction message erreur Nom/prenom
function caseErrorPrenomNom(messageDiv) {
    messageDiv.style.display = 'block';
    messageDiv.innerHTML = 'Merci de renseigner au moins deux caractères'
};

// verification Nom/prenom
function nomPrenom(input, divError) {

    if (input.value.length == 0) {
        afficherMessage(divError);
        caseVide(divError);
        count++;
    } else if (regPrenomNom.test(input.value) == false) {
        caseErrorPrenomNom(divError);
        count++

    } else count = 0
};

// verification email 
function mail(input, divError) {
    if (input.value.length == 0) {
        afficherMessage(divError);
        caseVide(divError);
        count++;

    } else if (regEmail.test(input.value) == false) {
        afficherMessage(divError);
        resultEmail.innerHTML = 'Merci de renseigner une adresse mail valide';
        count++;
    } else count = 0
};


// date
function date() {

    if (inputBirth.value.length == 0) {
        afficherMessage(resultDate);
        resultBirth.innerHTML = 'Veuillez saisir votre date de naissance'
        count++;
    }
};


//tournoi
function tournoi() {
    if (inputTourn.value.length == 0) {
        afficherMessage(resultTourn);
        resultTourn.innerHTML = "Vous devez renseigner le nombre de tournoi";
        count++
    }
};


// ville 
function countCity() {
    let theCity = document.getElementsByClassName("location"),
        i,
        villeCount = 0;
    for (i = 0; i < theCity.length; i++) {
        // vérifier chacune des villes
        if (theCity[i].checked) {
            villeCount++;
        }
    }
    return villeCount;
};

document.querySelectorAll('.location').forEach(item => {
    item.addEventListener('change', e => {
        if (e.target.checked) {
            displayNone(resultCity);
        }
    })
});

function City() {
    if (countCity() == 0) {
        // fonction appelante count 
        afficherMessage(resultCity);
        resultCity.innerHTML = "Vous devez choisir une option.";
        count++;
    }
};


//conditions generales
function boutonCgv() {
    if (inputConditions.checked == false) {
        afficherMessage(resultConditions);
        resultConditions.innerHTML = 'Vous devez accepter les conditions générales';
        count++
    }
};


// Check tout est ok
function validation() {
    nomPrenom(inputFirst, resultFirst);
    nomPrenom(inputLast, resultLast);
    mail(inputEmail, resultEmail);
    date();
    tournoi();
    ville();
    boutonCgv();
};


form.addEventListener("submit", e => {
    e.preventDefault();
    validation();
    if (count == 0) {
        modalbg.style.display = "none";
        notification();
        form.reset();
    }
});



// ferme la notification de reservation bien recue

const closeNotification = document.getElementById("close-notification");
const btnNotification = document.getElementById('btn-notification');
const messageClose = document.getElementById('message')

closeNotification.addEventListener('click', function() {
    messageClose.style.display = 'none';

});


closeNotification.addEventListener('click', function() {
    notificationClose.style.display = 'none';
});