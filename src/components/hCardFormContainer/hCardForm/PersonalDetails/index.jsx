import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";
// import HCardPreview from "../../../HCardPreviewContainer/HCardPreview";

export default class PersonalDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: "", surname: "", email: "", phone: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.name });
    this.updateHCardPreview(this.state.name);
  }
  handleSurnameChange(event) {
    this.setState({ surname: event.target.surname });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.email });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.target.phone });
  }

  render() {
    return (
      <>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>GIVEN NAME</Label>
              <Input
                type="text"
                value="givenName"
                id="givenName"
                onChange={this.handleNameChange}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>SURNAME</Label>
              <Input
                type="text"
                value="surname"
                id="surname"
                onChange={this.handleSurnameChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>EMAIL</Label>
              <Input
                type="email"
                value="email"
                id="email"
                onChange={this.handleEmailChange}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>PHONE</Label>
              <Input
                type="text"
                value="phone"
                id="phone"
                onChange={this.handlePhoneChange}
              />
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}
