import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { typography, spacing } from './src/theme';
import AppNavigator from './src/navigation/AppNavigator';
import OnboardingSuccessScreen from './src/screens/Onboarding/OnboardingSuccess';
import ResetPasswordScreen from './src/screens/PasswordNavigation/ChangePassword';
import { AuthProvider } from './src/context/AuthContext';

import { initDB } from './src/database/db';
import { useEffect } from 'react';
import { OnboardingProvider } from './src/context/OnboardingContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    initDB();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <OnboardingProvider>
          {/* Main Navigation */}
          <AppNavigator />
        </OnboardingProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
