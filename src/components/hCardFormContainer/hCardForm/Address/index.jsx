import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

export default class Address extends React.PureComponent {
  render() {
    return (
      <>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>HOUSE NAME OR #</Label>
              <Input type="text" name="houseName" id="houseName" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>STREET</Label>
              <Input type="text" name="street" id="street" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>SUBURB</Label>
              <Input type="text" name="suburb" id="suburb" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>STATE</Label>
              <Input type="text" name="state" id="state" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>POSTCODE</Label>
              <Input type="text" name="postcode" id="postcode" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>COUNTRY</Label>
              <Input type="text" name="country" id="country" />
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}
