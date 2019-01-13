import React, { Component } from 'react';
import { ClockHand } from './ClockComponents';
import Util from './Util';

class Hand extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (this.props.type === 'second') {
            let handAngle = (270 + (this.props.seconds * 6));
            if (!this.state.secondStartAngle) {
                this.setState({ secondStartAngle: handAngle });
            }
        }
    }

    render() {
        return (
            <ClockHand type={this.props.type} handAngle={Util.getHandAngle(this.props)} {...this.state}
                handColors={this.props.handColors} />
        )
    }

}

export default Hand;
