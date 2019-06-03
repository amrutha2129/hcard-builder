import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";
import { func } from "prop-types";

export default class PersonalDetails extends React.PureComponent {
  static propTypes = {
    handleNameChange: func.isRequired,
    handleSurnameChange: func.isRequired,
    handleEmailChange: func.isRequired,
    handlePhoneChange: func.isRequired
  };

  render() {
    return (
      <>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label>GIVEN NAME</Label>
              <Input
                type="text"
                id="name"
                onChange={e => this.props.handleNameChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>SURNAME</Label>
              <Input
                type="text"
                id="surname"
                onChange={e => this.props.handleSurnameChange(e.target.value)}
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
                id="email"
                onChange={e => this.props.handleEmailChange(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label>PHONE</Label>
              <Input
                type="text"
                id="phone"
                onChange={e => this.props.handlePhoneChange(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}
