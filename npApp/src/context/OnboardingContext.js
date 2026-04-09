import React, { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
    firstName: '',
    lastName: '',
    businessName: '',
  });

  const updateForm = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      role: '',
      firstName: '',
      lastName: '',
      businessName: '',
    });
  };

  return (
    <OnboardingContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);