import React from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import "./style.css";
import { string } from "prop-types";
import userImage from "../../assets/person-icon.png";
import HCardPreviewField from "./HCardPreviewField";

export default class HCardPreview extends React.PureComponent {
  static propTypes = {
    name: string.isRequired,
    surname: string,
    email: string,
    phone: string,
    housename: string,
    street: string,
    suburb: string,
    state: string,
    postcode: string,
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
    var addressFirstLine = housename + "      " + street;
    var addressSecondLine = suburb + ",    " + state;
    return (
      <div className="cardContainer">
        <Card>
          <CardHeader className="cardHeader">
            <h2 className="heading">
              {name}&nbsp;{surname}
            </h2>

            <button className="imageBtn">
              <img id="image" src={userImage} alt="" />
            </button>
          </CardHeader>
          <CardBody>
            <HCardPreviewField fieldHeading="EMAIL" fieldText={email} />
            <HCardPreviewField fieldHeading="PHONE" fieldText={phone} />
            <HCardPreviewField
              fieldHeading="ADDRESS"
              fieldText={addressFirstLine}
            />
            <HCardPreviewField fieldHeading="" fieldText={addressSecondLine} />

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
