import React, { Component } from 'react';
import { ClockContainer, ClockBaseBorder, ClockBase, ClockCenter } from './ClockComponents';
import Hand from './Hand.js';

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
                        <Hand type="second" {...this.state} />
                        <Hand type="minute" {...this.state} />
                        <Hand type="hour" {...this.state} />
                    </ClockBase>
                </ClockBaseBorder>
            </ClockContainer>

        )
    }
}

export default AnalogClock;