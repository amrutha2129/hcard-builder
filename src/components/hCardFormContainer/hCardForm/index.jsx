import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import HCardSubHeading from "../HCardSubHeading";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";

export default class HCardForm extends React.PureComponent {
  render() {
    return (
      <Form>
        <HCardSubHeading subHeading="PERSONAL DETAILS" />
        <PersonalDetails />
        <HCardSubHeading subHeading="ADDRESS" />
        <Address />
      </Form>
    );
  }
}
