var number = [1,2,3];

var arr = number.map(Math.sqrt);

console.log(arr)
//map doesnot affect the original array values
//adding values
//map doesnot work when the array without values.

var no = [1,2,3,4,5];

var addThose  = no.map(addIt);

function addIt(item){ 
   return item +1;
}

console.log(addThose);


//getting full names

var names= [{
    firstname: "Kannan",
    lastname: "Palani"
}]


var fullname = names.map(addName);

function addName(item){
   var add = [item.firstname,item.lastname].join(" ");
   return add
}

console.log(fullname);