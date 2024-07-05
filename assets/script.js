// Déclaration des diapositives avec les chemins des images et les textes associés
const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg", // Chemin de l'image
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" // Texte associé à l'image
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tarifs compétitifs <span>et délais rapides</span>"
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Services <span>de haute qualité</span>"
	},
	{
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants avec découpe laser sur mesure"
	}
];
console.log(slides);
// Affiche le tableau initial des diapositives

// Variable pour suivre la diapositive actuelle
let currentSlide = 0;
console.log(currentSlide);
// Affiche la valeur initiale de currentSlide

// Sélection des éléments HTML nécessaires
const bannerImg = document.querySelector('.banner-img'); // Sélectionne l'image de la bannière
const bannerText = document.querySelector('#banner p'); // Sélectionne le paragraphe de la bannière
const arrowLeft = document.querySelector('.arrow_left'); // Sélectionne la flèche gauche
const arrowRight = document.querySelector('.arrow_right'); // Sélectionne la flèche droite
const dotsContainer = document.querySelector('.dots'); // Sélectionne le conteneur des points (dots)

console.log({ bannerImg, bannerText, arrowLeft, arrowRight, dotsContainer });
// Affiche les éléments HTML sélectionnés

console.log(slides.length);
// Affiche le nombre total d'objets dans le tableau slides

// Fonction pour initialiser les points de navigation (dots)
function setupDots() {
	slides.forEach((_, index) => {
		const dot = document.createElement('span'); // Crée un nouvel élément <span> pour chaque point
		dot.classList.add('dot'); // Ajoute la classe CSS 'dot' pour le style
		if (index === 0) dot.classList.add('dot_selected'); // Sélectionne le premier point par défaut
		// Ajouter un événement de clic pour changer de diapositive lorsqu'on clique sur un point
		dot.addEventListener('click', () => {
			currentSlide = index; // Met à jour la diapositive actuelle
			console.log(currentSlide);
			// Affiche la nouvelle valeur de currentSlide après un clic sur un point
			updateSlide(); // Met à jour l'affichage
		});
		dotsContainer.appendChild(dot); // Ajoute le point au conteneur
		console.log("Point de navigation créé pour l'index :", index, dot);
		// Affiche l'index et l'élément point créé
	});
	console.log("Points de navigation initialisés");
	// Indique que l'initialisation des points est terminée
}

// Fonction pour mettre à jour l'image, le texte et les points de navigation
function updateSlide() {
	console.log(currentSlide);
	// Affiche la diapositive actuelle avant la mise à jour
	bannerImg.src = slides[currentSlide].image; // Met à jour l'image
	bannerText.innerHTML = slides[currentSlide].tagLine; // Met à jour le texte
	console.log("Diapositive mise à jour :", {
		diapositive: currentSlide,
		image: slides[currentSlide].image,
		texte: slides[currentSlide].tagLine
	});
	// Affiche les détails de la diapositive mise à jour
	// Met à jour les points pour montrer quel point est actuellement sélectionné
	document.querySelectorAll('.dot').forEach((dot, index) => {
		dot.classList.toggle('dot_selected', index === currentSlide);
	});
	console.log(currentSlide);
	// Indique que les points ont été mis à jour pour la diapositive
}

// Écouteur d'événements pour la flèche gauche
arrowLeft.addEventListener('click', () => {
	currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
	// Aller à la diapositive précédente ou à la dernière
	console.log("Flèche gauche cliquée, nouvelle diapositive :", currentSlide);
	// Affiche la nouvelle valeur de currentSlide après un clic sur la flèche gauche
	updateSlide(); // Met à jour l'affichage
});

// Écouteur d'événements pour la flèche droite
arrowRight.addEventListener('click', () => {
	currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
	// Aller à la diapositive suivante ou à la première
	console.log("Flèche droite cliquée, nouvelle diapositive :", currentSlide);
	// Affiche la nouvelle valeur de currentSlide après un clic sur la flèche droite
	updateSlide(); // Met à jour l'affichage
});

// Initialiser les points de navigation et afficher la première diapositive
setupDots();
updateSlide();
