# Analog Clock using React

This is an customizable analog clock completely built using React. It is customizable by passing an options JSON Object to the component.

![Clock Preview](https://imgur.com/3kV92PJ.png)

## Demo
You can customize/view a live demo of the clock [here](http://vishnuramana.github.io/analogclock).

## Installation
Install the package using

    npm install --save analog-clock-react
    
## Usage
Import the  `AnalogClock` component into your React Component like this

    import AnalogClock from 'analog-clock-react';
    
Then use the `AnalogClock` Component like this

    let options = {
        width: "300px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        centerBorderColor: "#fff",
        handColors: {
          second: "#d81c7a",
          minute: "#fff",
          hour: "#fff"
        }
    };
    .....
    <AnalogClock {...options} />

You can customize the clock using the different properties in the `options` JSON Object. 

Please visit the [demo](http://vishnuramana.github.io/analogclock) page to get a live preview of the clock.

## Features

- ### Custom Time / Timezone Support
    *AnalogClock* now supports using your own custom time/timezone. To enable custom time usage, set `useCustomTime` to `true` and set your own `hours`, `minutes` and `seconds`  in the `options` JSON Object like below:
    
        let options = {
            useCustomTime: true,    // set this to true
            width: "300px",
            border: true,
            borderColor: "#2e2e2e",
            baseColor: "#17a2b8",
            centerColor: "#459cff",
            centerBorderColor: "#fff",
            handColors: {
              second: "#d81c7a",
              minute: "#fff",
              hour: "#fff"
            },
            "seconds": 1,   // set your
            "minutes": 10,  // own
            "hours": 22     // time here.
        };

    Once you do that, `AnalogClock` will expect you to give it the `hours`, `minutes` and `seconds` value.
    
    *Note: You will have to use a setInterval in the component where you use `<AnalogClock>` to update the `options` object with the time that you pass. An example is given below:*
    
      updateClock = () => {
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
      ....
      this.interval = setInterval(this.updateClock, 1000);

## Change Log

  - **v1.2.2**
    - Fixed clock hand centering issues
    - Removed unwanted

## Contribution

If you wish to contribute to this project, please use the `dev` branch to add your changes and test. Once you are done with your changes, please raise a PR.

## License

MIT License
