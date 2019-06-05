import React from "react";
import "./style.css";

export default class HCardFormHeader extends React.PureComponent {
  render() {
    return (
      <div className="headerContainer">
        <React.Fragment>
          <h1>hCard Builder</h1>
        </React.Fragment>
      </div>
    );
  }
}
