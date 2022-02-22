// Variabili che ci servono
let xCoordO = document.querySelector('#xCoordO');
let yCoordO = document.querySelector('#yCoordO');
let zCoordO = document.querySelector('#zCoordO');
let xCoordN = document.querySelector('#xCoordN');
let yCoordN = document.querySelector('#yCoordN');
let zCoordN = document.querySelector('#zCoordN');
let nether = document.querySelector('.nether');


// Event listeners
xCoordO.addEventListener('input', () => xCoordN.value = Math.round(xCoordO.value/8));
yCoordO.addEventListener('input', () => yCoordN.value = yCoordO.value);
zCoordO.addEventListener('input', () => zCoordN.value = Math.round(zCoordO.value/8));
xCoordN.addEventListener('input', () => xCoordO.value = Math.round(xCoordN.value*8));
yCoordN.addEventListener('input', () => yCoordO.value = yCoordN.value);
zCoordN.addEventListener('input', () => zCoordO.value = Math.round(zCoordN.value*8));

xCoordO.addEventListener('input', h3DistanceMessage);
zCoordO.addEventListener('input', h3DistanceMessage);
xCoordN.addEventListener('input', h3DistanceMessage);
zCoordN.addEventListener('input', h3DistanceMessage);


// Immettendo le coord dell'Overworld ti suggerisce quelle nel nether in array
function netCoord (x,y,z) {
  let x1 = Math.round(x/8);
  let z1 = Math.round(z/8);
  // console.log('x1 '+x1, 'y1 all\'altezza che ti pare, meglio il 116 blocco', 'z1 '+z1);
  return [x1, 116, z1];
}

// Immettendo le coordinate del nether attraverso singoli numeri o array, ti dice
// il numero di blocchi fra il tuo portale e la ghiacciovia piu' vicina
// Centro ghiavviovie -96 116 356, 
// sono larghe 9 comprese le porte.
// Il ghiaccio e quindi la base di ossidiana del portale vanno ad altezza 116, 
// quindi posate sopra al 115esimo blocco per intenderci
// Centro           -->    -96 116 356
// Nord, Azzurra    -->    -96 116 num<356
// Sud, Gialla      -->    -96 116 num>356
// Est, Verde       -->    num>-96 116 356
// Ovest, Rossa     -->    num<-96 116 356
// [(x1-x)+1]-2 -4 --> rad[(x1-x-5)^2] formula: Esatto numero di blocchi fra un punto e il bordo di una ghiacciovia
// sotto radice e alla seconda per convertire il segno sempre in positivo
function distGhiaVia(x,y,z) {
  if (Array.isArray(x)) {
    y = x[1];
    z = x[2];
    x = x[0];
  }
  // rad[(x1-x-5)^2]
  let distXs = Math.sqrt(Math.pow(-96-x-5, 2));
  let distZs = Math.sqrt(Math.pow(356-z-5, 2));

  let minDist;
  let maxDist;
  let ghiacVicina;
  let ghiacLontana;

  if (distXs-distZs>=0) {
    minDist = distZs;
    maxDist = distXs;
    if (x<-96) ghiacVicina = 'rossa';
    if (x>-96) ghiacVicina = 'verde';
    if (z<356) ghiacLontana = 'azzurra';
    if (z>356) ghiacLontana = 'gialla';
  } else {
    minDist = distXs;
    maxDist = distZs;
    if (z<356) ghiacVicina = 'azzurra';
    if (z>356) ghiacVicina = 'gialla';
    if (x<-96) ghiacLontana = 'rossa';
    if (x>-96) ghiacLontana = 'verde';
  }

   return `Sei distante ${minDist} blocchi dalla ghiacciovia ${ghiacVicina}
   Altrimenti la seconda opzione più vicina è ${maxDist} blocchi dalla ghiacciovia ${ghiacLontana}`;

}

// Funzione che genera il messaggio sulle distanze dalle ghiacciovie quando
// la x e la z nei box nether sono compilati entrambi
function h3DistanceMessage() {
  if (xCoordN.value !== '' && zCoordN.value !== '') {

    let previewH3 = document.querySelector('#distanceMessage');
    if (previewH3) previewH3.remove();

    let h3 = document.createElement('h3');
    h3.id = 'distanceMessage';
    h3.append(distGhiaVia(xCoordN.value, 116,zCoordN.value));

    return nether.append(h3);
  }
}