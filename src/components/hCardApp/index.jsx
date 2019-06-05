import React from "react";
import { Container, Row, Col } from "reactstrap";
import HCardFormContainer from "../HCardFormContainer/index";
import HCardPreviewContainer from "../HCardPreviewContainer/index";
import "./style.css";

export default class HCardApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      housename: "",
      street: "",
      suburb: "",
      state: "",
      postcode: Number,
      country: "",
      name: "",
      surname: "",
      email: "",
      phone: Number
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleHouseNameChange = this.handleHouseNameChange.bind(this);
    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.handleSuburbChange = this.handleSuburbChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handlePostcodeChange = this.handlePostcodeChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  handleNameChange(name) {
    this.setState({ name });
  }
  handleSurnameChange(surname) {
    this.setState({ surname });
  }
  handleEmailChange(email) {
    this.setState({ email });
  }
  handlePhoneChange(phone) {
    this.setState({ phone });
  }
  handleHouseNameChange(housename) {
    this.setState({ housename });
  }
  handleStreetChange(street) {
    this.setState({ street });
  }
  handleSuburbChange(suburb) {
    this.setState({ suburb });
  }
  handleStateChange(state) {
    this.setState({ state });
  }
  handlePostcodeChange(postcode) {
    this.setState({ postcode });
  }
  handleCountryChange(country) {
    this.setState({ country });
  }
  render() {
    const {
      name,
      surname,
      email,
      phone,
      housename,
      suburb,
      country,
      postcode,
      street,
      state
    } = this.state;
    return (
      <Container>
        <Row className="row-eq-height">
          <Col sm={6}>
            <div>
              <HCardFormContainer
                handleNameChange={this.handleNameChange}
                handleSurnameChange={this.handleSurnameChange}
                handleEmailChange={this.handleEmailChange}
                handlePhoneChange={this.handlePhoneChange}
                handleHouseNameChange={this.handleHouseNameChange}
                handleStreetChange={this.handleStreetChange}
                handleStateChange={this.handleStateChange}
                handleCountryChange={this.handleCountryChange}
                handlePostcodeChange={this.handlePostcodeChange}
                handleSuburbChange={this.handleSuburbChange}
              />
            </div>
          </Col>
          <Col sm={6} className="previewContainer">
            <div>
              <HCardPreviewContainer
                name={name}
                surname={surname}
                email={email}
                phone={phone}
                housename={housename}
                street={street}
                state={state}
                postcode={postcode}
                suburb={suburb}
                country={country}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
