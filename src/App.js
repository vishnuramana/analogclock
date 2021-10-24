import React, { Component } from 'react';
import Form from './Form';
import AnalogClock from './AnalogClock.js'


class App extends Component {

  interval = null;
  constructor(props) {
    super(props);
    this.state = {
      options: {
        useCustomTime: false,
        width: "300px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#d81c7a",
          minute: "#ffffff",
          hour: "#ffffff"
        },
      }
    };
  }


  updateClock() {
    let ausTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
    let date = new Date(ausTime);

    this.setState({
      'options': {
        ...this.state.options,
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours()
      }
    })
  }

  customizeClock(options) {
    let _options = options;
    if (_options.useCustomTime) {
      this.interval = setInterval(() => this.updateClock(), 1000);
    } else {
      clearInterval(this.interval);
      delete _options.seconds;
      delete _options.minutes;
      delete _options.hours;
    }
    this.setState({ options: { ..._options } });
  }

  render() {
    return (
      <div>
        <div className="row">
          <Form defaultOptions={this.state.options} customizeClock={(options) => this.customizeClock(options)} />
        </div>
        <div className="row mt-3">
          <div className="col-6 border-right">
            <h4><i>Options</i></h4>
            <textarea className="form-control" id="selected-options" rows="12" readOnly value={JSON.stringify(this.state.options, null, 2)}></textarea>
          </div>
          <div className="col-6">
            <h4><i>Preview</i></h4>
            <AnalogClock {...this.state.options} />
            {this.state.options.useCustomTime ? <p style={{ paddingTop: '5px', paddingLeft: '20px' }}><i>Timezone: Australia/Brisbane</i></p> : null}
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default App;