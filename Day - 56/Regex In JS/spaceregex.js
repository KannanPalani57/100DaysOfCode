let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
var result = whiteSpace.match(nonSpaceRegex);
console.log(result);

let spaceRegex = /\s/g;

var result2 = whiteSpace.match(spaceRegex).length;

console.log(result2)