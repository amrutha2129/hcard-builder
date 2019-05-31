import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "./style.css";

export default class HCardFormPreview extends React.PureComponent {
  render() {
    return (
      <div className="cardContainer">
        <Card>
          <CardHeader />
          <CardBody />
        </Card>
      </div>
    );
  }
}
