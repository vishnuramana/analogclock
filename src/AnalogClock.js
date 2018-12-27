import React, { Component } from 'react';
import { ClockContainer, ClockBaseBorder, ClockBase, ClockCenter } from './ClockComponents';
import './Clock.css';
import SecondHand from './SecondHand.js';
import MinuteHand from './MinuteHand.js';
import HourHand from './HourHand.js';

class AnalogClock extends Component {

    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
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
        const { width, border, borderColor, baseColor } = this.props;
        return (
            <ClockContainer width={width}>
                <ClockBaseBorder border={border} borderColor={borderColor}>
                    <ClockBase baseColor={baseColor}>
                        <ClockCenter />
                        <SecondHand currSecond={this.state.seconds} />
                        <MinuteHand currMinute={this.state.minutes} />
                        <HourHand currHour={this.state.hours} />
                    </ClockBase>
                </ClockBaseBorder>
            </ClockContainer>

        )
    }
}

export default AnalogClock;