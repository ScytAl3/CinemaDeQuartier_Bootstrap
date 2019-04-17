//	Declaration des variables pour le traitement du fichier JSON
var index, titreFilm, data;
//  On selectionne l element qui a l id='container'
var divContainer = document.getElementById('recherche-film');
var articleImg = document.getElementById('affiche');
var articleInfos = document.getElementById('informations');
//  On initialise la creation de la dropdown
var dropdown = document.createElement('select');
createDropdown(dropdown);
//  On ajoute l element fille dropdown a l element parent
divContainer.appendChild(dropdown);
//------------------------------------------------------------------
//	Creation de constant pour traiter les informations localStorage
//------------------------------------------------------------------
const h2 = document.querySelector('h2');
const logout = document.querySelector('#oublier');
//	Afficher si il y en a les informations stocker sur le navigateur
afficherNomPrenom();

//  Chargement de l 'URL du fichier JSON que nous voulons récupérer dans une variable
var urlJSON = 'json/film-list.json';
//	Creation d une requete en instanciant un nouvel objet XMLHttpRequest
var request = new XMLHttpRequest();
//	Ouverture d une nouvelle requête grâce à la méthode open()
request.open('GET', urlJSON, true);
//	On signifie au serveur que nous attendons à recevoir du text comme valeur de retour
request.responseType = 'text';
//	On envoie la requete grâce à la méthode send()
request.send();

//  Traitement de la reponse apres que le serveur a repondu
request.onload = function() {
  //	Si la requete est terminee et la reponse recu et le code d etat HTTP de la reponse = 200
  if (request.readyState === 4 && request.status === 200) {
	//  On recupere dans une variable le parse du fichier JSON
	data = JSON.parse(request.responseText);
	//  Appelle de la fonction charger les differents titres de films
	optionLoad(data);
   } else {
	// Pas encore pret ou probleme avec la requete
	alert('Un problème est survenu avec la requête !');
  }
};

//	Fonction pour la creation et l initialisation de la liste deroulante
function createDropdown(dropdown) {
  dropdown.length = 0;
  let defaultOption = document.createElement('option');
  defaultOption.text = '--Choisissez un titre--';
  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;
}

//	Fonction pour charger les films dans la liste deroulante
function optionLoad(myData) {
  for (let i = 0; i < myData.length; i++) {
	var option = document.createElement('option');
	option.value = myData[i].Title;
	option.text = myData[i].Title;
	dropdown.add(option);
  }
}

// Traitement dynamique quand une nouvelle <option> est selectionnee
dropdown.addEventListener('change', function() {
  index = dropdown.selectedIndex;
  titreFilm = dropdown.value;
  //  Suppression de l affiche existante
  removeElement('affiche');
  //  Suppression des informations existantes
  removeElement('informations');
  //  Ajout de l affiche et des informations du film selectionne
  afficheInfo(data, index);
});

//	Fonction pour recuperer l affiche et les informations d un film
function afficheInfo(jsonObj, i) {
  //  Si on a selectionne un film
  if(i > 0) {
	//	On creer l element image
	var img = document.createElement('img');
	//	On recupere la valeur de l image
	img.src = jsonObj[i-1].Poster;
	//	On ajoute l element image a l element article
	articleImg.appendChild(img);

	//	Creation de divers elements qui vont contenir les infos du film
	var annee = document.createElement('p');
	var genre = document.createElement('p');
	var realisateur = document.createElement('p');
	var acteur = document.createElement('p');
	var resume = document.createElement('p');
	var siteWeb = document.createElement('a');
	//	On recupere les valeurs a appliquer aux elements crees
	annee.innerHTML = '<span>Année de sortie : </span>' + jsonObj[i-1].Released;
	//annee.textContent = 'Année de sortie : ' + jsonObj[i-1].Released;
	genre.innerHTML = '<span>Genre : </span>' + jsonObj[i-1].Genre;
	realisateur.innerHTML = '<span>Réalisateur : </span>' + jsonObj[i-1].Director;
	acteur.innerHTML = '<span>Acteurs : </span>' + jsonObj[i-1].Actors;
	resume.innerHTML = '<span>Résumé : </span>' + jsonObj[i-1].Plot;	
	//	Creation d une <div> pour stocker les infos
	var myInfo = document.createElement('div');
	//	On ajoute les <p> dans la <div>
	myInfo.appendChild(annee);
	myInfo.appendChild(genre);
	myInfo.appendChild(realisateur);
	myInfo.appendChild(acteur);
	myInfo.appendChild(resume);
	//	On creer le lien uniquement s il existe dans le fichier JSON
	if (jsonObj[i-1].Website !=="N/A"){
	  //  recuperation du lien pour l element <a href="">
	  siteWeb.setAttribute('href', jsonObj[i-1].Website);
	  //  creation du texte cliquable
	  siteWeb.innerHTML = "Site web du film";
	  myInfo.appendChild(siteWeb);
	}	
	//	On ajoute la <div> a l element article
	articleInfos.appendChild(myInfo);
  }
}

//	Fonction pour enlever un element existant
function removeElement(elementId) {
  // Eleve un element dans le document
  var element = document.getElementById(elementId);
  while (element.firstChild) {
	element.removeChild(element.firstChild);
  }
}

//	Fonction pour recuperer des informations stocker a l aide du localStorage
function afficherNomPrenom(){
  // vérifie si les elements 'name' et 'firstname' sont stockes dans le web storage
  if(localStorage.getItem('name') && localStorage.getItem('firstname')) {
	// Si c'est le cas, affiche un accueil personnalisé
	let name = localStorage.getItem('name');
	let firstname = localStorage.getItem('firstname');
	h2.textContent = 'Bienvenue, ' + firstname + ' ' + name;
  } else {
	h2.textContent = "Bienvenue sur notre site ";
	logout.style.display = 'none';
  }
}
//	Execution de la fonction quand on clique sur le lien de deconnexion
logout.addEventListener('click', function() {
  //  On supprime les elements 'name' et 'firstname' du web storage
  localStorage.removeItem('name');
  localStorage.removeItem('firstname');
  //  On executer la fonction afficherNomPrenom() pour afficher la page par defaut
  afficherNomPrenom();
});
