var string = "find the biggest lenght word";


function returnString(string){
    var getEach = string.split(" ");
 
    var countLength = 0;
    for(var i = 0; i < getEach.length; i++){
        if(getEach[i].length > countLength){
            countLength = getEach[i].length;
        }
    }
    console.log(countLength);
    return string;
}

var answer = returnString(string);

