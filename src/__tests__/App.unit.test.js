import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import "../setupTests";

import App from '../App.js';

describe("App component", () => {
  const renderSpy = jest.spyOn(App.prototype, "render");
  const customizeClockSpy = jest.spyOn(App.prototype, "customizeClock");
  const updateClockSpy = jest.spyOn(App.prototype, "updateClock");

  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "setInterval");
    jest.spyOn(global, "clearInterval");
  })

  afterEach(() => {
    renderSpy.mockClear();
    customizeClockSpy.mockClear();
    updateClockSpy.mockClear();
    jest.useRealTimers();
  });

  it("mounts the component", () => {
    const wrapper = mount(<App />);
    expect(renderSpy).toHaveBeenCalledTimes(1);
  });

  it("updates the clock when customize button is clicked", () => {
    let options = {
      width: "500px",
      border: false,
      useCustomTime: true,
      seconds: 10,
      minutes: 10,
      hours: 10
    };
    const wrapper = mount(<App />);
    const formWrapper = wrapper.find('Form');
    formWrapper.setState({ 'options': { ...wrapper.state().options, ...options } });
    formWrapper.find('#build').simulate('click');
    expect(customizeClockSpy).toHaveBeenCalledTimes(1);
    const updatedOptions = wrapper.find('#selected-options').text();
    jest.advanceTimersByTime(1000);
    wrapper.unmount();
    expect(updatedOptions.indexOf('"useCustomTime": true')).toBeTruthy();
    expect(updateClockSpy).toHaveBeenCalledTimes(1);
  });

  it("uses internal timer when useCustomTime is turned back to false", () => {
    let options = {
      useCustomTime: true,
      seconds: 10,
      minutes: 10,
      hours: 10
    };
    const wrapper = mount(<App />);
    const formWrapper = wrapper.find('Form');
    formWrapper.setState({ 'options': { ...wrapper.state().options, ...options } });
    formWrapper.find('#build').simulate('click');
    expect(customizeClockSpy).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(updateClockSpy).toHaveBeenCalledTimes(1);
    formWrapper.setState({ 'options': { ...wrapper.state().options, ...options, useCustomTime: false } });
    formWrapper.find('#build').simulate('click');
    jest.advanceTimersByTime(500);
    expect(updateClockSpy).toHaveBeenCalledTimes(1);
  });

});
