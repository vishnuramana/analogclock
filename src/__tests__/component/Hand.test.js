import React from "react";
import "jest-styled-components";
import { shallow } from "enzyme";
import "../../setupTests";

import Hand from "../../Hand";

describe("Hand component", () => {
  it("matches second Hand snapshot", () => {
    const wrapper = shallow(
      <Hand type="second" seconds="10" handColors={{ second: "#d81c7a" }} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("matches minute Hand snapshot", () => {
    const wrapper = shallow(
      <Hand type="minute" minutes="10" handColors={{ minute: "#fff" }} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("matches hour Hand snapshot", () => {
    const wrapper = shallow(<Hand type="hour" hours="10" handColors={{ hour: "#fff" }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
