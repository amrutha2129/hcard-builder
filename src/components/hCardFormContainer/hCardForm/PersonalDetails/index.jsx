import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

export default class PersonalDetails extends React.PureComponent {
  render() {
    return (
      <>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>GIVEN NAME</Label>
              <Input type="text" name="givenName" id="givenName" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>SURNAME</Label>
              <Input type="text" name="surname" id="surname" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>EMAIL</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>PHONE</Label>
              <Input type="text" name="phone" id="phone" />
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}
