import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: this.props.defaultOptions
        };
    }

    setClockSize = (event) => {
        event.preventDefault();
        let width = event.target.value + 'px';
        this.setState({ options: { ...this.state.options, width } })
    }

    setBorderReq = (event) => {
        let border = event.target.value === 'yes';
        this.setState({ options: { ...this.state.options, border } })
    }

    setColor = (event) => {
        event.preventDefault();
        this.setState({ options: { ...this.state.options, [event.target.name]: event.target.value } })
    }

    setHandColor = (event) => {
        event.preventDefault();
        let handColors = { ...this.state.options.handColors };
        handColors[event.target.name] = event.target.value;
        this.setState({ options: { ...this.state.options, handColors } });
    }

    buildClock = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.customizeClock(this.state.options);
    }

    randomClock = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let baseColor = this.getRandomColor();
        let borderColor = this.getRandomColor();
        let centerColor = this.getRandomColor();
        let handColors = {
            second: this.getRandomColor(),
            minute: this.getRandomColor(),
            hour: this.getRandomColor()
        }
        this.setState({ options: { ...this.state.options, borderColor, baseColor, centerColor, handColors } }, () => this.buildClock(event));
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var colorCode = '#';
        for (var i = 0; i < 6; i++) {
            colorCode += letters[Math.floor(Math.random() * 16)];
        }
        return colorCode;
    }


    render() {
        return (
            <form className="col-12 form">
                <div className="row col-12">
                    <h4><i>Clock Options</i></h4>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="clock-size">Clock size (px)</label>
                            <input type="range" min="200" max="500" className="form-control-range" id="clock-size" onChange={this.setClockSize} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="border-req-radios">Border Required?</label>
                            <div className="form-check" name="border-req-radios">
                                <input className="form-check-input" type="radio" name="border-req-yes" id="border-req-yes" value="yes" checked={this.state.options.border === true} onClick={this.setBorderReq} />
                                <label className="form-check-label" htmlFor="border-req-yes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="bored-req-no" id="bored-req-no" value="no" checked={this.state.options.border === false} onClick={this.setBorderReq} />
                                <label className="form-check-label" htmlFor="bored-req-no">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="clock-border-color">Clock border color</label>
                            <input type="input" name="borderColor" className="form-control" id="clock-border-color" maxLength="6" placeholder="2e2e2e" onChange={this.setColor} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="clock-base-color">Clock base color</label>
                            <input type="input" name="baseColor" className="form-control" id="clock-base-color" maxLength="6" placeholder="17a2b8" onChange={this.setColor} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="clock-center-color">Clock center color</label>
                            <input type="input" name="centerColor" className="form-control" id="clock-center-color" maxLength="6" placeholder="459cff" onChange={this.setColor} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="second-hand-color">Second Hand color</label>
                            <input type="input" name="second" className="form-control" id="second-hand-color" maxLength="6" placeholder="d81c7a" onChange={this.setHandColor} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="minute-hand-color">Minute Hand color</label>
                            <input type="input" name="minute" className="form-control" id="minute-hand-color" maxLength="6" placeholder="fff" onChange={this.setHandColor} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hour-hand-color">Hour Hand color</label>
                            <input type="input" name="hour" className="form-control" id="hour-hand-color" maxLength="6" placeholder="fff" onChange={this.setHandColor} />
                        </div>
                    </div>
                </div>
                <div className="row col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" onClick={this.buildClock}>Build Clock!</button>
                    &nbsp;
                <button type="submit" className="btn btn-warning" onClick={this.randomClock}>Surprise Me!</button>
                </div>
            </form>
        )
    }

}

export default Form;