import React from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import "./style.css";
import { string, number } from "prop-types";
import userImage from "../../../assets/person-icon.png";

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
            <h2 className="heading">
              {name}&nbsp;{surname}
            </h2>

            <button className="imageBtn" onclick="">
              <img id="image" src={userImage} alt="" />
            </button>
          </CardHeader>
          <CardBody>
            <p className="cardItems">
              <div className="previewTextHeading">EMAIL</div>
              <div className="previewText">{email}</div>
            </p>

            <p className="cardItems">
              <div className="previewTextHeading">PHONE</div>
              <div className="previewText">{phone}</div>
            </p>
            <p className="cardItems">
              <div className="previewTextHeading">ADDRESS</div>
              <div className="previewText">
                {housename}&nbsp;{street}
              </div>
            </p>
            <p className="cardItems">
              <div className="previewText">
                {suburb},&nbsp;{state}
              </div>
            </p>
            <p>
              <Row>
                <Col sm={6} className="cardItems">
                  <div className="previewTextHeading">POSTCODE</div>
                  <div className="previewText">{postcode}</div>
                </Col>
                <Col sm={6} className="cardItems">
                  <div className="previewTextHeading">COUNTRY</div>
                  <div className="previewText">{country}</div>
                </Col>
              </Row>
            </p>
          </CardBody>
        </Card>
      </div>
    );
  }
}
