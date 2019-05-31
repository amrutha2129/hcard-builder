import React from "react";
import "./style.css";
// import HCardSubHeading from "../HCardSubHeading";

export default class HCardHeader extends React.PureComponent {
  render() {
    return (
      <div className="headerContainer">
        <React.Fragment>
          <h1>hCard Builder</h1>
          {/* <HCardSubHeading subHeading="PERSONAL DETAILS" /> */}
        </React.Fragment>
      </div>
    );
  }
}
