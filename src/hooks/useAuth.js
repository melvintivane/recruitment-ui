import { useEffect, useState, useCallback } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';



export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Verifica se o token expirou
  const isTokenExpired = useCallback((token) => {
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  }, []);

  // Função de logout
  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    setUser(null);
  }, []);

  // Carrega e valida o usuário a partir do token
  const loadUser = useCallback(() => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      setIsLoading(false);
      return;
    }

    if (isTokenExpired(token)) {
      logout();
      setIsLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (error) {
      console.error("Token inválido:", error);
      logout();
    } finally {
      setIsLoading(false);
    }
  }, [isTokenExpired, logout]);

  // Efeito para carregar o usuário ao montar o componente
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  // Efeito para verificar periodicamente a expiração do token
  useEffect(() => {
    if (!user) return;

    const checkTokenExpiration = setInterval(() => {
      const token = localStorage.getItem('authToken');
      if (token && isTokenExpired(token)) {
        logout();
        navigate('/login', { state: { sessionExpired: true } });
      }
    }, 60000); // Verifica a cada minuto

    return () => clearInterval(checkTokenExpiration);
  }, [user, isTokenExpired, navigate, logout]);


  // Verifica se o usuário tem uma role específica
  const hasRole = useCallback((role) => {
    if (!user?.scope) return false;
    return user.scope.split(' ').includes(role);
  }, [user]);

  return { 
    user, 
    logout, 
    isLoading, 
    isAuthenticated: !!user,
    hasRole
  };
}