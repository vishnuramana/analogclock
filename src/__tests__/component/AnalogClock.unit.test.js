import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import "../../setupTests";

import AnalogClock from "../../AnalogClock.js";

describe("AnalogClock component", () => {
  const initClockSpy = jest.spyOn(AnalogClock.prototype, "initClock");
  const setupIntervalSpy = jest.spyOn(AnalogClock.prototype, "setupInterval");
  const componentWillUnmountSpy = jest.spyOn(
    AnalogClock.prototype,
    "componentWillUnmount"
  );

  jest.useFakeTimers();
  jest.spyOn(global, "setInterval");
  jest.spyOn(global, "clearInterval");

  afterEach(() => {
    initClockSpy.mockClear();
    setupIntervalSpy.mockClear();
    componentWillUnmountSpy.mockClear();
  });

  it("mounts the component", () => {
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
    const wrapper = mount(<AnalogClock {...options} />);
    expect(initClockSpy).toHaveBeenCalledTimes(1);
    expect(setupIntervalSpy).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it("uses 12 hr time format", () => {
    const constantDate = new Date("2021-10-10T14:14:14");

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
    const wrapper = mount(<AnalogClock {...options} />);
    expect(wrapper.state("hours")).toEqual(2);
  });

  it("unmounts the component", () => {
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
    const wrapper = mount(<AnalogClock {...options} />);
    wrapper.unmount();
    expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });

  it("sets custom time when useCustomTime is set to true", () => {
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

    const wrapper = mount(<AnalogClock {...options} />);
    wrapper.setProps({
      ...options,
      useCustomTime: true,
      seconds: 22,
      minutes: 22,
      hours: 22,
    });
    expect(setupIntervalSpy).toHaveBeenCalledTimes(1);
    expect(clearInterval).toHaveBeenCalledTimes(2);
  });

  it("sets current time when useCustomTime is set to false", () => {
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

    const wrapper = mount(<AnalogClock {...options} />);
    wrapper.setProps({
      ...options,
      useCustomTime: false,
    });
    expect(setupIntervalSpy).toHaveBeenCalledTimes(2);
    expect(clearInterval).toHaveBeenCalledTimes(2);
  });
});
