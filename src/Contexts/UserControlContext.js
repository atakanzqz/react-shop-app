import React, { createContext, useState } from 'react';

// 1. Context oluştur
export const AuthContext = createContext();

// 2. Provider bileşeni tanımla
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false); // başlangıçta giriş yapılmamış

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
