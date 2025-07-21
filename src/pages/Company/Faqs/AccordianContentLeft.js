import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const AccordianContentLeft = () => {
  const {language} = useLanguage();
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
            {language === 'pt' ? "De onde isso vem?" : "Where does it leave from?"}
          </button>
        </h2>
        <Collapse isOpen={isCollapseFirst} id="buying-one">
          <div className="accordion-body">
            {language === 'pt' ? "Se várias línguas se unirem, a gramática da nova língua resultanteserá mais simples e regular do que a das línguas individuais. A nova língua comum será mais simples e regular do que as línguas europeias existentes.":
            "If several languages merge, the grammar of the new resulting language will be simpler and more regular than that of the individual languages. The new common language will be simpler and more regular than the existing European languages."}
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
            {language === 'pt' ? "Como funciona o Recruitment?" : "How does Recruitment work?"}
          </button>
        </h2>
        <Collapse isOpen={isCollapseSecond} id="buying-two">
          <div className="accordion-body">
            {language === 'pt' ? "Para um falante de inglês, parecerá um inglês simplificado, como um amigo cético de Cambridge me disse sobre o que é o Occidental. As línguas europeias são membros da mesma família. Sua existência separada é um mito." : 
            "To an English speaker, it will seem like simplified English, as a skeptical Cambridge friend told me about Occidental. The European languages are members of the same family. Their separate existence is a myth."}
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
            {language === 'pt' ? "Qual é a sua política de envio?" : "What is your shipping policy?"}
          </button>
        </h2>
        <Collapse isOpen={isCollapseThird} id="buying-three">
          <div className="accordion-body">
            {language === 'pt' ? "Todos percebem por que uma nova língua comum seria desejável: assim poderia-se recusar pagar tradutores caros. Para isso, seria necessário ter uma gramática uniforme, pronúncia padronizada e vocabulário comum." : 
            "Everyone understands why a new common language would be desirable: this would allow one to avoid paying expensive translators. This would require a uniform grammar, standardized pronunciation, and a common vocabulary."}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
};

export default AccordianContentLeft;
