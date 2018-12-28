import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: this.props.defaultOptions
        };
        this.setClockSize = this.setClockSize.bind(this);
        this.setBorderReq = this.setBorderReq.bind(this);
        this.setBorderColor = this.setBorderColor.bind(this);
        this.setBaseColor = this.setBaseColor.bind(this);
        this.buildClock = this.buildClock.bind(this);
    }

    setClockSize(event) {
        event.preventDefault();
        let width = event.target.value + 'px';
        this.setState({ options: { ...this.state.options, width } })
    }

    setBorderReq(event) {
        let border = event.target.value === 'yes';
        this.setState({ options: { ...this.state.options, border } })
    }

    setBorderColor(event) {
        event.preventDefault();
        let borderColor = '#' + event.target.value;
        this.setState({ options: { ...this.state.options, borderColor } })
    }

    setBaseColor(event) {
        event.preventDefault();
        let baseColor = '#' + event.target.value;
        this.setState({ options: { ...this.state.options, baseColor } })
    }

    buildClock(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.customizeClock(this.state.options);
    }

    render() {
        return (
            <form className="form">
                <h4><i>Clock Options</i></h4>
                <div class="form-group">
                    <label for="clock-size">Clock size (px)</label>
                    <input type="range" min="200" max="500" class="form-control-range" id="clock-size" onChange={this.setClockSize} />
                </div>
                <div class="form-group">
                    <label for="border-req-radios">Border Required?</label>
                    <div class="form-check" name="border-req-radios">
                        <input class="form-check-input" type="radio" name="border-req-yes" id="border-req-yes" value="yes" checked={this.state.options.border === true} onClick={this.setBorderReq} />
                        <label class="form-check-label" for="border-req-yes">Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="bored-req-no" id="bored-req-no" value="no" checked={this.state.options.border === false} onClick={this.setBorderReq} />
                        <label class="form-check-label" for="bored-req-no">No</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="clock-border-color">Clock border color</label>
                    <input type="input" class="form-control" id="clock-border-color" maxLength="6" placeholder="2e2e2e" onChange={this.setBorderColor} />
                </div>
                <div class="form-group">
                    <label for="clock-base-color">Clock base color</label>
                    <input type="input" class="form-control" id="clock-base-color" maxLength="6" placeholder="ffffff" onChange={this.setBaseColor} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.buildClock}>Build Clock!</button>
            </form>
        )
    }

}

export default Form;