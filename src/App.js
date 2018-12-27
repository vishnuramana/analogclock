import React, { Component } from 'react';
import AnalogClock from './AnalogClock.js'

class App extends Component {

  render() {
    let options={
      "width" : "400px",
      "border": true,
      "border-color": "#ff9e9e",
      "base-color": "#223480"
    }
    return (
      <div className="app">
        <AnalogClock {...options} />
      </div>
    );
  }
}

export default App;