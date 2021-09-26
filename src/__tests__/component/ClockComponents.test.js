import React from "react";
import "jest-styled-components";
import { mount } from "enzyme";
import "../../setupTests";

import {
  ClockContainer,
  ClockBaseBorder,
  ClockBase,
  ClockCenter,
  ClockHand,
  ClockHandContainer,
} from "../../ClockComponents";

describe("ClockComponents tests", () => {
  it("sets width and height of ClockContainer when width prop is passed", () => {
    const wrapper = mount(<ClockContainer width="200px" />);
    expect(wrapper).toHaveStyleRule("width", "200px");
    expect(wrapper).toHaveStyleRule("height", "200px");
  });

  it("sets default width of ClockContainer when width prop is not passed", () => {
    const wrapper = mount(<ClockContainer />);
    expect(wrapper).toHaveStyleRule("width", "400px");
    expect(wrapper).toHaveStyleRule("height", "400px");
  });

  it("sets border and border color of ClockBaseBorder when props passed", () => {
    const wrapper = mount(<ClockBaseBorder border={true} borderColor="#fff" />);
    expect(wrapper).toHaveStyleRule("background-color", "#fff");
    expect(wrapper).toHaveStyleRule("padding", "5%");
  });

  it("sets default border and border color of ClockBaseBorder when props is not passed", () => {
    const wrapper = mount(<ClockBaseBorder />);
    expect(wrapper).toHaveStyleRule("background-color", "transparent");
    expect(wrapper).toHaveStyleRule("padding", "0");
  });

  it("sets base color of ClockBase when props passed", () => {
    const wrapper = mount(<ClockBase baseColor="#fff" />);
    expect(wrapper).toHaveStyleRule("background-color", "#fff");
  });

  it("sets default base color of ClockBase when props is not passed", () => {
    const wrapper = mount(<ClockBase />);
    expect(wrapper).toHaveStyleRule("background-color", "black");
  });

  it("sets border and background color of ClockCenter when props passed", () => {
    const wrapper = mount(
      <ClockCenter centerBorderColor="red" centerColor="black" />
    );
    expect(wrapper).toHaveStyleRule("border", "2px solid red");
    expect(wrapper).toHaveStyleRule("background-color", "black");
  });

  it("sets default border and background color of ClockCenter when props is not passed", () => {
    const wrapper = mount(<ClockCenter />);
    expect(wrapper).toHaveStyleRule("border", "2px solid #fff");
    expect(wrapper).toHaveStyleRule("background-color", "#459cff");
  });

  it("sets styling of ClockHand when props passed - second", () => {
    const wrapper = mount(
      <ClockHand type="second" handColors={{ second: "#fff" }} />
    );
    expect(wrapper).toHaveStyleRule("width", "60%");
    expect(wrapper).toHaveStyleRule("margin-left", "40%");
    expect(wrapper).toHaveStyleRule("background-color", "#fff");
  });

  it("sets default styling of ClockHand when props is not passed - second", () => {
    const wrapper = mount(<ClockHand type="second" />);
    expect(wrapper).toHaveStyleRule("width", "60%");
    expect(wrapper).toHaveStyleRule("margin-left", "40%");
    expect(wrapper).toHaveStyleRule("background-color", "#d81c7a");
  });

  it("sets styling of ClockHand when props passed - minute", () => {
    const wrapper = mount(
      <ClockHand type="minute" handColors={{ minute: "red" }} />
    );
    expect(wrapper).toHaveStyleRule("width", "45%");
    expect(wrapper).toHaveStyleRule("margin-left", "45%");
    expect(wrapper).toHaveStyleRule("background-color", "red");
  });

  it("sets default styling of ClockHand when props is not passed - minute", () => {
    const wrapper = mount(<ClockHand type="minute" />);
    expect(wrapper).toHaveStyleRule("width", "45%");
    expect(wrapper).toHaveStyleRule("margin-left", "45%");
    expect(wrapper).toHaveStyleRule("background-color", "#fff");
  });

  it("sets styling of ClockHand when props passed - hour", () => {
    const wrapper = mount(
      <ClockHand type="hour" handColors={{ hour: "red" }} />
    );
    expect(wrapper).toHaveStyleRule("width", "35%");
    expect(wrapper).toHaveStyleRule("margin-left", "45%");
    expect(wrapper).toHaveStyleRule("background-color", "red");
  });

  it("sets default styling of ClockHand when props is not passed - hour", () => {
    const wrapper = mount(<ClockHand type="hour" />);
    expect(wrapper).toHaveStyleRule("width", "35%");
    expect(wrapper).toHaveStyleRule("margin-left", "45%");
    expect(wrapper).toHaveStyleRule("background-color", "#fff");
  });

  it("sets transform and transition of ClockHandContainer when props passed", () => {
    const wrapper = mount(<ClockHandContainer handAngle="300" />);
    expect(wrapper).toHaveStyleRule("transform", "rotate(300deg)");
    expect(wrapper).toHaveStyleRule(
      "transition",
      "transform 250ms ease-in-out"
    );
  });

  it("sets default transform of ClockHandContainer when props is not passed", () => {
    const wrapper = mount(<ClockHandContainer />);
    expect(wrapper).toHaveStyleRule("transform", "rotate(deg)");
    expect(wrapper).toHaveStyleRule("transition", undefined);
  });
});
