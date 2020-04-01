function returnCurrentStatus() {
  return "interested";
}

class UIElementOne extends React.Component {
  render() {
    return <h1>Now I am {returnCurrentStatus()} in learning </h1>;
  }
}

class Hello extends React.Component {
  render() {
    const props = this.props;
    console.log(this.props);
    return (
      <p>
        Hello {props.to}, from {props.from}
      </p>
    );
  }
}

//ReactDOM.render(<UIElementOne />, document.getElementById("root"));
//ReactDOM.render(<Hello />, document.getElementById("root"));
