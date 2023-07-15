/* Using a regex literal to get matches of 'Hello or hello' using global & case-insensitive */

const inputTest = 'Hello world! hello there';
console.log(inputTest.match(/Hello/gi));

/*using Regexp constructuror when we do not know the pattern to be used: */

const pattern = prompt('Enter a search pattern');
const RegExpressionConst = new RegExp(`${pattern}`, 'gi');
console.log(inputTest.match(RegExpressionConst));

/* Regex special charactors - ^ or $ */

console.log(inputTest.match(/^Hello/gi)); //Expected: [Hello] is the first instance.
console.log(inputTest.match(/^world/gi)); //Expected: [null] as 'world' is not first. 