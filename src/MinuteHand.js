import React, { Component } from 'react';

class MinuteHand extends Component {

    constructor(props) {
        super(props)
        this.getMinuteAngle = this.getMinuteAngle.bind(this);
    }

    getMinuteAngle() {
        let currMinute = this.props.currMinute;
        return (270 + (currMinute * 6));
    }

    render() {
        const minuteHandRotateStyle = {
            transform: "rotate(" + this.getMinuteAngle() + "deg)"
        }
        return (
            <div className="clock-minute-hand" style={minuteHandRotateStyle}>
            </div>
        )
    }
}

export default MinuteHand;