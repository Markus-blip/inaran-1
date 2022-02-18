// Variabili utili per le seguenti funzioni e eventListeners
let btnMenuHam = document.getElementById('menuHamburger');
let menuVoci = document.getElementById('menuVoci');
let closeMenuVoci = document.getElementById('closeMenuHam');
let urlPathArr = window.location.href.split('/');

// Lancio funzioni
activeMenuLink(1, 'regolamento');
activeMenuLink(2, 'membri');
activeMenuLink(3, 'forum');
activeMenuLink(4, 'shop');
activeMenuLink(5, 'login');

// Per azionare e disazionare il menu nello smartphone
btnMenuHam.addEventListener('click', function(event) {
  btnMenuHam.style.display = 'none'
  menuVoci.style.display = 'flex';
});
closeMenuVoci.addEventListener('click', function(event) {
  menuVoci.style.display = 'none';
  btnMenuHam.style.display = 'block'
});


// FUNZIONI
// Funzione che evidenziano la voce di menu corrispondente alla pagina in esecuzione
function activeMenuLink (n, pagina) {
  n = n-1; // cosi quando chiami la funz non parti da zero ma da 1 :)
  if (urlPathArr[urlPathArr.length-1].split('.')[0] === pagina) {
    document.querySelectorAll('nav ul li a')[n].style.color = '#4d3187';
    document.querySelectorAll('nav ul li a')[n].style.textShadow = '0.1px 0.1px 0.1px #4d3187';
    document.querySelectorAll('nav ul li a')[n].style.fontWeight = '700';
    if (pagina === 'login') document.querySelector('nav ul li a .login').style.opacity = '100%';
  }  
}