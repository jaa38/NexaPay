import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [payments, setPayments] = useState([]);

  // 📥 LOAD from storage
  useEffect(() => {
    const loadPayments = async () => {
      try {
        const stored = await AsyncStorage.getItem('payments');

        if (stored) {
          setPayments(JSON.parse(stored));
        }
      } catch (e) {
        console.log('Error loading payments', e);
      }
    };

    loadPayments();
  }, []);

  // 📤 SAVE to storage whenever payments change
  useEffect(() => {
    const savePayments = async () => {
      try {
        await AsyncStorage.setItem('payments', JSON.stringify(payments));
      } catch (e) {
        console.log('Error saving payments', e);
      }
    };

    savePayments();
  }, [payments]);

  // ➕ Add payment
  const addPayment = (payment) => {
    setPayments((prev) => [payment, ...prev]);
  };

  const deletePayment = (id) => {
    setPayments((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PaymentContext.Provider value={{ payments, addPayment, deletePayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayments = () => useContext(PaymentContext);
