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

## Future Development

  - Add timezone support
  - @keyframes support for smooth rotation of second hand.

License
----

MIT License
