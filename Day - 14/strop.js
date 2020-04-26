var me = "I'm kannan, i am learning javascript in last two months";

console.log(me.length);

console.log(me.indexOf("learning"));

console.log(me.toLocaleLowerCase());

console.log(me.toLocaleUpperCase());  //fill it on some variables for future uses.

//substr is used to grap the information from the paricular one.

var grap = me.substr(4,7);
console.log(grap);

//slice method

console.log(me.slice(5,15));
console.log(me.slice(4));
console.log(me.slice(-3));
//replace the element in the string.
//if the replacing content is not there in the element, it doesnot replace anything.
console.log(me.replace("kannan","palani"));
