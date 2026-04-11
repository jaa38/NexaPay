import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔄 Load user from AsyncStorage (on app start)
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // 🔐 Login
  const login = async (userData) => {
    try {
      // Save to storage
      await AsyncStorage.setItem('user', JSON.stringify(userData));

      // Update state
      setUser(userData);
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  // 🚪 Logout
  const logout = async () => {
    try {
      // Remove from storage
      await AsyncStorage.removeItem('user');

      // Clear state
      setUser(null);
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔌 Hook
export const useAuth = () => useContext(AuthContext);