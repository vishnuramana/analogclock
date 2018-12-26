import React, { Component } from 'react';

class HourHand extends Component {

    constructor(props) {
        super(props)
        this.getHourAngle = this.getHourAngle.bind(this);
    }

    getHourAngle() {
        let currHour = this.props.currHour;
        return (270 + (currHour * 30));
    }

    render() {
        const hourHandRotateStyle = {
            transform: "rotate(" + this.getHourAngle() + "deg)"
        }
        return (
            <div className="clock-hour-hand" style={hourHandRotateStyle}>
            </div>
        )
    }
}

export default HourHand;