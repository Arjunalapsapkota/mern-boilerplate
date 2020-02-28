import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
//import App from "./app.js";
class App extends Component {
  render() {
    return <h1 className="text-center">Welcome to the first react app</h1>;
  }
}

Enzyme.configure({ adapter: new EnzymeAdapter() });
test("App should render correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
