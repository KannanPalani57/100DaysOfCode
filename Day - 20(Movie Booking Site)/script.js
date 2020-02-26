const container = document.querySelector('.container');
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

populateUI();

//console.log(ticketPrice)

function updateCountTotal(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    })

   localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));
    // console.log(seatIndex);
    //console.log(selectedSeats); 
    const countsome = selectedSeats.length;
     console.log(countsome);
    count.innerText = countsome;
    total.innerText = countsome * ticketPrice;
}

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedmovieIndex", movieIndex);
    localStorage.setItem("selectedmoviePrice", moviePrice); 
}

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
 
     setMovieData(e.target.selectedIndex, e.target.value);
    updateCountTotal();
})

//get the data from localstorage and populate the UI.
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

   if(selectedSeats !==null && selectedSeats.length > 0){
       seats.forEach((seat, index) =>{
           if(selectedSeats.indexOf(index) > -1){
           seat.classList.add('selected');
       } } );
 }
   
    // console.log(selectedSeats);

    const selectedmovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedmovieIndex !== null){
        movieSelect.selectedIndex = selectedmovieIndex;
    }
}

container.addEventListener('click', (e)=>{
    //console.log(e.target)
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
    } 

    updateCountTotal();
})

updateCountTotal();