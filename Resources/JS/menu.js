let btnMenuHam = document.getElementById('menuHamburger');
let menuVoci = document.getElementById('menuVoci');
let closeMenuVoci = document.getElementById('closeMenuHam');

// Per azionare e disazionare il menu nello smartphone
btnMenuHam.addEventListener('click', function(event) {
  btnMenuHam.style.display = 'none'
  menuVoci.style.display = 'flex';
});
closeMenuVoci.addEventListener('click', function(event) {
  menuVoci.style.display = 'none';
  btnMenuHam.style.display = 'block'
});