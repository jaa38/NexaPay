import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingNavigator from './OnboardingNavigator';
import PasswordNavigator from './PasswordNavigator';

// screens
import SplashScreen from '../screens/Splash';
import GetStartedScreen from '../screens/GetStarted';
import SignInScreen from '../screens/PasswordNavigation';

import { useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <NavigationContainer>
      {user ? (
        // ✅ LOGGED IN FLOW
        <Stack.Navigator>
          <Stack.Screen
            name='Onboarding'
            component={OnboardingNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        // ❌ NOT LOGGED IN FLOW
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen
            name='Splash'
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Get Started'
            component={GetStartedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Onboarding'
            component={OnboardingNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Password'
            component={PasswordNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
