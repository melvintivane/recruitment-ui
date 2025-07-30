import React, { useState } from "react";
import { Col, Card, CardBody, Row, Input } from "reactstrap";
import { Link } from "react-router-dom";

//Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//blogImages
import image from "../../../assets/images/user/user.png";

const images = [
  image
];

const LeftSideContent = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);

  return (
    <React.Fragment>
      {isGallery ? (
        <Lightbox
          open={isGallery}
          close={() => setisGallery(false)}
          index={photoIndex}
          slides={images.map((image) => ({ src: image }))}
        />
      ) : null}
      <Col lg={4}>
        <Card className="blog-author-sidebar  border-0 bg-light">
          <CardBody className="card-bod p-4">
            <div className="mb-5">
              <h5 className="blog-title mb-4">Sobre Mim</h5>
              <div className="text-center">
                <img
                  src={image}
                  alt=""
                  className="avatar-lg img-thumbnail mb-4 rounded-circle"
                />
                <h6 className="fs-17">Gabriel Palmer</h6>
                <p className="text-muted">
                  Comece a trabalhar com a Recruitment, que pode fornecer o suporte
                  necessário para gerar conscientização, tráfego e criar
                  conexões.
                </p>
              </div>
            </div>

            <div className="mb-5">
              <h5 className="blog-title mb-4">Siga-me & Conecte-se</h5>
              <ul className="widget-social-menu text-center list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="uil uil-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="uil uil-twitter-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="uil uil-dribbble"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    <i className="uil uil-envelope"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <h5 className="blog-title mb-4">Siga-me @ Instagram</h5>
              <Row className="g-3">
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(0);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(1);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(2);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(3);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(4);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(5);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(6);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(7);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="#" className="image-popup">
                    <img
                      src={image}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(8);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
              </Row>
            </div>

            <div>
              <h6 className="blog-title mb-4">Categorias</h6>
              <div className="mt-3">
                <div className="form-check mb-2">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked1"
                    checked={isChecked}
                    onChange={handleOnChange}
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="flexCheckChecked1"
                  >
                    Business
                  </label>
                </div>
                <div className="form-check mb-2">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="flexCheckChecked2"
                  >
                    Information
                  </label>
                </div>
                <div className="form-check mb-2">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked3"
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="flexCheckChecked3"
                  >
                    Design
                  </label>
                </div>
                <div className="form-check mb-2">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked4"
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="flexCheckChecked4"
                  >
                    Travel
                  </label>
                </div>
                <div className="form-check mb-2">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked5"
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="flexCheckChecked5"
                  >
                    Jobs
                  </label>
                </div>
                <div className="form-check mb-2">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked6"
                  />
                  <label
                    className="form-check-label ms-2"
                    htmlFor="flexCheckChecked6"
                  >
                    Fashion
                  </label>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
