
//script_1
let answer = "";
answer = prompt("Quel est ton prénom ?");
console.log(`Bonjour ${answer}`)

//script_2
let factorielle = 0;
answera = prompt ("De quel nombre veux-tu calculer la factorielle ?")
answera *= (answera-1)
console.log(`Le résultat est ${answera}`)


//script_3
let etages ="a"; //dit que etages est une variable string
etages = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");// etages c'est la reponse à la question
for(let count = 1; count <= etages; count++ ) 
	{console.log(" ".repeat(etages-count)+"#".repeat(count));} //fontion repeat !!!



