import React from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import "./style.css";
import { string, number } from "prop-types";

export default class HCardPreview extends React.PureComponent {
  static propTypes = {
    name: string.isRequired,
    surname: string,
    email: string,
    phone: number,
    housename: string,
    street: string,
    suburb: string,
    state: string,
    postcode: number,
    country: string
  };
  render() {
    const {
      name,
      surname,
      email,
      phone,
      housename,
      street,
      suburb,
      country,
      postcode,
      state
    } = this.props;
    return (
      <div className="cardContainer">
        <Card>
          <CardHeader className="cardHeader">
            <div>
              <h2>
                {name}&nbsp;{surname}
              </h2>
            </div>
          </CardHeader>
          <CardBody>
            <p className="cardItems">
              EMAIL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{email}
            </p>
            <p className="cardItems">
              PHONE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone}
            </p>
            <p className="cardItems">
              ADDRESS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{housename}&nbsp;{street}
            </p>
            <p className="cardItems">
              {suburb},&nbsp;{state}
            </p>
            <p className="cardItems">
              <Row>
                <Col sm={6}>
                  <div>POSTCODE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{postcode}</div>
                </Col>
                <Col sm={6}>
                  <div>COUNTRY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{country}</div>
                </Col>
              </Row>
            </p>
          </CardBody>
        </Card>
      </div>
    );
  }
}
