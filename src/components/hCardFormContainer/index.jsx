import React from "react";
import HCardFormHeader from "./HCardFormHeader";
import HCardForm from "./HCardForm";
import { func } from "prop-types";
import "./style.css";

export default class HCardFormContainer extends React.PureComponent {
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
      <div className="formContainer">
        <HCardFormHeader />
        <HCardForm
          handleNameChange={this.props.handleNameChange}
          handleSurnameChange={this.props.handleSurnameChange}
          handleEmailChange={this.props.handleEmailChange}
          handlePhoneChange={this.props.handlePhoneChange}
          handleHouseNameChange={this.props.handleHouseNameChange}
          handleStreetChange={this.props.handleStreetChange}
          handleStateChange={this.props.handleStateChange}
          handleCountryChange={this.props.handleCountryChange}
          handlePostcodeChange={this.props.handlePostcodeChange}
          handleSuburbChange={this.props.handleSuburbChange}
        />
      </div>
    );
  }
}
