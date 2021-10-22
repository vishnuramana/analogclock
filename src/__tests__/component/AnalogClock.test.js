import React from "react";
import "jest-styled-components";
import { shallow } from "enzyme";
import "../../setupTests";

import AnalogClock from "../../AnalogClock.js";

describe("AnalogClock component", () => {
  const RealDate = Date;

  afterEach(() => {
    global.Date = RealDate;
  });

  it("matches snapshot", () => {
    const constantDate = new Date("2021-10-10T10:10:10");

    Date = class extends Date {
      constructor() {
        return constantDate;
      }
    };

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
        hour: "#fff",
      },
    };
    const wrapper = shallow(<AnalogClock {...options} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("matches snapshot when custom time is passed", () => {
    let options = {
      useCustomTime: true,
      seconds: 22,
      minutes: 22,
      hours: 22,
      width: "300px",
      border: true,
      borderColor: "#2e2e2e",
      baseColor: "#17a2b8",
      centerColor: "#459cff",
      centerBorderColor: "#fff",
      handColors: {
        second: "#d81c7a",
        minute: "#fff",
        hour: "#fff",
      },
    };
    const wrapper = shallow(<AnalogClock {...options} />);
    expect(wrapper).toMatchSnapshot();
  });
});
