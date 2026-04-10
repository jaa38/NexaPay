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

// Main App Screens
import HomeScreen from '../screens/MainApp/Home';


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
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        // ❌ NOT LOGGED IN FLOW
        <Stack.Navigator initialRouteName='Splash'>
          {/* Auth / Onboarding */}
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

          {/* Main App */}
          <Stack.Screen
            name='Main'
            component={BottomTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
