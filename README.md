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
