import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingNavigator from './OnboardingNavigator';
import PasswordNavigator from './PasswordNavigator';
import BottomTabs from './BottomTabs';

// screens
import SplashScreen from '../screens/Splash';
import GetStartedScreen from '../screens/GetStarted';
import SignInScreen from '../screens/PasswordNavigation';
import ProfileScreen from '../screens/MainApp/ProfileScreen';

// Main App Screens
import HomeScreen from '../screens/MainApp/Home';

import { useAuth } from '../context/AuthContext';
import { PaymentProvider } from '../context/PaymentContext';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) return null; // or Splash

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaymentProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
              <Stack.Screen name='Main' component={BottomTabs} />
            ) : (
              <>
                <Stack.Screen name='Password' component={PasswordNavigator} />
                <Stack.Screen name='GetStarted' component={GetStartedScreen} />
                <Stack.Screen
                  name='Onboarding'
                  component={OnboardingNavigator}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaymentProvider>
    </GestureHandlerRootView>
  );
}
