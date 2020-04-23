document.getElementById("getText").addEventListener('click', getText);
const text = document.getElementById("nametext");


function getText(){
    fetch("text.txt").then(
        function(res){
            return res.text()
        }
    ).then(function(data){
        document.getElementById("outputText").innerHTML = data;
    })
}

function getJson(){
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        let texthere = ""
       data.forEach(data =>{
           texthere = `<li>the id is,${data.id}</li>
           <li>the name is,${data.name}</li>`;    
       })
       text.innerHTML = texthere
    }
        )
}


getJson()