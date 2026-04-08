import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../database/db';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ important

  // 🔄 Load user from SQLite
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await getUser();

        if (storedUser) {
          setUser(storedUser);
        }
      } catch (error) {
        console.log('Error loading user:', error);
      } finally {
        setLoading(false); // ✅ VERY important
      }
    };

    loadUser();
  }, []);

  // 🔐 Login
  const login = async (userData) => {
    setUser(userData);
  };

  // 🚪 Logout
  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔌 Hook
export const useAuth = () => useContext(AuthContext);