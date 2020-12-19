import React, { Component } from 'react';
import { ClockHand, ClockHandContainer } from './ClockComponents';
import Util from './Util';

class Hand extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ClockHandContainer handAngle={Util.getHandAngle(this.props)} >
                <ClockHand type={this.props.type}
                    handColors={this.props.handColors} />
            </ClockHandContainer>
        )
    }

}

export default Hand;
