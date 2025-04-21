import React, { useState } from "react";
import { Collapse } from "reactstrap";

const AccordianContentRight = () => {
  // Collapse Tab

  const [isCollapseFourth, setIsCollapseFourth] = useState(true);
  const toggleFourth = () => setIsCollapseFourth(!isCollapseFourth);

  const [isCollapseFifth, setIsCollapseFifth] = useState(false);
  const toggleFifth = () => setIsCollapseFifth(!isCollapseFifth);

  const [isCollapseSixth, setIsCollapseSixth] = useState(false);
  const toggleSixth = () => setIsCollapseSixth(!isCollapseSixth);

  return (
    <React.Fragment>
      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="generalfour">
          <button
            className="accordion-button"
            onClick={toggleFourth}
            type="button"
          >
            Onde colocar uma página de FAQ?
          </button>
        </h2>
        <Collapse isOpen={isCollapseFourth} id="general-four">
          <div className="accordion-body">
            Como o próprio nome sugere, uma página de FAQ é toda sobre perguntas
            e respostas simples. Reúna perguntas comuns que seus clientes tenham
            feito à sua equipe de suporte e inclua-as na FAQ. Use categorias
            para organizar perguntas relacionadas a tópicos específicos.
          </div>
        </Collapse>
      </div>

      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="generalfive">
          <button
            className="accordion-button"
            onClick={toggleFifth}
            type="button"
          >
            Por que usamos isso?
          </button>
        </h2>
        <Collapse isOpen={isCollapseFifth} id="general-five">
          <div className="accordion-body">
            Será tão simples quanto o Occidental; na verdade, será o Occidental.
            Para um falante de inglês, parecerá um inglês simplificado, como um
            amigo cético de Cambridge me disse sobre o que é o Occidental.
          </div>
        </Collapse>
      </div>

      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="generalsix">
          <button
            className="accordion-button"
            onClick={toggleSixth}
            type="button"
          >
            Onde posso encontrar?
          </button>
        </h2>
        <Collapse isOpen={isCollapseSixth} id="general-six">
          <div className="accordion-body">
            Para um falante de inglês, parecerá um inglês simplificado, como um
            amigo cético de Cambridge me disse sobre o que é o Occidental. As
            línguas europeias são membros da mesma família. Sua existência
            separada é um mito.
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
};

export default AccordianContentRight;
