import React, { useEffect } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from '../../components/Layout/Screen';
import { theme } from '../../theme';
import { useAuth } from '../../context/AuthContext';

export default function SplashScreen({ navigation }) {
  const { login } = useAuth();

  useEffect(() => {
  const initApp = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const storedUser = await AsyncStorage.getItem('user');
      const hasCompleted = await AsyncStorage.getItem('hasCompletedOnboarding');

      // ✅ 1. Logged in → Main
      if (storedUser) {
        await login(JSON.parse(storedUser));
        navigation.replace('Main');
        return;
      }

      // 🆕 2. First-time user → GetStarted
      if (!hasCompleted) {
        navigation.replace('GetStarted');
        return;
      }

      // 🔁 3. Returning user → SignIn
      navigation.replace('Password', {
        screen: 'SignIn',
      });

    } catch (error) {
      navigation.replace('GetStarted');
    }
  };

  initApp();
}, []);

  return (
    <Screen
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{ height: 300, width: 300, resizeMode: 'contain' }}
        source={require('../../assets/images/NexaPayLogo.png')}
      />
    </Screen>
  );
}
