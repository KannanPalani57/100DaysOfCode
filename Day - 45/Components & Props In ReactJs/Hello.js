class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Kannan" from="Mari" />
        <Hello to="Kannan" from="Palani" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
