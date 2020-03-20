document.getElementById("getText").addEventListener('click', getText);

function getText(){
    fetch("text.txt").then(
        function(res){
            return res.text()
        }
    ).then(function(data){
        document.getElementById("outputText").innerHTML = data;
    })
}