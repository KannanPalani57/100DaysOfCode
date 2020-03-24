const sort_btn = document.getElementById('sort');
const show_millionaries_btn = document.getElementById('show-millionaires');
const add_user_btn = document.getElementById('add-user');
const double_btn = document.getElementById('double');
const calculate_btn = document.getElementById('calculate-wealth');

const main = document.getElementById("main");
getUser();
getUser();

async function getUser(){
   const res = await fetch("https://randomuser.me/api"); //await needs here
   const data = await res.json();  //await needs here
 
   const user = data.results[0];

   const newUser = {
       name: `${user.name.first} ${user.name.last}`,
       money: Math.floor(Math.random() * 1000000)
   }

  // console.log(newUser);
   
  addData(newUser);
}

let data = [];
function addData(obj){
    data.push(obj);
    //console.log(data);

    updateDOM();
}

function updateDOM(providedData = data){

    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(items =>{
        var newElement = document.createElement("div");
        newElement.classList.add("person");
        newElement.innerHTML = `<strong>${items.name}</strong> ${formatMoney(items.money)}`;

          main.appendChild(newElement);
    })
}

function formatMoney(number) {
    return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

function doubleMoney(){
   data = data.map(user =>{
       return {...user, money: user.money * 2};
    })

    updateDOM();
}

//sort by richest
function sortByRichest(){
    data.sort((a,b)=>   b.money - a.money
    )

    updateDOM();
}

//show millionaires

function showMillionaires(){
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

function calculateWealth(){
    const wealth = data.reduce((acc,data) => (acc+=data.money),0);

    console.log(wealth);
   
    const wealthEl = document.createElement("div");
    wealthEl.innerHTML = `<h3>Total Wealth <strong>${formatMoney(wealth)}</strong></h3`;
    main.appendChild(wealthEl);
}


//Event Listeners

add_user_btn.addEventListener('click', getUser);    
double_btn.addEventListener('click', doubleMoney);
sort_btn.addEventListener('click',sortByRichest);
show_millionaries_btn.addEventListener('click', showMillionaires);
calculate_btn.addEventListener('click',calculateWealth);