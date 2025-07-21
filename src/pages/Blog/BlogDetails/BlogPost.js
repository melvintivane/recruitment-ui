import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/virtual";

//Importar imagens de blog
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
import blogImage4 from "../../../assets/images/blog/img-04.jpg";
import blogImage5 from "../../../assets/images/blog/img-05.jpg";
import blogImage6 from "../../../assets/images/blog/img-06.jpg";
import { useLanguage } from "../../../context/LanguageContext";

const BlogPost = () => {

  const {language} = useLanguage();
  const blogPost = [
    {
      id: 1,
      blogPostImage: blogImage4,
      blogTitle: "Gerenciando o espaço em branco em layouts responsivos?",
      blogAuther: "Rebecca Swartz",
      blogDate: "5 minutos atrás",
    },
    {
      id: 2,
      blogPostImage: blogImage5,
      blogTitle: "Um dia na vida de um designer de moda profissional",
      blogAuther: "Rebecca Swartz",
      blogDate: "5 minutos atrás",
    },
    {
      id: 3,
      blogPostImage: blogImage6,
      blogTitle: "Gerenciando o espaço em branco em layouts responsivos?",
      blogAuther: "Rebecca Swartz",
      blogDate: "5 minutos atrás",
    },
  ];

  return (
    <React.Fragment>
      <div className="mt-5">
        <h5 className="border-bottom pb-3">{language === 'pt' ? "Postagens Relacionadas" : "Related Posts"}</h5>
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          autoHeight={true}
          pagination={{ clickable: true }}
          className="pb-5 mt-4"
          modules={[Autoplay, Pagination]}
        >
          <div className="swiper-wrapper">
            {(blogPost || []).map((blogPostDetails, key) => (
              <SwiperSlide key={key}>
                <Card className="blog-modern-box overflow-hidden border-0">
                  <img
                    src={blogPostDetails.blogPostImage}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-overlay"></div>
                  <div className="card-img-overlay">
                    <Link to="/blogdetails" className="text-white">
                      <h5 className="card-title">
                        {blogPostDetails.blogTitle}
                      </h5>
                    </Link>
                    <p className="card-text text-white-50">
                      {" "}
                      <Link to="/blogauther" className="text-white-50">
                        {blogPostDetails.blogAuther}
                      </Link>{" "}
                      - {blogPostDetails.blogDate}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default BlogPost;
