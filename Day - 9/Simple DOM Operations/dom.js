//console.dir(document);

//console.log(document.domain);

//console.log(document.title);
//document.title = "First Dom Page";

//console.log(document.head);

//console.log(document.all);

//console.log(document.body);

//console.log(document.images);


//using GETELEMENTBYID

//var title = document.getElementById(("title1"));
//console.log(title);
//title.textContent = "Using JS DOM";
//innerText also there..

var body = document.getElementById("main");
console.log(body);

var mainline = document.getElementById("line");


console.log(mainline);

mainline.innerHTML = "<h3>Whoa! I used DOM to manipulate the Elements</h3>"


var litem = document.getElementById("lastline");
litem.style.borderBottom = "solid 3px #000";