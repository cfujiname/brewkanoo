import React from "react";


class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { time: {}, seconds: this.props.timerStart };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
    
  resetTimer() {
    this.setState({ seconds: this.props.timerStart})
  }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds === 0) { 
       
        clearInterval(this.timer);
      }
    }
    completed() {
    
      return <div id="alert"> <a class="alert" href="#alert">All Done!</a> </div>
      
       }
  
    render() {

      return(
        <div>
          <button onClick={this.startTimer}>Start</button>
          {(this.state.seconds ===0) ? this.completed : null }
          m: {this.state.time.m} s: {this.state.time.s}
          <button onClick={this.resetTimer}>Reset</button>

        </div>
      );
    }
  }
  

export default Timer