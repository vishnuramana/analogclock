# Analog Clock using React

[![CircleCI](https://circleci.com/gh/vishnuramana/analogclock/tree/dev.svg?style=shield)](https://circleci.com/gh/vishnuramana/analogclock/tree/dev) [![Coverage Status](https://coveralls.io/repos/github/vishnuramana/analogclock/badge.svg?branch=dev&kill_cache=1)](https://coveralls.io/github/vishnuramana/analogclock?branch=dev) [![npm](https://img.shields.io/npm/dw/analog-clock-react)](https://www.npmjs.com/package/analog-clock-react) ![npm](https://img.shields.io/npm/v/analog-clock-react) [![NPM](https://img.shields.io/npm/l/analog-clock-react)](https://github.com/vishnuramana/analogclock/blob/dev/LICENSE)

This is a customizable analog clock completely built using React. It is customizable by passing an options JSON Object to the component which allows you to modify the clock colors. It also allows you to use multiple timezones.

![Clock Preview](https://i.imgur.com/uDyNlVl.png)

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
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#d81c7a",
          minute: "#ffffff",
          hour: "#ffffff"
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
            centerBorderColor: "#ffffff",
            handColors: {
              second: "#d81c7a",
              minute: "#ffffff",
              hour: "#ffffff"
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
  - **v1.3.0**
    - Added finer movement of hour hand

  - **v1.2.2**
    - Fixed clock hand centering issues
    - Removed unwanted code

## Contribution

If you wish to contribute to this project, please use the `dev` branch to add your changes and test. Make sure all the tests are passed and optimal code coverage is present. Once you are done with your changes, please raise a PR.

## Issues/Feature Requests

For any issues/feature-requests, you can create an issue in Github or email me at [me@vishnu.codes](mailto:me@vishnu.codes)

## License

MIT License
