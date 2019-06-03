import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";
import { func } from "prop-types";

export default class Address extends React.PureComponent {
  static propTypes = {
    handleHouseNameChange: func.isRequired,
    handleStreetChange: func.isRequired,
    handleStateChange: func.isRequired,
    handleCountryChange: func.isRequired,
    handlePostcodeChange: func.isRequired,
    handleSuburbChange: func.isRequired
  };

  render() {
    return (
      <>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>HOUSE NAME OR #</Label>
              <Input
                type="text"
                id="houseName"
                onChange={e => this.props.handleHouseNameChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>STREET</Label>
              <Input
                type="text"
                id="street"
                onChange={e => this.props.handleStreetChange(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>SUBURB</Label>
              <Input
                type="text"
                id="suburb"
                onChange={e => this.props.handleSuburbChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>STATE</Label>
              <Input
                type="text"
                id="state"
                onChange={e => this.props.handleStateChange(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>POSTCODE</Label>
              <Input
                type="text"
                id="postcode"
                onChange={e => this.props.handlePostcodeChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>COUNTRY</Label>
              <Input
                type="text"
                id="country"
                onChange={e => this.props.handleCountryChange(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}
