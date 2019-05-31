import React from "react";
import "./style.css";
import HCardPreview from "./HCardPreview";

export default class HCardPreviewContainer extends React.PureComponent {
  render() {
    return (
      <div className="previewContainer">
        <HCardPreview />
      </div>
    );
  }
}
