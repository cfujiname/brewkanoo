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
  
  
  completed() {
    
   return <div id="alert"> <a class="alert" href="#alert">All Done!</a> </div>
   
    }
  
    render() {
      return (
          <div>
            
          <button onClick={this.startCounter}>Start</button>
          {Math.floor(this.state.counter / 60) < 10 ? `0${Math.floor(this.state.counter / 60)}`: Math.floor(this.state.counter / 60)} : {this.state.counter % 60 < 10 ? `0${this.state.counter % 60}`: this.state.counter % 60}
          {this.state.counter === 0 ? this.completed() : null}
        </div>
      );
    }
}
  

export default Timer