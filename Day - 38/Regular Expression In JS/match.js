let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result);

let word = "Repeat Repeat Repeat";
let test = /Repeat/g; //to get multiple ones
let get = word.match(test);

console.log(get);

//matching anything with wildcard period.

let heystr = "hey! hello ";
let heRegex = /he./;

console.log(heRegex.test(heystr));

//finding mid characters.

let bugstr = "Hello bug";
let bogstr = "bog";
let big = "big";

let bgregex = "b[u,i,a]g";

console.log(bugstr.match(bgregex));
console.log(bogstr.match(bgregex));
console.log(big.match(bgregex));
