const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export const API_ENDPOINTS = {
  VACANCIES: `${API_BASE_URL}/vacancies`,
  COMPANIES: `${API_BASE_URL}/companies`,
  CANDIDATES: `${API_BASE_URL}/candidates`,
  JOB_CATEGORIES: `${API_BASE_URL}/job-categories`,
  LOGIN: `${API_BASE_URL}/auth/login`,
};

export default API_ENDPOINTS;