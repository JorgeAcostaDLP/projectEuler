class Slot extends React.Component {
  render() {
    const { num1, num2, num3 } = this.props;
    let isWinner = num1 === num2 && num2 === num3;
    return (
      <h1>
        {num1} {num2} {num3}
        <h2>{isWinner ? <h4>You Win!</h4> : <h4>Loose! Try Again</h4>}</h2>
      </h1>
    );
  }
}
