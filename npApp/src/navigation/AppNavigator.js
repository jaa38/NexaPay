import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingNavigator from './OnboardingNavigator';

// screens
import SplashScreen from '../screens/Splash';
import GetStartedScreen from '../screens/GetStarted';
import SignInScreen from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
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
          name='SignIn'
          component={SignInScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
