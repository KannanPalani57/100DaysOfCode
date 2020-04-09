
class GiveNumber extends React.Component{
    constructor(props){
         super(props);
         this.state = {
             points: 5
         }
         this.makeNumber()
     }
    makeNumber() {
         setInterval(() => {
       let rand = Math.floor(Math.random() 
                            * this.props.number);
       this.setState( {points: rand})},500)
     }
  render(){
        return(
            <div>
                <h3>Game : {this.state.points}</h3>
            </div>
        )
    }
}