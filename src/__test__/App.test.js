
import App from '../App';
import MartianList from "../components/MartianList"

import React from "react";
import { shallow } from "enzyme";

it("Renders without crashing the app", () => {
  shallow(<App />);
})

it("Renders Project tittle", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1> Billie's Mission 2121 (Space dogs domination) </h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
})

it("Renders the list of martian projects", () => {
  const wrapper = shallow(<App />);
  const list = <MartianList />;
  expect(wrapper.contains(list)).toEqual(true);
})