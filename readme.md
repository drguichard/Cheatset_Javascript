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