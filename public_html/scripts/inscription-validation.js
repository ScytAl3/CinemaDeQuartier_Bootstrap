// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

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

//	Declaration des variables des champs du formulaire
var civilite = document.getElementById('civilite');
var Name = document.getElementById('lastName');
var firstName = document.getElementById('firstName');
var birthdate = document.querySelector('input[type="date"]');
var telNo = document.getElementById('telNo');
var address = document.getElementById('address');
var email = document.getElementById('email');
var confirm_email = document.getElementById('confirm_email');
var password = document.getElementById('password');
var confirm_password = document.getElementById('confirm_password');
//	Declaration des regEx
const nameRGEX = /^[A-Z][a-z -]{1,20}$/;
const telNoRGEX = /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/;
const addressRGEX = /^[0-9A-Za-z\', -]{2,100}$/;
const mailRGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
const pwdRGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

//------------------------------------------------------------------------------
//	Mise a jour du message d erreur lors de la saisie
civilite.addEventListener("input", function(event) {
  if (civilite.options[civilite.selectedIndex].value !=='') {
	// S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    civilite.setCustomValidity("");	
  } 
  else {
	// S'il est invalide, on affiche un message d'erreur personnalisé
    civilite.setCustomValidity("Veuillez choisir votre civilité...");
  }
}, false);

//	Controle sur la liste deroulante
function validateCivilite() {
  if (civilite.selectedIndex !== 0) {
	return true;
  }
  else {
	alert("Vous n'avez pas choisi votre civilité...");
	return false;
  }
}

//------------------------------------------------------------------------------
//	Mise a jour du message d erreur lors de la saisie
Name.addEventListener("input", function(event) {
  //  Test que la saisie du nom correspond a ce qui est demande
  var nameResult = nameRGEX.test(Name.value);
  if (nameResult) {
	// S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    Name.setCustomValidity("");	
  } 
  else {
	// S'il est invalide, on affiche un message d'erreur personnalisé
    Name.setCustomValidity("20 caractères commençant par une majuscule...");
  }
}, false);

//	Controle  de la saisie du nom
function validateName() {  
  //  Test que la saisie du nom correspond a ce qui est demande
  var nameResult = nameRGEX.test(Name.value);
  if (nameResult){
	return true;
  }
  else {
	alert("Nom : 20 caractères max commençant par une majuscule...");
	return false;
  }
}

//------------------------------------------------------------------------------
//	Mise a jour du message d erreur lors de la saisie
firstName.addEventListener("input", function(event) {
  //  Test que la saisie du prenom correspond a ce qui est demande
  var firstNameResult = nameRGEX.test(firstName.value);
  if (firstNameResult) {
	// S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    firstName.setCustomValidity("");	
  } 
  else {
	// S'il est invalide, on affiche un message d'erreur personnalisé
    firstName.setCustomValidity("20 caractères commençant par une majuscule...");
  }
}, false);

//	Controle  de la saisie du prenom
function validatefirstName() {
  //  Test que la saisie du prenom correspond a ce qui est demande
  var firstNameResult = nameRGEX.test(firstName.value);
  if (firstNameResult){
	return true;
  }
  else {
	alert("Prénom : 20 caractères commençant par une majuscule...");
	return false;
  }
}

//------------------------------------------------------------------------------
//	Controle de la date de naissance inferieure a la date du jour
function validateDate() {
  var bDay = new Date(birthdate.value);
  var aujourdhui = new Date(Date.now());

  if (bDay > aujourdhui){
	alert("La date de naissance ne peut pas être supérieur à aujourd'hui...");
	return false;
  }
  else {
	return true;
  }
}

//------------------------------------------------------------------------------
//	Mise a jour du message d erreur lors de la saisie
telNo.addEventListener("input", function(event) {
  //  Test que la saisie correspond a ce qui est demande
  var telNoResult = telNoRGEX.test(telNo.value);
  if (telNoResult) {
	// S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    telNo.setCustomValidity("");	
  } 
  else {
	// S'il est invalide, on affiche un message d'erreur personnalisé
    telNo.setCustomValidity("Numéro au format international\nex : +33610254585...");
  }
}, false);

//	Controle de la saisie du numero de telephone
function validatetelNo() {
  //  Test que la saisie correspond a ce qui est demande
  var telNoResult = telNoRGEX.test(telNo.value);
  if (telNoResult){
	return true;
  }
  else {
	alert("Numéro de téléphone au format international\n\
			ex : +33610254585...");
	return false;
  }
}

//------------------------------------------------------------------------------
//	Mise a jour du message d erreur lors de la saisie
address.addEventListener("input", function(event) {
  //  Test que la saisie correspond a ce qui est demande
  var addressResult = addressRGEX.test(address.value);
  if (addressResult) {
	// S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    address.setCustomValidity("");	
  } 
  else {
	// S'il est invalide, on affiche un message d'erreur personnalisé
    address.setCustomValidity("100 caractères maximum...");
  }
}, false);

//	Controle de la saisie de l adresse
function validateAddress() {
  //  Test que la saisie correspond a ce qui est demande
  var addressResult = addressRGEX.test(address.value);

  if (addressResult){
	return true;
  }
  else {
	alert("Adresse: 100 caractères max...");
	return false;
  }
}

//------------------------------------------------------------------------------
//	Mise a jour du message d erreur lors de la saisie
email.addEventListener("input", function (event) {   
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if(!mailRGEX.test(email.value)){
	email.setCustomValidity("Adresse e-mail normalisée...");
  }
  else {
	email.setCustomValidity("");
  }
  
}, false);

//	Controle de la saisie du mail
function validateMail() {
  //  Test que la saisie correspond a ce qui est demande
  var emailResult = mailRGEX.test(email.value);

  if (emailResult) {
	return true;
  }
  else {
	alert("Veuillez saisir une adresse email valide...");
	return false;
  }
}

//	Verification que les emails sont identiques
function confirmEmail() {
  if (email.value !== confirm_email.value) {
	confirm_email.setCustomValidity("L'adresse mail de confirmation est différente...");
	return false;
  }
  else {
	confirm_email.setCustomValidity('');
	return true;
  }
}

//------------------------------------------------------------------------------
//	Mise a jour du message d erreur lors de la saisie
password.addEventListener("input", function (event) {  
  //  Test que la saisie correspond a ce qui est demande
  var pwdResult = pwdRGEX.test(password.value);
  
  if(pwdResult) {
	password.setCustomValidity("");
  }
  else {
	password.setCustomValidity("8 caractères contenant au moins un chiffre, \n\
								une lettre majuscule et minuscule...");
  }
}, false);

//	Controle de la saisie du mot de passe
function validatePassword() {
  //  Test que la saisie correspond a ce qui est demande
  var passwordResult = pwdRGEX.test(password.value);

  if (passwordResult) {
	return true;
  }
  else {
	alert("Mot de Passe : 8 caractères contenant au moins un chiffre, \n\
			une lettre majuscule et minuscule...");
	return false;
  }
}

//	Verification que les mots de passe sont identiques
function confirmPassword() {
  if(password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Les mots de passe ne sont pas identiques...");
	return false;
  } else {
    confirm_password.setCustomValidity('');
	return true;
  }
}

//	Verification de tous les champs avant envoi
function formulaireValid() {
  if (!validateCivilite()) {
	return false;
  }
  if (!validateName()) {
	return false;
  }
  if (!validatefirstName()) {
	return false;
  }
  if (!validateDate()) {
	return false;
  }
  if (!validatetelNo()) {
	return false;
  }
  if (!validateAddress()) {
	return false;
  }
  if (!validateMail()) {
	return false;
  }
  if (!confirmEmail()) {
	return false;
  }
  if (!validatePassword()) {
	return false;
  }
  if (!confirmPassword()) {
	return false;
  }
  alert("Le formulaire est bien rempli.");
  //  On stock le nom et le prenom lors de la validation du formulaire que l on
  //  pourra recuperer dans la page qui va s ouvrir
  localStorageInfo();
  return true;
}

//	Fonction pour stocker localement des informations
function localStorageInfo() {
  localStorage.setItem('name', Name.value);
  localStorage.setItem('firstname', firstName.value);
}
