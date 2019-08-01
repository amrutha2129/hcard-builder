import React from "react";
import "./style.css";
import { string } from "prop-types";

export default class HCardSubHeading extends React.PureComponent {
  static propTypes = {
    subHeading: string.isRequired
  };
  render() {
    const { subHeading } = this.props;
    return <p className="subheading">{subHeading}</p>;
  }
}
