import React from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import "./style.css";
import { string, number } from "prop-types";
import userImage from "../../../assets/person-icon.png";

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
