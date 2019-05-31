import React from "react";
import HCardHeader from "./HCardHeader";
import HCardForm from "./HCardForm";

export default class HCardFormContainer extends React.PureComponent {
  render() {
    return (
      <div className="fileContainer">
        <HCardHeader />
        <HCardForm />
      </div>
    );
  }
}
