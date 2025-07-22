import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Tags = () => {

  const {language} = useLanguage();

  const tags = [
    {
      id: 1,
      tagName: "Moda",
    },
    {
      id: 2,
      tagName: "Empregos",
    },
    {
      id: 3,
      tagName: "Negócios",
    },
    {
      id: 4,
      tagName: "Corporativo",
    },
    {
      id: 5,
      tagName: "E-commerce",
    },
    {
      id: 6,
      tagName: "Agência",
    },
    {
      id: 7,
      tagName: "Responsivo",
    },
  ];
  return (
    <React.Fragment>
      <div className="mt-4 pt-2">
        <div className="sd-title">
          <h6 className="fs-16 mb-3">{language === 'pt' ? "Últimas Tags" : "Last Tags"}</h6>
        </div>
        <div className="tagcloud mt-3 d-flex flex-wrap align-items-start gap-1 ">
          {tags.map((tagsDetails, key) => (
            <Link className="badge tag-cloud fs-12 mt-2" to="#" key={key}>
              {tagsDetails.tagName}
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tags;
