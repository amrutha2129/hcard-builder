import React from "react";
import "./style.css";
import { string } from "prop-types";

export default class HCardPreviewField extends React.PureComponent {
  static propTypes = {
    fieldHeading: string.isRequired,
    fieldText: string.isRequired
  };
  render() {
    const { fieldHeading, fieldText } = this.props;
    return (
      <p className="cardItems">
        <div className="previewTextHeading">{fieldHeading}</div>
        <div className="previewText">{fieldText}</div>
      </p>
    );
  }
}
