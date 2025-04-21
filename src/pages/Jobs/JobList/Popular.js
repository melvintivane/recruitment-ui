import React from "react";
import { Link } from "react-router-dom";

const Popular = () => {
  const populares = [
    {
      id: 1,
      count: 20,
      jobTitle: "Designer UI/UX"
    },
    {
      id: 2,
      count: 18,
      jobTitle: "Gerente de RH"
    },
    {
      id: 3,
      count: 10,
      jobTitle: "Gerente de Vendas"
    },
    {
      id: 4,
      count: 15,
      jobTitle: "Desenvolvedor"
    }
  ];

  return (
    <React.Fragment>
      <div className="wedget-popular-title mt-4">
        <h6>Populares</h6>
        <ul className="list-inline">
          {(populares || []).map((detalhePopular) => (
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
