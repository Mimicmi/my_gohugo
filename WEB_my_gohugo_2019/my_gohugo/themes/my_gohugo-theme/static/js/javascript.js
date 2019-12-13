/* Taille de la side bar à 250px met le margin left à 250px pour le content */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Taille de la side bar à 0 & met le margin left à 0 pour le content */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  /* toggle bar pour les évènements passés de l'association (dans le single asso) */
function ouvrirFermerCache(bouton) {
var divContenu = bouton.nextSibling;
if(divContenu.nodeType == 3) divContenu = divContenu.nextSibling;
if(divContenu.style.display == 'block') {
  divContenu.style.display = 'none';
} else {
  divContenu.style.display = 'block';
}
}