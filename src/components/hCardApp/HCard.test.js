import React from "react";
import { shallow, configure } from "enzyme";
import HCard from "./index.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("<HCard />", () => {
  it("renders form container", () => {
    const formContainer = shallow(<HCard />);
    expect(formContainer.find("HCardFormContainer"));
  });
  it("renders preview container", () => {
    const previewContainer = shallow(<HCard />);
    expect(previewContainer.find("HCardPreviewContainer"));
  });
});
