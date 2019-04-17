// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('form-signin');

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
}());

//	Declaration des variables
var form  = document.getElementsByClassName('form-signin');
var emailField = document.getElementById('inputEmail');
var pwdField = document.getElementById('inputPassword');

//  Contrôle du champ de l'adresse mail
emailField.addEventListener("input", function (event) {
  
  var mailRgex = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if(!mailRgex.test(emailField.value)){
	emailField.setCustomValidity("Adresse e-mail normalisée...");
  }
  else {
	emailField.setCustomValidity("");
  }
}, false);

//	Controle de la saisie du mail
function validateMail() {
  //  Declaration du regEx de controle
  var emailRGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
  //  Test que la saisie correspond a ce qui est demande
  var emailResult = emailRGEX.test(emailField.value);

  if (emailResult) {
	return true;
  }
  else {
	alert("Veuillez saisir une adresse email valide...");
	return false;
  }
}

//  Contrôle du champ du mot de passe
pwdField.addEventListener("input", function (event) {
  //  Declaration du regEx de controle
  var pwdRGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  //  Test que la saisie correspond a ce qui est demande
  var pwdResult = pwdRGEX.test(pwdField.value);
  
  if(pwdResult) {
	pwdField.setCustomValidity("");
  }
  else {
	pwdField.setCustomValidity("8 caractères contenant au moins un chiffre, \n\
								une lettre majuscule et minuscule...");
  }
}, false);


//	Controle de la saisie du mot de passe
function validatePassword() {
  //  Declaration du regEx de controle
  var passwordRGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  //  Test que la saisie correspond a ce qui est demande
  var passwordResult = passwordRGEX.test(pwdField.value);

  if (passwordResult) {
	return true;
  }
  else {
	alert("Veuillez saisir un mot de passe valide...");
	return false;
  }
}


// Fonction de validation du formualire
function validConnexion() {
  if (!validateMail()) {
	return false;
  }
  if (!validatePassword()) {
	return false;
  }
alert("Mail : " + emailField.value + "\npassword : " + pwdField.value + "\nForm Submitted Successfully...");
return true;
}
