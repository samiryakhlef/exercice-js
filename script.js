/* exercice 1*/
for (var i = 0; i < 10; i = i + 1) {
  console.log(i);
}

/* exercice 2 */
var a = 0;
var b = 10;
while (a < 20) {
  a * b;
  console.log(a);
  a++;
}

/*  exercice 3 */

var a = 100;
var b = 52;
while (a <= 10) {
  console.log(a * b);
  a--;
}

/*  exercice 4 */
var a = 1;
while (a <= 10) {
  console.log(a / 2);
  a++;
}
/*  exercice 5 */

var a = 1;
while (a <= 15) {
  console.log("On y arrive presque");
  a++;
}

/* exercice 6 */

var a = 20;
while ((a = 0)) {
  console.log("C'est presque bon");
  a++;
}

/*  exercice 7 */
var a = 1;
while (a <= 100) {
  console.log("on tiens le bon bout");
  a = a + 15;
}
/* exercice 8 */
var a = 200;
while (a >= 0) {
  console.log("enfin");
  a = a - 12;
}

//LES FONCTIONS EXERCICE 1
function test() {
  return true;
}
console.log(test());

//EXERCICE2
var a = "salut";
function test() {
  console.log(a);
}
test(a);

// exercice3
var a = "salut";
var b = "les enfants";
function chaine(a, b) {
  console.log(a + b);
}
chaine(a, b);

// exercice 4
var a = 7;
var b = 3;
function chaine(a, b) {
  if (a > b) {
  } else {
    console.log(a > b);
  }
  if (a < b) {
  } else {
    console.log(a < b);
  }

  if ((a = b)) {
  } else {
    console.log(a === b);
  }
}
chaine();

// EXERCICE 5
var a = "2";
var b = "spectateurs";
function stade(a, b) {
  console.log(a + b);
}
stade(a, b);

//exercice 6

var a = "samir";
var b = "yakhlef";
var c = 40;
function salut(a, b, c) {
  console.log("bonjour" + b + a, "tu as" + 40 + "ans");
}
salut(a, b, c);

//EXERCICE 7
var

function genre(params) {
  function age(params) {

  }
}

// exercice 8
var a = 1;
var b = 1;
var c = 1,

function totale(a, b, c) {
  console.log(1 + 1 + 1);
}
totale(a, b, c)

// EXERCICE 1 LES TABLEAU
var mois = new Array();
mois[0] = "janvier",
  mois[1] = "février",
  mois[2] = "mars",
  mois[3] = "avril",
  mois[4] = "mai",
  mois[5] = "juin",
  mois[6] = "juillet",
  mois[7] = "aout",
  mois[8] = "septembre",
  mois[9] = "octobre",
  mois[10] = "novembre",
  mois[11] = "decembre";
var longueur = mois.length

console.log(mois);

//exercice 2

var mois = new Array();
mois[0] = "janvier",
  mois[1] = "février",
  mois[2] = "mars",
  mois[3] = "avril",
  mois[4] = "mai",
  mois[5] = "juin",
  mois[6] = "juillet",
  mois[7] = "aout",
  mois[8] = "septembre",
  mois[9] = "octobre",
  mois[10] = "novembre",
  mois[11] = "decembre";
var longueur = mois.length

console.log(mois[2]);

//exercice 3


var mois = new Array();
mois[0] = "janvier",
  mois[1] = "février",
  mois[2] = "mars",
  mois[3] = "avril",
  mois[4] = "mai",
  mois[5] = "juin",
  mois[6] = "juillet",
  mois[7] = "août",
  mois[8] = "septembre",
  mois[9] = "octobre",
  mois[10] = "novembre",
  mois[11] = "decembre";
var longueur = mois.length

console.log(mois.indexOf("juin"));

// erxercice 4

var mois = new Array();
mois[0] = "janvier",
  mois[1] = "février",
  mois[2] = "mars",
  mois[3] = "avril",
  mois[4] = "mai",
  mois[5] = "juin",
  mois[6] = "juillet",
  mois[7] = "août",
  mois[8] = "septembre",
  mois[9] = "octobre",
  mois[10] = "novembre",
  mois[11] = "decembre";
var longueur = mois.length

console.log(mois.indexOf("juin"));

//exercice 5

var tab = new Array();
tab[02] = "Aisne",
  tab[59] = "Nord",
  tab[60] = "Oise",
  tab[62] = "Pas-de-Calais",
  tab[80] = "Somme";
var longueur = tab.length


//exercice 6

var tab = new Array();
tab[02] = "Aisne",
  tab[59] = "Nord",
  tab[60] = "Oise",
  tab[62] = "Pas-de-Calais",
  tab[80] = "Somme";
var longueur = tab.length
console.log(tab.indexOf(59));

//exercice 7

var tab = new Array();
var tab = "Reims"
tab[51],
  tab[02] = "Aisne",
  tab[59] = "Nord",
  tab[60] = "Oise",
  tab[62] = "Pas-de-Calais",
  tab[80] = "Somme";
var longueur = tab.length
console.log(tab);


// exercice 8 

var mois = new Array();
for (i = 0; i < mois.length; i++) {
  mois = mois + mois[0]
}
mois[0] = "janvier",
  mois[1] = "février",
  mois[2] = "mars",
  mois[3] = "avril",
  mois[4] = "mai",
  mois[5] = "juin",
  mois[6] = "juillet",
  mois[7] = "aout",
  mois[8] = "septembre",
  mois[9] = "octobre",
  mois[10] = "novembre",
  mois[11] = "decembre";
console.log(mois);

// exercice 9

var tab = new Array();
for (i = 02; i < tab.length; i++) {
  tab = tab + tab[0]
}
tab[02] = "Aisne",
  tab[59] = "Nord",
  tab[60] = "Oise",
  tab[62] = "Pas-de-Calais",
  tab[80] = "Somme";
console.log(tab);

// exercice 10

