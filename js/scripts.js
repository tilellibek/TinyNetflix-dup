// Fonction pour gérer le défilement de la page et changer la couleur de l'en-tête
function gererScroll() {
    // Sélectionne l'en-tête
    const enTete = document.querySelector('header');

    // Vérifie la position de défilement de la page
    if (window.scrollY > 0) {
        // Ajoute la classe pour que l'en-tête devienne noir lors du défilement vers le bas
        enTete.classList.add('en-tete-scroll');
    } else {
        // Supprime la classe lorsque vous êtes en haut de la page
        enTete.classList.remove('en-tete-scroll');
    }
}

// Ajoute l'événement de défilement et appelle la fonction gererScroll
window.addEventListener('scroll', gererScroll);

// Utilisation de jQuery pour le menu réactif
$(document).ready(function() {
    $(".hamburguer").click(function() {
        $(".menu-haut").show(200);
    });
    $(".btnFermer").click(function() {
        $(".menu-haut").hide(200);
    });
});


