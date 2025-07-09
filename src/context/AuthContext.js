import { createContext, useContext, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext({
  user: null,
  error: null,
  isLoading: true,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  hasRole: () => false,
  hasAnyRole: () => false,
});

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  // Memoize o valor do contexto para evitar renders desnecessários
  const contextValue = useMemo(() => auth, [auth]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};