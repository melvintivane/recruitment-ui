import React, { useState } from "react";
import { useQuery } from "react-query";
import { Form, Input } from "reactstrap";
import { useLanguage } from "../context/LanguageContext";
import { getAllBlogCategories } from "../services/blogService";

const CategoriaBlog = () => {
  const {language} = useLanguage();

  const [pagination, setPagination] = useState({
      page: 0,
      size: 10,
    });

  const { data, isLoading, error } = useQuery({
      queryKey: ["categories", pagination.page, pagination.size],
      queryFn: () =>
        getAllBlogCategories({
          page: pagination.page,
          size: pagination.size,
        }),
      keepPreviousData: true,
    });


  return (
    <React.Fragment>
      <aside className="widget widget_search">
        <Form className="position-relative">
          <Input
            className="form-control"
            type="search"
            placeholder={language === 'pt' ? "Pesquisar..." : "Search..."}
          />
          <button
            className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2"
            type="submit"
          >
            <span className="mdi mdi-magnify text-muted"></span>
          </button>
        </Form>
      </aside>
      <div className="mt-4 pt-2">
        <div className="sd-title">
          <h6 className="fs-16 mb-3">{language === 'pt' ? "Categorias" : "Categories"}</h6>
        </div>

        <div className="my-3">
          {data?.content?.map((category, index) => (
            <div className="form-check mb-2" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={category.name}
              />
              <label className="form-check-label ms-2" htmlFor={category.name}>
                {category.name}
              </label>
            </div>
          ))}
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoriaBlog;
