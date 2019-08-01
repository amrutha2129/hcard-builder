import React from "react";
import { Form, Button, Row, Col } from "reactstrap";
import HCardSubHeading from "./HCardSubHeading/HCardSubHeading";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import Address from "./Address/Address";
import { func } from "prop-types";
import "./style.css";

export default class HCardForm extends React.PureComponent {
  static propTypes = {
    handleNameChange: func.isRequired,
    handleSurnameChange: func.isRequired,
    handleEmailChange: func.isRequired,
    handlePhoneChange: func.isRequired,
    handleHouseNameChange: func.isRequired,
    handleStreetChange: func.isRequired,
    handleStateChange: func.isRequired,
    handleCountryChange: func.isRequired,
    handlePostcodeChange: func.isRequired,
    handleSuburbChange: func.isRequired
  };

  render() {
    return (
      <Form>
        <HCardSubHeading subHeading="PERSONAL DETAILS" />
        <PersonalDetails
          handleNameChange={this.props.handleNameChange}
          handleSurnameChange={this.props.handleSurnameChange}
          handleEmailChange={this.props.handleEmailChange}
          handlePhoneChange={this.props.handlePhoneChange}
        />
        <HCardSubHeading subHeading="ADDRESS" />
        <Address
          handleHouseNameChange={this.props.handleHouseNameChange}
          handleStreetChange={this.props.handleStreetChange}
          handleStateChange={this.props.handleStateChange}
          handleCountryChange={this.props.handleCountryChange}
          handlePostcodeChange={this.props.handlePostcodeChange}
          handleSuburbChange={this.props.handleSuburbChange}
        />

        <Row className="btnSection">
          <Col sm={6}>
            <Button className="uploadBtn" block>
              Upload Avatar
            </Button>
          </Col>
          <Col sm={6}>
            <Button className="submitBtn" block>
              Create hCard
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
