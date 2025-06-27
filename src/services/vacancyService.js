// services/vacancyService.js
import { API_ENDPOINTS } from "../config/api";


export const getAllVacancies = async (page = 0, size = 10) => {
  try {
    if (!API_ENDPOINTS?.VACANCIES) {
      throw new Error('Endpoint de vagas não configurado');
    }

    const response = await fetch(`${API_ENDPOINTS.VACANCIES}?page=${page}&size=${size}&sort=createdAt,desc`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Erro ao buscar vagas');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro no serviço de vagas:', error);
    throw error;
  }
};

export const getSimilarVacancies = async (id) => {
  try {
    if (!API_ENDPOINTS?.VACANCIES) {
      throw new Error('Endpoint de vagas não configurado');
    }

    const response = await fetch(`${API_ENDPOINTS.VACANCIES}/similar/${id}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Erro ao buscar vagas');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro no serviço de vagas:', error);
    throw error;
  }
}


export const getVacancyById = async (vacancyId) => {

  const response = await fetch(`${API_ENDPOINTS.VACANCIES}/${vacancyId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch vacancy with ID: ${vacancyId}`);
  }

  return response.json();
};
