const joke_btn = document.getElementById("getJoke")
const joke_holder = document.getElementById('jokeHolder')


function showJoke(){
    fetch("https://icanhazdadjoke.com",
{
    headers: {
      Accept: 'application/json'
    }
}).then(res => res.json())
.then(data => {
    console.log(data)
    joke_holder.innerHTML = data.joke;
}
)
   
}

joke_btn.addEventListener("click", showJoke);




