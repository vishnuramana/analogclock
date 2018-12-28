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
        baseColor: "#17a2b8"
      }
    };
    this.customizeClock = this.customizeClock.bind(this);
  }

  customizeClock(options) {
    console.log(options)
    this.setState({ options: { ...options } });
  }

  render() {
    return (
      <div className="row">
        <div className="col-4 border-right">
          <Form defaultOptions={this.state.options} customizeClock={this.customizeClock} />
        </div>
        <div className="col border-right">
          <h4><i>Options</i></h4>
          <textarea class="form-control" id="selected-options" rows="7" readOnly value={JSON.stringify(this.state.options, null, 2)}></textarea>
        </div>
        <div className="col">
          <h4><i>Preview</i></h4>
          <AnalogClock {...this.state.options} />
        </div>
      </div>
    );
  }
}

export default App;