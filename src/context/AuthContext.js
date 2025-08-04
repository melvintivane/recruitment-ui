import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// 1. Crie o contexto
const AuthContext = createContext();

// 2. Crie o provedor
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  const isTokenExpired = useCallback((token) => {
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("authToken");
    setAuthState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  }, []);

  const loadUser = useCallback(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        isAuthenticated: false,
      }));
      return;
    }

    if (isTokenExpired(token)) {
      logout();
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setAuthState({
        user: decoded,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error("Token inválido:", error);
      logout();
    }
  }, [isTokenExpired, logout]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        logout,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. Exporte o hook useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};
