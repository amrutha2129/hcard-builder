import React from "react";
import { Container, Row, Col } from "reactstrap";
import HCardFormContainer from "../HCardFormContainer/index";
import HCardPreviewContainer from "../HCardPreviewContainer/index";

export default class HCardApp extends React.PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <div>
              <HCardFormContainer />
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <HCardPreviewContainer />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
