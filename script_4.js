const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70") ;
console.log(entrepreneurs.filter ((period) =>
  {return ((period.year >=1970) && (period.year < 1980))}));
//or array.filter(function(currentValue, index, arr), thisValue)



console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
console.log(entrepreneurs.map ((array) => 
  {return array.first+" "+array.last}));
/*JavaScript | Array map() Method
The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and calling function on every element of array.
Syntax:

array.map(function(currentValue, index, arr), thisValue)
Parameters: This method accepts two parameters as mentioned above and described below:

function(currentValue, index, arr): It is required parameter and it runs on each element of array. It contains three parameters which are listed below:
currentValue: It is required parameter and it holds the value of current element.
index: It is optional parameter and it holds the index of current element.
arr: It is optional parameter and it holds the array.
thisValue: It is optional parameter and used to hold the value of passed to the function.
Return Value: It returns a new array and elements of arrays are result of callback function.
*/

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
entrepreneurs.forEach ((age) => 
  {console.log(`${age.first} ${age.last} aurait ${(new Date().getFullYear()) - age.year} ans cette année`)});


console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille");
console.log(entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0)));
//https://dev.to/banesag/sorting-arrays-of-strings-in-javascript-2g11

