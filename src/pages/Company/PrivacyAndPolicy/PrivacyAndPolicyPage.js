import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const PrivacyAndPolicyPage = () => {
  const privacyandpolicyPage = [
    {
      id: 1,
      policyTitle: "Uso do Recruitment",
      policyRules: [
        {
          id: 1,
          policyInnerRule:
            " No Recruitment, acessível em Website.com, uma de nossas principais prioridades é a privacidade dos nossos visitantes. Este documento de Política de Privacidade contém os tipos de informações que são coletadas e registradas pelo Recruitment e como as utilizamos. Se você tiver dúvidas adicionais ou precisar de mais informações sobre nossa Política de Privacidade, não hesite em nos contatar por e-mail em",
          bold: " Recruitmenttechnologypvt.ltd.com"
        },
        {
          id: 2,
          policyInnerRule:
            " Se você tiver dúvidas adicionais ou precisar de mais informações sobre nossa Política de Privacidade."
        },
        {
          id: 3,
          policyInnerRule:
            " Esta política de privacidade se aplica apenas às nossas atividades online e é válida para os visitantes do nosso site em relação às informações que eles compartilharam e/ou coletaram no Recruitment. Esta política não se aplica a nenhuma informação coletada offline ou por canais que não sejam este site."
        },
        {
          id: 4,
          policyInnerRule:
            " Outra parte da nossa prioridade é adicionar proteção para crianças ao usar a internet. Incentivamos os pais e responsáveis a observar, participar e/ou monitorar e orientar a atividade online de seus filhos. Esta política é válida apenas para as informações coletadas através do nosso site e não se aplica a dados coletados offline ou por outros canais."
        }
      ]
    },
    {
      id: 2,
      policyTitle: "Usamos suas informações para:",
      policyRules: [
        {
          id: 1,
          policyInnerRule: "  Soluções de Marketing Digital para o Amanhã"
        },
        {
          id: 2,
          policyInnerRule: " Nossa Agência de Marketing Talentosa e Experiente"
        },
        {
          id: 3,
          policyInnerRule:
            " Diz-se que compositores do passado usavam textos como base."
        },
        {
          id: 4,
          policyInnerRule: " Crie seu próprio estilo para combinar com sua marca"
        }
      ]
    },
    {
      id: 3,
      policyTitle: "Privacidade e proteção de direitos autorais",
      policyRules: [
        {
          id: 1,
          policyInnerRule:
            '  Atualmente há uma <b className=text-danger>"abundância</b> de textos fictícios legíveis. Eles geralmente são usados quando um texto é necessário apenas para preencher espaço. Essas alternativas ao clássico Lorem Ipsum são muitas vezes engraçadas e contam histórias curtas, divertidas ou sem sentido.',
          bold1: "abudance"
        },
        {
          id: 2,
          policyInnerRule:
            " Parece que apenas fragmentos do texto original permanecem nos textos Lorem Ipsum utilizados atualmente. Pode-se especular que, ao longo do tempo, certas letras foram adicionadas ou removidas em várias posições no texto."
        }
      ]
    }
  ];
  
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            {privacyandpolicyPage.map((privacyandpolicyDetails, key) => (
              <Col lg={12} key={key}>
                <h5 className="mb-4">{privacyandpolicyDetails.policyTitle}</h5>
                <ul className="about-list list-unstyled text-muted mb-4 pb-2">
                  {privacyandpolicyDetails.policyRules.map(
                    (privacyandpolicyInner, key) => (
                      <li key={key}>{privacyandpolicyInner.policyInnerRule}<b className="text-danger">{privacyandpolicyInner.bold}</b></li>
                    )
                  )}
                </ul>
              </Col>
            ))}
            <div className="text-end">
              <Link to="#" className="btn btn-primary">
                <i className="uil uil-print"></i> Imprimir
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PrivacyAndPolicyPage;
