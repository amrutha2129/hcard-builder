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
    this.setState({ name: event.target.value });
  }
  handleSurnameChange(event) {
    this.setState({ surname: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
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
                value={this.state.name}
                id="name"
                onChange={this.handleNameChange}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>SURNAME</Label>
              <Input
                type="text"
                value={this.state.surname}
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
                value={this.state.email}
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
                value={this.state.phone}
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
