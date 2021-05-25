import MartianModalContent from "../components/MartianModalContent";
import React from "react";
import { mount } from "enzyme";
import martianCustomers from "./martianCustomers"

describe("MartianModalContent props", () => {
  it("Accepts a list of Martian Customers and the current customer", () => {
    const wrapper = mount(
      <MartianModalContent
        martianCustomers={martianCustomers}
        currentCustomer={0}
      />
    );
    expect(wrapper.props().martianCustomers).toEqual(martianCustomers);
  });
  it("Contains project's title", () => {
    const wrapper = mount(
      <MartianModalContent
        martianCustomers={martianCustomers}
        currentCustomer={0}
      />
    );
    const projectTitle = wrapper.find("h1").text();
    expect(projectTitle).toEqual("Welcome Martian Firma");
  });
  it("Contains input to modify budget", () => {
    const wrapper = mount(
      <MartianModalContent
        martianCustomers={martianCustomers}
        currentCustomer={0}
      />
    );
    const inputValue = wrapper.find("input").props().value;
    expect(inputValue).toEqual(10000.0);
  })

});
