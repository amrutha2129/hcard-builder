import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

export default class Address extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      housename: "",
      street: "",
      suburb: "",
      state: "",
      postcode: 0,
      country: ""
    };

    this.handleHouseNameChange = this.handleHouseNameChange.bind(this);
    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.handleSuburbChange = this.handleSuburbChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handlePostcodeChange = this.handlePostcodeChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  handleHouseNameChange(event) {
    this.setState({ housename: event.target.value });
  }
  handleStreetChange(event) {
    this.setState({ street: event.target.value });
  }
  handleSuburbChange(event) {
    this.setState({ suburb: event.target.value });
  }
  handleStateChange(event) {
    this.setState({ state: event.target.value });
  }
  handlePostcodeChange(event) {
    this.setState({ postcode: event.target.value });
  }
  handleCountryChange(event) {
    this.setState({ country: event.target.value });
  }

  render() {
    const { housename, street, suburb, state, postcode, country } = this.state;
    return (
      <>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>HOUSE NAME OR #</Label>
              <Input
                type="text"
                value={housename}
                id="houseName"
                onChange={this.handleHouseNameChange}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>STREET</Label>
              <Input
                type="text"
                value={street}
                id="street"
                onChange={this.handleStreetChange}
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
                value={suburb}
                id="suburb"
                onChange={this.handleSuburbChange}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>STATE</Label>
              <Input
                type="text"
                value={state}
                id="state"
                onChange={this.handleStateChange}
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
                value={postcode}
                id="postcode"
                onChange={this.handlePostcodeChange}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>COUNTRY</Label>
              <Input
                type="text"
                value={country}
                id="country"
                onChange={this.handleCountryChange}
              />
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}
