import React, { Component } from 'react';
import Form from './Form';
import AnalogClock from './AnalogClock.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        width: "300px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        handColors: {
          second: "#d81c7a",
          minute: "#fff",
          hour: "#fff"
        }
      }
    };
    this.customizeClock = this.customizeClock.bind(this);
  }

  customizeClock(options) {
    this.setState({ options: { ...options } });
  }

  render() {
    return (
      <div>
        <div className="row">
          <Form defaultOptions={this.state.options} customizeClock={this.customizeClock} />
        </div>
        <div className="row mt-3">
          <div className="col-6 border-right">
            <h4><i>Options</i></h4>
            <textarea className="form-control" id="selected-options" rows="12" readOnly value={JSON.stringify(this.state.options, null, 2)}></textarea>
          </div>
          <div className="col-6">
            <h4><i>Preview</i></h4>
            <AnalogClock {...this.state.options} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;