Cinéma de quartier
========================

## _But :_

Conception d'un petit site dynamique pour un cinéma de quartier :

* **Connaître l'architecture Web et les normes W3C et WCAG**. 

* **Développer une interface utilisateur**.

* **Développer des composants d'accès aux données**.

## _Principe :_

* Développer les pages de façon statiques dans un premier temps avec HTML5/CSS3 : Header, navigation, section, aside, footer…
* Utilisation de Bootstrap pour le responsive design du site.
* Développement d'interfaces graphiques : Écran de connexion et formulaire d’inscription.
* Contrôle de la saisie avec l’API du navigateur par défaut et grâce à des JavaScripts.
* Création d’un fichier JSON avec les informations de films récupérées avec l' [API OMDb](https://www.omdbapi.com/).
* Accès aux données en lecture du fichier JSON pour afficher les informations du film sélectionné par l’utilisateur.
* Fichier JavaScript associé aux pages avec formulaire pour leur validation avant envoi.
* Fichier JavaScript associé à la page de choix du film à afficher pour récupérer les informations voulues dans le fichier JSON : utilisation de XMLHttpRequest() et du JSON.parse().
* Affichage dynamique des informations en utilisant les nœuds du Document Object Model (DOM) :
	* Création des options de la liste déroulante pour le choix des titres.
	* Création de la balise \<img> pour l’affiche et d’une \<div> pour les informations, méthode.
	* Suppression dynamique des éléments existants pour afficher les nouveaux.
	
## _Design Screenshots :_

* Home page :
![Image of homepage](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/1-Design/1-conception_page_accueil.png)

* Login page :
![Image of login page](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/1-Design/2-conception_page_connexion.png)

* Registration page :
![Image of registration page](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/1-Design/3-conception_page_inscription.png)

* Search page :
![Image of search page](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/1-Design/4-conception_page_recherche.png)
___
## Production Screenshots :_

* Responsive Homepage :
![Image of Responsive Homepage page](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/2-Production/1-Accueil_Responsive.png)

* Login validation Page :
![Image of Login validation page](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/2-Production/2-Connexion_Validation.png)

* Registration validation Page :
![Image of Registration validation page](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/2-Production/3-Inscription_Validation.png)

* Registration validate Page :
![Image of Registration validate page](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/2-Production/4-Inscription_Valide.png)

* Localstorage for username Page :
![Image of Localstorage for username](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/2-Production/5-Passage_Parametres.png)

* Film choice Page :
![Image of Film choice](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/2-Production/6-Choix_Film.png)

* Display movie information Page :
![Image of Display movie information page](https://github.com/ScytAl3/CinemaDeQuartier_Bootstrap/blob/master/screenshot/2-Production/7-Affichage_Film.png)
