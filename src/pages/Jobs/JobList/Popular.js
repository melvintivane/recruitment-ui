import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";

const Popular = ({ populars }) => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <div className="wedget-popular-title mt-4">
        <h6>{language === 'pt' ? "Populares" : "Popular"}</h6>
        <ul className="list-inline">
          {(populars || []).map((detalhePopular) => (
            <li className="list-inline-item" key={detalhePopular.id}>
              <div className="popular-box d-flex align-items-center">
                <div className="number flex-shrink-0 me-2">
                  {detalhePopular.count}
                </div>
                <Link to="#" className="primary-link stretched-link">
                  <h6 className="fs-14 mb-0">{detalhePopular.jobTitle}</h6>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Popular;
