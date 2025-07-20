import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

//Logo Images
import LogoImage1 from "../../assets/images/logo/alliance-media.png";
import LogoImage5 from "../../assets/images/logo/ctrg.png";
import LogoImage4 from "../../assets/images/logo/icap.png";
import LogoImage6 from "../../assets/images/logo/jica.png";
import LogoImage2 from "../../assets/images/logo/salam.png";
import LogoImage3 from "../../assets/images/logo/tongaa-hulett.png";

const Client = () => {
  const client = [
    {
      id: 1,
      logoImage: LogoImage1
    },
    {
      id: 2,
      logoImage: LogoImage2
    },
    {
      id: 3,
      logoImage: LogoImage3
    },
    {
      id: 4,
      logoImage: LogoImage4
    },

    {
      id: 5,
      logoImage: LogoImage5
    },
    {
      id: 6,
      logoImage: LogoImage6
    }
  ];
  return (
    <React.Fragment>
      <div className="py-4">
        <Container>
          <Row>
            {(client || []).map((item, key) => (
              <Col lg={2} key={key}>
                <div className="text-center p-3">
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Woocommerce"
                  >
                    <img src={item.logoImage} alt="" className="img-fluid" />
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Client;
