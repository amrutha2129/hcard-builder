import React from "react";
import { shallow, configure } from "enzyme";
import HCardFormContainer from "./index.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("<HCard />", () => {
  it("renders hCardForm component", () => {
    const form = shallow(<HCardFormContainer />);
    expect(form.find("HCardForm"));
  });
  it("renders hCardHeader component", () => {
    const formHeader = shallow(<HCardFormContainer />);
    expect(formHeader.find("HCardHeader"));
  });
});
