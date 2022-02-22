let btnLU = document.getElementsByClassName('buttonLinkUtili');
let btnT = document.getElementsByClassName('buttonText');
let btnTC = document.getElementsByClassName('buttonTextContent');
let btnA = document.getElementsByClassName('buttonAction');


// Buttons
// First button
btnLU[0].addEventListener("mouseover", function(event) {
  btnT[0].style.backgroundColor = "#4d3187";
  btnA[0].style.backgroundColor = "#293556";
  btnTC[0].innerHTML = 'mc.inaran.it';
}, false);

btnA[0].addEventListener("click", copyText);

btnLU[0].addEventListener("mouseout", function(event) {
  btnT[0].style.backgroundColor = "#293556";
  btnA[0].style.backgroundColor = "#4d3187";
  btnTC[0].innerHTML = 'INDIRIZZO IP';
}, false);

// Second button
btnLU[1].addEventListener("mouseover", function(event) {
  btnT[1].style.backgroundColor = "#4d3187";
  btnA[1].style.backgroundColor = "#293556";
  btnTC[1].innerHTML = '51.81.77.252:5183';
}, false);

btnLU[1].addEventListener("mouseout", function(event) {
  btnT[1].style.backgroundColor = "#293556";
  btnA[1].style.backgroundColor = "#4d3187";
  btnTC[1].innerHTML = 'MAPPA DINAMICA';
}, false);

// Third button
btnLU[2].addEventListener("mouseover", function(event) {
  btnT[2].style.backgroundColor = "#4d3187";
  btnA[2].style.backgroundColor = "#293556";
  btnTC[2].innerHTML = '/faq.html';
}, false);

btnLU[2].addEventListener("mouseout", function(event) {
  btnT[2].style.backgroundColor = "#293556";
  btnA[2].style.backgroundColor = "#4d3187";
  btnTC[2].innerHTML = 'FAQ';
}, false);

// Fourth button
btnLU[3].addEventListener("mouseover", function(event) {
  btnT[3].style.backgroundColor = "#4d3187";
  btnA[3].style.backgroundColor = "#293556";
  btnTC[3].innerHTML = '/donazioni.html';
}, false);

btnLU[3].addEventListener("mouseout", function(event) {
  btnT[3].style.backgroundColor = "#293556";
  btnA[3].style.backgroundColor = "#4d3187";
  btnTC[3].innerHTML = 'DONAZIONI';
}, false);
//Buttons


// Funzione che copia il testo premendo un pulsante
// per funzionare ha bisogno di un elemento input con il testo dentro, io lo creo, copio e distruggo all'istante
function copyText() {
  let copyText = document.getElementById("indIP").innerHTML;
  $('<input type="text" id="eliminare" value="'+copyText+'">').appendTo('body').select();
  document.execCommand("copy");
  $('#eliminare').remove();
}
