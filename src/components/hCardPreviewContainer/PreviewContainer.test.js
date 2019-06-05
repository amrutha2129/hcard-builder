import React from "react";
import { shallow, configure } from "enzyme";
import HCardPreviewContainer from "./index.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("<HCard />", () => {
  it("renders hCardPreviewField component", () => {
    const form = shallow(<HCardPreviewContainer />);
    expect(form.find("HCardPreviewField"));
  });
  it("renders card header correctly", () => {
    const formHeader = shallow(<HCardPreviewContainer />);
    expect(formHeader.find("CardHeader"));
  });
});
