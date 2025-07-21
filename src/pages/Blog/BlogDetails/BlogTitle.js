import React from "react";
import { Col, Row } from "reactstrap";

const BlogTitle = ({data}) => {
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col lg={7}>
          <div className="text-center mb-5">
            <p className="text-danger fw-semibold mb-0">{data.category || "Category"}</p>
            <h3>{data.title}</h3>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BlogTitle;
