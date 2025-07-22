import { API_ENDPOINTS } from "../config/api";

export const getAllBlogs = async ({ page, size, search, location, category }) => {
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("size", size);

  /*if (search) params.append("searchQuery", search);
  if (location) params.append("location", location);
  if (category) params.append("jobCategoryId", category);*/

  if (!API_ENDPOINTS?.BLOGS) {
    throw new Error("Endpoint de blogs não configurado");
  }

  const response = await fetch(
    `${API_ENDPOINTS.BLOGS}?${params.toString()}&sort=createdAt,desc`
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar blogs");
  }

  return await response.json();
};

export const getSimilarVacancies = async (id) => {
  if (!API_ENDPOINTS?.VACANCIES) {
    throw new Error("Endpoint de vagas não configurado");
  }

  const response = await fetch(`${API_ENDPOINTS.VACANCIES}/similar/${id}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar vagas");
  }

  return await response.json();
};

export const getJobCategories = async () => {
  if (!API_ENDPOINTS?.VACANCIES) {
    throw new Error("Endpoint de vagas não configurado");
  }

  const response = await fetch(`${API_ENDPOINTS.VACANCIES}/categories`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao buscar categorias");
  }

  return await response.json();
}

export const getBlogById = async (blogId) => {
  const response = await fetch(`${API_ENDPOINTS.BLOGS}/${blogId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch blog with ID: ${blogId}`);
  }

  return response.json();
};

export const getBlogCategoryById = async (categoryId) => {
  const response = await fetch(`${API_ENDPOINTS.BLOGS_CATEGORIES}/${categoryId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch blog category with ID: ${categoryId}`);
  }

  return response.json();
};

export const getAllBlogCategories = async (categoryId) => {
  const response = await fetch(`${API_ENDPOINTS.BLOGS_CATEGORIES}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs categories `);
  }

  return response.json();
};





