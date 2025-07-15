import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const AccordianContentRight = () => {
  // Collapse Tab

  const [isCollapseFourth, setIsCollapseFourth] = useState(true);
  const toggleFourth = () => setIsCollapseFourth(!isCollapseFourth);

  const [isCollapseFifth, setIsCollapseFifth] = useState(false);
  const toggleFifth = () => setIsCollapseFifth(!isCollapseFifth);

  const [isCollapseSixth, setIsCollapseSixth] = useState(false);
  const toggleSixth = () => setIsCollapseSixth(!isCollapseSixth);

  const {language} = useLanguage();

  return (
    <React.Fragment>
      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="generalfour">
          <button
            className="accordion-button"
            onClick={toggleFourth}
            type="button"
          >
            {language === 'pt' ? "Onde colocar uma página de FAQ?" : "Where to place an FAQ page?"}
          </button>
        </h2>
        <Collapse isOpen={isCollapseFourth} id="general-four">
          <div className="accordion-body">
            {language === 'pt' ? "Como o próprio nome sugere, uma página de FAQ é toda sobre perguntas e respostas simples. Reúna perguntas comuns que seus clientes tenham feito à sua equipe de suporte e inclua-as na FAQ. Use categorias para organizar perguntas relacionadas a tópicos específicos." :
            "As the name suggests, an FAQ page is all about simple questions and answers. Gather common questions your customers have asked your support team and include them in the FAQ. Use categories to organize questions related to specific topics."}
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
            {language === 'pt' ? "Por que usamos isso?" : "Why do we use this?"}
          </button>
        </h2>
        <Collapse isOpen={isCollapseFifth} id="general-five">
          <div className="accordion-body">
            {language === 'pt' ? "Será tão simples quanto o Occidental; na verdade, será o Occidental. Para um falante de inglês, parecerá um inglês simplificado, como um amigo cético de Cambridge me disse sobre o que é o Occidental." : 
            "It will be as simple as Occidental; in fact, it will be Occidental. To an English speaker, it will seem like simplified English, as a skeptical Cambridge friend told me about what Occidental is."}
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
            {language === 'pt' ? "Onde posso encontrar?" : "Where can I find it?"}
          </button>
        </h2>
        <Collapse isOpen={isCollapseSixth} id="general-six">
          <div className="accordion-body">
            {language === 'pt' ? "Para um falante de inglês, parecerá um inglês simplificado, como um amigo cético de Cambridge me disse sobre o que é o Occidental. As línguas europeias são membros da mesma família. Sua existência separada é um mito." : 
            "To an English speaker, it will seem like simplified English, as a skeptical Cambridge friend told me about Occidental. The European languages are members of the same family. Their separate existence is a myth."}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
};

export default AccordianContentRight;
