import { App } from "../components/App";
import React from "react";
import { shallow } from "enzyme";

describe("App", () => {
  it("should have the `switch` element", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
