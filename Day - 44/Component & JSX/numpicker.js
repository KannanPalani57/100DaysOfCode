
function getRandomNumber(){
    return Math.floor(Math.random() * 7)+1;
}

class NumPicker extends React.Component{
       
    render(){
        var num = getRandomNumber();
        var getStat;
        
        if(num === 5){
            getStat = (
                <div>
        <h2>Hey!, Your Favorite Number, {num}</h2>
        <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FyiYJLX05aQ0FO%2Fgiphy.gif&f=1&nofb=1"/>
        </div>
            )
        }else{
           getStat =  <h2>Oh, Okay, Bad Luck</h2>
        }

        return (
            <div>
            <h1>The Number is {num}</h1>
            {getStat}  
            </div>
        )
    }
}


//ReactDOM.render(<NumPicker />, document.getElementById("root"));