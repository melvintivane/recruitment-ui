import React from "react";
import { Link } from "react-router-dom";

//Importação de Imagens
import blogImage1 from "../assets/images/blog/img-01.jpg";
import blogImage2 from "../assets/images/blog/img-02.jpg";
import blogImage3 from "../assets/images/blog/img-03.jpg";
import blogImage10 from "../assets/images/blog/img-10.jpg";
import { useLanguage } from "../context/LanguageContext";

const PopularPost = () => {
  const {language} = useLanguage();
  const popularPost = [
    {
      id: 1,
      postText: "A evolução da criatividade em páginas de destino",
      postdate: "10 Ago, 2021",
      postImage: blogImage1,
    },
    {
      id: 2,
      postText: "Dia lindo com amigos em Paris",
      postdate: "24 Jun, 2021",
      postImage: blogImage2,
    },
    {
      id: 3,
      postText: "Discussão de projeto com a equipe",
      postdate: "13 Jul, 2021",
      postImage: blogImage3,
    },
    {
      id: 4,
      postText: "Aplicações mais inteligentes para negócios",
      postdate: "01 Fev, 2021",
      postImage: blogImage10,
    },
  ];

  return (
    <React.Fragment>
      <div className="mt-4 pt-2">
        <div className="sd-title">
          <h6 className="fs-16 mb-3">{language === 'pt' ? "Postagens Populares" : "Popular Posts"}</h6>
        </div>
        <ul className="widget-popular-post list-unstyled my-4">
          {popularPost.map((popularPostDetails, key) => (
            <li
              className="d-flex mb-3 align-items-center pb-3 border-bottom"
              key={key}
            >
              <img
                src={popularPostDetails.postImage}
                alt=""
                className="widget-popular-post-img rounded"
              />
              <div className="flex-grow-1 text-truncate ms-3">
                <Link to="/blogdetails" className="text-dark">
                  {popularPostDetails.postText}
                </Link>
                <span className="d-block text-muted fs-14">
                  {popularPostDetails.postdate}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PopularPost;
