import React, { Component } from 'react';
import './Clock.css';
import SecondHand from './SecondHand.js';
import MinuteHand from './MinuteHand.js';
import HourHand from './HourHand.js';

class MyClock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            let date = new Date();
            this.setState({
                seconds: date.getSeconds(),
                minutes: date.getMinutes(),
                hours: date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
            })
        }, 1000)
    }

    render() {
        return (
            <div className="clock-container">
                <div className="clock-base">
                    <div className="clock-center"></div>
                    <SecondHand currSecond={this.state.seconds} />
                    <MinuteHand currMinute={this.state.minutes} />
                    <HourHand currHour={this.state.hours} />
                </div>
            </div>
        )
    }
}

export default MyClock;