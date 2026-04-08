import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SignInScreen from '../screens/PasswordNavigation';
import ForgotPasswordScreen from '../screens/PasswordNavigation/ForgotPassword';
import ResetPasswordScreen from '../screens/PasswordNavigation/ChangePassword';

const Stack = createNativeStackNavigator();

export default function PasswordNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='SignIn'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='SignIn' component={SignInScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
      <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
