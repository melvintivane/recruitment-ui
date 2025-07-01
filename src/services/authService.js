import { API_ENDPOINTS } from "../config/api";

export const signUp = async (userData) => {
  const response = await fetch(`${API_ENDPOINTS.CANDIDATES}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao cadastrar usuário");
  }

  return await response.json();
};

export const login = async (credentials) => {
  const response = await fetch(API_ENDPOINTS.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao fazer login");
  }

  return await response.json();
};

export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const isAuthenticated = () => {
  const token = getAuthToken();
  if (!token) return false;

  // Verificar expiração se necessário
  const expiration = localStorage.getItem("tokenExpiration");
  if (expiration && new Date().getTime() > parseInt(expiration)) {
    logout();
    return false;
  }

  return true;
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiration");
  localStorage.removeItem("rememberMe");
  window.location.href = "/login"; // Força recarregamento para limpar estado
};
