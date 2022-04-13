import { createContext, useContext, useState } from 'react';
import { AuthProviderProps } from './props';

const AuthContext = createContext<AuthProviderProps>({
  token: '',
});

export const useAuth = () => useContext<AuthProviderProps>(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('token');
  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};
