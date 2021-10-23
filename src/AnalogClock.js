import React, { Component } from 'react';
import Util from './Util';
import { ClockContainer, ClockBaseBorder, ClockBase, ClockCenter } from './ClockComponents';
import Hand from './Hand.js';

class AnalogClock extends Component {

    constructor(props) {
        super(props);
        this.state = this.initClock();
    }

    initClock() {
        const date = new Date();
        return {
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: Util.getHourIn12HrFormat(date.getHours())
        }
    }

    setupTime() {
        const date = new Date();
        this.setState({
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: Util.getHourIn12HrFormat(date.getHours())
        })
    }

    setupInterval() {
        this.interval = setInterval(() => this.setupTime(), 1000);
    }

    componentDidMount() {
        this.setupInterval();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.useCustomTime !== this.props.useCustomTime) {
            if (this.props.useCustomTime) {
                clearInterval(this.interval);
                this.setState({
                    seconds: undefined,
                    minutes: undefined,
                    hours: undefined
                });
            } else {
                this.setupInterval();
            }
        }
    }

    render() {
        const { width, border, borderColor, baseColor, centerColor, centerBorderColor, handColors } = this.props;
        const { seconds, minutes, hours } = this.props.useCustomTime ? this.props : this.state;
        return (
            <ClockContainer width={width}>
                <ClockBaseBorder border={border} borderColor={borderColor}>
                    <ClockBase baseColor={baseColor}>
                        <ClockCenter centerColor={centerColor} centerBorderColor={centerBorderColor} />
                        <Hand type="second" seconds={seconds} handColors={handColors} />
                        <Hand type="minute" minutes={minutes} handColors={handColors} />
                        <Hand type="hour" hours={hours} minutes={minutes} handColors={handColors} />
                    </ClockBase>
                </ClockBaseBorder>
            </ClockContainer>

        )
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default AnalogClock;