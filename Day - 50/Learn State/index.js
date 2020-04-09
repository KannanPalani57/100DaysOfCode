 class App extends React.Component{
   render(){
     return (
       <div>      
         <GiveNumber number = {6}  />
       </div>
     )
   }
 }

 ReactDOM.render(<App />,
  document.getElementById("root"));



























/*function returnCurrentStatus() {
  return "interested";
}

class UIElementOne extends React.Component {
  render() {
    return <h1>Now I am {returnCurrentStatus()} in learning </h1>;
  }
}

function Hello() {
  return (
    <div>
      <h1>Hello there,</h1>
      <h1>Hello there,</h1>
      <h1>Hello there,</h1>
    </div>
  );
}

ReactDOM.render(<UIElementOne />, document.getElementById("root"));
//ReactDOM.render(<Hello />, document.getElementById("root"));
*/