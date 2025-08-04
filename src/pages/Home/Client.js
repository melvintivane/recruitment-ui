import React from "react";
import { Container } from "reactstrap";

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
      logoImage: LogoImage1,
    },
    {
      id: 2,
      logoImage: LogoImage2,
    },
    {
      id: 3,
      logoImage: LogoImage3,
    },
    {
      id: 4,
      logoImage: LogoImage4,
    },

    {
      id: 5,
      logoImage: LogoImage5,
    },
    {
      id: 6,
      logoImage: LogoImage6,
    },
  ];

  return (
    <React.Fragment>
      <section className="py-4 bg-light">
        <Container>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            {(client || []).map((item, key) => (
              <div key={key} className="p-2">
                <img
                  src={item.logoImage}
                  alt={`Logo ${key}`}
                  className="img-fluid"
                  style={{
                    width: "120px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Client;
