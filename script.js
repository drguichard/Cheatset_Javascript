console.log("coucou depuis la console");
//commentaire
/*commentaire
sur deux lignes */


//NOMMER ET TYPE DE VARIABLE
let myVariable = "pirate" //définir contenu de ma variable
console.log(myVariable);
console.log(typeof myVariable); //type de ma variable


//PORTEE DE VARIABLE
let data1 = "variable en let définie dans le bloc principal";
{ //début du sous-bloc
  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";
} //fin du sous-bloc
console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
//console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal


//INCREMENTER DES VARIABLES
let a = 1, b = 1;
a++
console.log(a);
console.log(b += 2); //Les opérateurs suivants marchent également: *=, /=, -= et %=


//CONCATENER VARIABLES
let c = "Bonjour", d = "Monde";
console.log(c + " " + d);

//CONVERTIR TYPE
let e = "7658767";
console.log(typeof e); //rend un string ...

//function Number(e); //transformer en number
console.log(e);


//ARRAYS
let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP) //(3) ["Moussaillon", "Corsaire", "Renégat"]

console.log(statusDeTHP[0]) //Moussaillon

console.log(statusDeTHP.length); //3

statusDeTHP[0] = "La moussaille"; // renommer une entrée
console.log(statusDeTHP[0]) //La moussaille

statusDeTHP.push("Flibustier");// Ajouter une entrée au début
statusDeTHP.unshift("Pirate");// Ajouter une entrée à la fin
console.log(statusDeTHP) //(5) ["Pirate", "La moussaille", "Corsaire", "Renégat", "Flibustier"]

statusDeTHP.pop()// supprime le dernier élément
statusDeTHP.shift()//supprime le premier
statusDeTHP.splice(0,2)// enlèvera 2 éléments à partir de l'indice 0
console.log(statusDeTHP)// ["Renégat"]

statusDeTHP = ["Moussaillon", "Corsaire", "Renégat", "Catin", "Détrousseur", "Hipster"];
statusDeTHP.slice(2,4) //retourne un array issue du array initial (une sorte de sous-array). Ses valeurs seront celles comprises entre l'index 1 (inclus) et 4 (exclus).
console.log(statusDeTHP)// reourne tout le array mais devrait pas...


//CHAINES DE CARACTERES
let f = 3;
  console.log("Bonjour à tous les "+ f);//Bonjour à tous les 3
  console.log(f + "3");//33

let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`; //Notez l'usage des ` ` pour identifier le string et de ${xx} pour identifier la variable à injecter dans le string
console.log(statement);

let longueur = "The Hacking Project"[0]; //retourne la première lettre
console.log(longueur);//T 

let recherche = "The Hacking Project".indexOf("Hack"); // numero de l'index de la lettre H de Hack
console.log(recherche); //4

recherche = "The Hacking Project".toUpperCase();
console.log(recherche); //THE HACKING PROJECT

recherche = "The Hacking Project".toLowerCase();
console.log(recherche); //the hacking project

const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"
console.log(lesson); //(6) ["Git", "Ruby", "Rails", "HTML", "CSS", "JS"]    pour l'invers .join


//LES OBJETS LITTERAUX

//définir un objet JS 
let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
};

console.log(THPSessionNum2.numOfMouss); //80
console.log(THPSessionNum2.sessionMoto); //keep pushing to the top

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss); //79
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); /*{numOfMouss: 79, cities: Array(3), successRate: 0.8, sessionMoto: "keep pushing to the top", favoriteLesson: "Présentation de Sinatra"}
								cities: (3) ["Paris", "Lyon", "Montpellier"]
								favoriteLesson: "Présentation de Sinatra"
								numOfMouss: 79
								sessionMoto: "keep pushing to the top"
								successRate: 0.8
								__proto__: Object*/

let attributName = "successRate"; //accéder aux attributs en utilisant la syntaxe myObject['attribut']. C'est très utile quand le nom de l'attribut est contenu dans une autre variable.
console.log(THPSessionNum2[attributName]); // 0.80


//LES CONDITIONS
console.log("36" == 36); // va retourner TRUE car le contenu est identique
console.log("36" === 36); // va retourner FALSE car d'un côté on a un string et de l'autre un number
// En JS, il existe un opérateur == (deux signes "égal") et un opérateur === (trois signes "égal"). Ils sont très différents : == va comparer uniquement le contenu des deux variables alors que === va comparer le contenu et le type.

let number = 0; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number > 0) {
  console.log("number est positif");
} else if(number === 0) {
  console.log("number est nul");
} else {
  console.log("number est négatif");
} 

if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
}
if (true || false) {
  console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
} 
if (!false) {
  console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
}

weekNum = 1; //teste avec plusieurs valeurs
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}

let numbera = 0; //fais aussi le test avec un chiffre non nul
if (numbera) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = ""; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let myVariablea // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariablea) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}


//LES BOUCLES

//for
for(var count = 0; count <=5; count++){
  console.log(`on va compter jusqu'à 5 : ${count}`);
}
console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
//passe count en var pour tester ce que ça donne

/*
//while
let answer = "";
while(answer !== "oui") {
  console.log("alors ?")
  answer = prompt("Tu kiffes THP ?");
} 
console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D

//while et break
let word = "";
let letter;
while (true) {
    letter = prompt('Tape UNE lettre stp :');
    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log(word);
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
console.log(`voilà ce que tu as tapé : ${word}`);
*/

//for in
//On déclare d'abord un array
  let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}

console.log("**********Parcourons le array en forEach :") //forEach marche juste pour les arrays
weeksOfTHPArray.forEach(weekContent => {
  console.log(weekContent)
});


//LES FONCTIONS
function sayHello() {
  console.log("Bonjour toi !");
}
sayHello();

function multiply(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}
console.log(multiply(2, 3));
console.log(multiply(2, multiply(2,3)));
//console.log(outputNumber); // Va créer une erreur car la variable en let n'existe pas en dehors de la fonction

const multiplya = function(inputNumber1, inputNumber2) {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}
console.log(multiplya(2, 3));
const otherMultiply = multiplya; //On peut ainsi affecter la fonction à une autre variable
console.log(otherMultiply(2, 3));

const multiplyb = (inputNumber1, inputNumber2) => {
  let outputNumber = inputNumber1 * inputNumber2;
  return outputNumber;
}



function script_1() {
  answer = prompt("Quel est ton prénom ?");
  console.log('Bonjour ${answer}');
}







