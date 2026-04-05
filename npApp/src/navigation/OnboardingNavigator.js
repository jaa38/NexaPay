import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import OnboardingScreen1 from '../screens/Onboarding/Screen1';
import OnboardingScreen2 from '../screens/Onboarding/Screen2';
import OnboardingScreen3 from '../screens/Onboarding/Screen3';

const Stack = createNativeStackNavigator();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Onboarding1'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Onboarding1' component={OnboardingScreen1} />

      <Stack.Screen name='Onboarding2' component={OnboardingScreen2} />

      <Stack.Screen name='Onboarding3' component={OnboardingScreen3} />
    </Stack.Navigator>
  );
}
