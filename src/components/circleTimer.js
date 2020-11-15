import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class CircleTimer extends Component {
  state = {
    isPlaying: false,
    durationSeconds: 10,
    colors: [["#dadfe0", 1]]
  };

  startTimer = () => {
    this.setState({
      isPlaying: true,
      colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
    });
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  resetTimer = () => {
    if (this.state.isPlaying === false) {
      this.setState({
        isPlaying: false,
        colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
      });
    }
  };

  render() {
    const isPlaying = this.state.isPlaying;

    const durationSeconds = this.state.durationSeconds;

    const colors = this.state.colors;

    const renderTime = value => {
      if (value === 0) {
        return (
          <div className="timer">
            <button className="btn-white" onClick={this.startTimer}>
              Restart
            </button>
          </div>
        );
      }

      if (value === 31) {
        return (
          <div className="timer">
            <button className="btn-white" onClick={this.startTimer}>
              Start
            </button>
            <audio className="audio-element">
              <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3" />
            </audio>
          </div>
        );
      }

      if (value <= 30) {
        return (
          <div className="timer">
            <div className="value">{value}</div>
            <audio className="audio-element">
              <source src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3" />
            </audio>
          </div>
        );
      }
    };

    return (
      <CountdownCircleTimer
        isPlaying={isPlaying}
        size={240}
        durationSeconds={durationSeconds}
        colors={colors}
        trailColor={"#dadfe0"}
        strokeWidth={20}
        renderTime={renderTime}
        onComplete={() => [false]}
      />
    );
  }
}

export default CircleTimer;