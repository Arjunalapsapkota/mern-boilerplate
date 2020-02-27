import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./app.js";
Enzyme.configure({ adapter: new EnzymeAdapter() });
test("App should render correctly", () => {
  const wrapper = shallow(<App />);
});
