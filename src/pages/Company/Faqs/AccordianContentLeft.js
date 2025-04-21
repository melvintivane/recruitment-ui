import React, { useState } from "react";
import { Collapse } from "reactstrap";

const AccordianContentLeft = () => {
  const [isCollapseFirst, setIsCollapseFirst] = useState(true);
  const toggleFirst = () => setIsCollapseFirst(!isCollapseFirst);

  const [isCollapseSecond, setIsCollapseSecond] = useState(false);
  const toggleSecond = () => setIsCollapseSecond(!isCollapseSecond);

  const [isCollapseThird, setIsCollapseThird] = useState(false);
  const toggleThird = () => setIsCollapseThird(!isCollapseThird);

  return (
    <React.Fragment>
      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="buyingone">
          <button
            className="accordion-button"
            onClick={toggleFirst}
            type="button"
          >
            De onde isso vem?
          </button>
        </h2>
        <Collapse isOpen={isCollapseFirst} id="buying-one">
          <div className="accordion-body">
            Se várias línguas se unirem, a gramática da nova língua resultante
            será mais simples e regular do que a das línguas individuais. A nova
            língua comum será mais simples e regular do que as línguas europeias
            existentes.
          </div>
        </Collapse>
      </div>

      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="buyingtwo">
          <button
            className="accordion-button"
            onClick={toggleSecond}
            type="button"
          >
            Como funciona o Hireway?
          </button>
        </h2>
        <Collapse isOpen={isCollapseSecond} id="buying-two">
          <div className="accordion-body">
            Para um falante de inglês, parecerá um inglês simplificado, como um
            amigo cético de Cambridge me disse sobre o que é o Occidental. As
            línguas europeias são membros da mesma família. Sua existência
            separada é um mito.
          </div>
        </Collapse>
      </div>

      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="buyingthree">
          <button
            className="accordion-button"
            onClick={toggleThird}
            type="button"
          >
            Qual é a sua política de envio?
          </button>
        </h2>
        <Collapse isOpen={isCollapseThird} id="buying-three">
          <div className="accordion-body">
            Todos percebem por que uma nova língua comum seria desejável: assim
            poderia-se recusar pagar tradutores caros. Para isso, seria
            necessário ter uma gramática uniforme, pronúncia padronizada e
            vocabulário comum.
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
};

export default AccordianContentLeft;
