import React from "react";
import "jest-styled-components";
import { shallow } from "enzyme";
import "../../setupTests";

import AnalogClock from "../../AnalogClock.js";

describe("AnalogClock component", () => {
  let options = {
    useCustomTime: true,
    seconds: 10,
    minutes: 10,
    hours: 10,
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

  it("matches snapshot", () => {
    const wrapper = shallow(<AnalogClock {...options} />);
    expect(wrapper).toMatchSnapshot();
  });
});
