import React from "react";
import { shallow, configure } from "enzyme";
import HCardForm from "./index.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("<HCardForm />", () => {
  let wrap;
  beforeEach(() => {
    wrap = shallow(<HCardForm />);
  });
  it("renders Personal details section", () => {
    const personalDetails = shallow(<HCardForm />);
    expect(personalDetails.find("PersonalDetails"));
  });
  it("renders Address section", () => {
    const aadress = shallow(<HCardForm />);
    expect(aadress.find("Address"));
  });
  it("renders subHeading component", () => {
    const subHeading = shallow(<HCardForm />);
    expect(subHeading.find("HCardSubHeading"));
  });

  it("contains Upload Avatar button", () => {
    expect(wrap.find('[className="uploadBtn"]').exists()).toEqual(true);
  });

  it("contains Upload Create hCard button", () => {
    expect(wrap.find('[className="submitBtn"]').exists()).toEqual(true);
  });
});
