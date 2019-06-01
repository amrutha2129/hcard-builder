import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "./style.css";

export default class HCardPreview extends React.PureComponent {
  render() {
    return (
      <div className="cardContainer">
        <Card>
          <CardHeader className="cardHeader" />
          <CardBody>
            <p className="cardItems">EMAIL</p>
            <p className="cardItems">PHONE</p>
            <p className="cardItems">ADDRESS</p>
            <p className="cardItems"> </p>
            <p className="cardItems">POSTCODE</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}
