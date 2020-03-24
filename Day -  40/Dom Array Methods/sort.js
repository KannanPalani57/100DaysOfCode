const array = [1,111,2,222,3,333,4,444];

const sortedArr = array.sort();


console.log(sortedArr);  //It sorts the String.


const ascendingOrder = array.sort((a,b)=>{
    return a-b;
})  

const decendingOrder = array.sort((a,b)=>{
    return b-a;
})  

console.log(ascendingOrder);


console.log(decendingOrder);


