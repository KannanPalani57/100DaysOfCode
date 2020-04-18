let example = "_";

let regex = /\w+/   //[/[a-zA-Z0-9_]/]

var result = regex.test(example);

console.log(result)



let nonword = "helo%&"

let rege = /\W+/g;

var get = nonword.match(rege);


console.log(get)


let number = "7hello 3";

let numregex = /\d/

let numoutput = number.match(numregex);

console.log(numoutput)

//\D for opposite numbers