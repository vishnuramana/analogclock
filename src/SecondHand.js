import React, { Component } from 'react';

class SecondHand extends Component {

    constructor(props) {
        super(props)
        this.getSecondAngle = this.getSecondAngle.bind(this);
    }

    getSecondAngle() {
        let currSecond = this.props.currSecond;
        return (270 + (currSecond * 6));
    }

    render() {
        const secondHandRotateStyle = {
            transform: "rotate(" + this.getSecondAngle() + "deg)"
        }
        return (
            <div className="clock-second-hand" style={secondHandRotateStyle}>

            </div>
        )
    }
}

export default SecondHand;