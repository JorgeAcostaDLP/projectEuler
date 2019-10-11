class App extends React.Component {
  render() {
    function num() {
      return Math.floor(Math.random() * 3 + 1);
    }

    return (
      <div>
        <Message name='Jorge' />
        <Slot num1={num()} num2={num()} num3={num()} />
        <Slot num1={num()} num2={num()} num3={num()} />
        <Slot num1={num()} num2={num()} num3={num()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
