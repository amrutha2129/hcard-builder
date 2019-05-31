import React from "react";
import "./style.css";

export default class HCardHeader extends React.PureComponent {
  render() {
    return (
      <div className="headerContainer">
        <h1>hCard Builder</h1>

        <p className="subheading">PERSONAL DETAILS</p>
      </div>
    );
  }
}
