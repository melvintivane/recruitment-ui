const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export const API_ENDPOINTS = {
  VACANCIES: `${API_BASE_URL}/vacancies`,
  COMPANIES: `${API_BASE_URL}/companies`,
  CANDIDATES: `${API_BASE_URL}/candidates`,
  JOB_APPLICATIONS: `${API_BASE_URL}/job-applications`,
  JOB_CATEGORIES: `${API_BASE_URL}/job-categories`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  BLOGS:`${API_BASE_URL}/blogs`,
  BLOGS_CATEGORIES : `${API_BASE_URL}/blog-categories`,
  EMPLOYERS : `${API_BASE_URL}/employers`,
};

export default API_ENDPOINTS;