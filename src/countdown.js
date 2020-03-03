import React, { Component } from "react";

export default class Countdown extends Component {
  state = {
    countdate: new Date("March 15, 2020 0:0:0").getTime(),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.state.countdate - now;

      const remdays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const remhours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remminutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const remseconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({
        days: remdays,
        hours: remhours,
        minutes: remminutes,
        seconds: remseconds
      });
    }, 1000);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div>
        <p id="count">
          {days} d {hours}h {minutes}m {seconds}s
        </p>
      </div>
    );
  }
}
