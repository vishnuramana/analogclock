import React, { Component } from 'react';
import AnalogClock from './AnalogClock.js'

class App extends Component {

  render() {
    let options={
      width : "300px",
      border: true,
      borderColor: "#ff9e9e",
      baseColor: "#223480"
    }
    return (
      <div className="app">
        <AnalogClock {...options} />
      </div>
    );
  }
}

export default App;