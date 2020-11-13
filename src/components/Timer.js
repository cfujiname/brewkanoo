import React from "react";
 
class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: this.props.timerStart
      };
      this.decreaseCounter = this.decreaseCounter.bind(this);
      this.startCounter = this.startCounter.bind(this);
    }
  
    decreaseCounter() {
      if (this.state.counter === 0) {
          return 
      }
      this.setState({counter: this.state.counter - 1});
    }
  
    startCounter() {
      setInterval(this.decreaseCounter, 1000);
    }
  
    render() {
      return (
          <div>
            
          <button onClick={this.startCounter}>Start</button>
          {this.state.counter}
        </div>
      );
    }
  }
export default Timer
