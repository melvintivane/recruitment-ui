import React from "react";
import { Form } from "react-bootstrap";
import { Col, Container, Input, Row } from "reactstrap";
import Countdown from "react-countdown";

//import Image
import rocketImage from "../../assets/images/animat-rocket-color.gif";

const ComingSoon = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      return (
        <>
          <div className="countdownlist-item">
            <div className="count-title">Days</div>
            <div className="count-num">{days}</div>
          </div>
          <div className="countdownlist-item">
            <div className="count-title">Hours</div>
            <div className="count-num">{hours}</div>
          </div>
          <div className="countdownlist-item">
            <div className="count-title">Minutes</div>
            <div className="count-num">{minutes}</div>
          </div>
          <div className="countdownlist-item">
            <div className="count-title">Seconds</div>
            <div className="count-num">{seconds}</div>
          </div>
        </>
      );
    }
  };
  document.title = "Coming Soon | Recruitment - Job Listing | MobiSolutions";
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-coming-soon bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={6}>
                    <div className="text-center">
                      <div className="mb-4 pb-3">
                        <img
                          src={rocketImage}
                          alt=""
                          height="150"
                          className="mg-fluid"
                        />
                      </div>
                      <h1>We're Launching Soon..!!</h1>
                      <p className="text-muted mb-4 pb-3">
                        Start working with Recruitment that can provide everything you
                        need to generate awareness, drive traffic, connect.
                      </p>
                      <div id="countdown" className="d-flex">
                        <Countdown date="2024/12/31" renderer={renderer} />
                      </div>
                      <Form action="#" className="coming-soon-subacribe mt-4">
                        <div className="input-group mb-3">
                          <Input
                            type="text"
                            className="form-control text-dark"
                            placeholder="Enter your email"
                          />
                          <button className="btn btn-primary" type="button">
                            Subscribe
                          </button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComingSoon;
