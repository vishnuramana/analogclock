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

    setCustomTime = (event) => {
        let useCustomTime = event.target.value === 'yes';
        this.setState({ options: { ...this.state.options, useCustomTime } })
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
        let centerBorderColor = this.getRandomColor();
        let handColors = {
            second: this.getRandomColor(),
            minute: this.getRandomColor(),
            hour: this.getRandomColor()
        }
        this.setState({ options: { ...this.state.options, borderColor, baseColor, centerColor, centerBorderColor, handColors } }, () => this.buildClock(event));
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
                            <label htmlFor="clock-size">Clock size (px): {this.state.options.width}</label>
                            <input type="range" min="50" max="500" className="form-control-range" id="clock-size" onChange={this.setClockSize} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="border-req-radios">Use Custom Time?</label>
                            <div className="form-check" name="custom-time-radios">
                                <input className="form-check-input" type="radio" name="custom-time-yes" id="custom-time-yes" value="yes" checked={this.state.options.useCustomTime === true} onChange={this.setCustomTime} />
                                <label className="form-check-label" htmlFor="custom-time-yes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="custom-time-no" id="custom-time-no" value="no" checked={this.state.options.useCustomTime === false} onChange={this.setCustomTime} />
                                <label className="form-check-label" htmlFor="custom-time-no">No</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="border-req-radios">Border Required?</label>
                            <div className="form-check" name="border-req-radios">
                                <input className="form-check-input" type="radio" name="border-req-yes" id="border-req-yes" value="yes" checked={this.state.options.border === true} onChange={this.setBorderReq} />
                                <label className="form-check-label" htmlFor="border-req-yes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="bored-req-no" id="bored-req-no" value="no" checked={this.state.options.border === false} onChange={this.setBorderReq} />
                                <label className="form-check-label" htmlFor="bored-req-no">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="clock-border-color">Clock border color</label>
                            <input type="color"  name="borderColor" className="form-control" id="clock-border-color" maxLength="6" placeholder="2e2e2e" onChange={this.setColor} value={this.state.options.borderColor} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="clock-base-color">Clock base color</label>
                            <input type="color" name="baseColor" className="form-control" id="clock-base-color" maxLength="6" placeholder="17a2b8" onChange={this.setColor}  value={this.state.options.baseColor}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="clock-center-color">Clock center color</label>
                            <input type="color" name="centerColor" className="form-control" id="clock-center-color" maxLength="6" placeholder="459cff" onChange={this.setColor} value={this.state.options.centerColor}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="clock-center-border-color">Clock center border color</label>
                            <input type="color" name="centerBorderColor" className="form-control" id="clock-center-border-color" maxLength="6" placeholder="fff" onChange={this.setColor} value={this.state.options.centerBorderColor}></input>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <label htmlFor="second-hand-color">Second Hand color</label>
                            <input type="color" name="second" className="form-control" id="second-hand-color" maxLength="6" placeholder="d81c7a" onChange={this.setHandColor} value={this.state.options.handColors.second}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="minute-hand-color">Minute Hand color</label>
                            <input type="color" name="minute" className="form-control" id="minute-hand-color" maxLength="6" placeholder="fff" onChange={this.setHandColor} value={this.state.options.handColors.minute}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hour-hand-color">Hour Hand color</label>
                            <input type="color" name="hour" className="form-control" id="hour-hand-color" maxLength="6" placeholder="fff" onChange={this.setHandColor} value={this.state.options.handColors.hour}/>
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