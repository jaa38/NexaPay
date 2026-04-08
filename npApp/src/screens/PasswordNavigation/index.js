import React, { useState, useEffect } from 'react';
import { Pressable, Text, View, Image } from 'react-native';

import Screen from '../../components/Layout/Screen';
import { spacing, theme, typography } from '../../theme';
import Button from '../../components/Button';
import Input from '../../components/Input';

import useForm from '../../hooks/useForm';
import { useAuth } from '../../context/AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

import { db } from '../../database/db';

export default function SignInScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const { login } = useAuth();

  // ✅ Check if biometric is enabled
  useEffect(() => {
    const checkBiometric = async () => {
      const enabled = await AsyncStorage.getItem('biometricEnabled');
      setBiometricEnabled(enabled === 'true');
    };

    checkBiometric();
  }, []);

  const { values, errors, touched, isValid, handleChange, handleBlur } =
    useForm({
      initialValues: {
        email: '',
        password: '',
      },
      validate: (field, value) => {
        switch (field) {
          case 'email':
            if (!value.trim()) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
              return 'Enter a valid email';
            return '';

          case 'password':
            if (!value) return 'Password is required';
            return '';

          default:
            return '';
        }
      },
    });

  // 🔐 Mock API
  const loginUser = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@mail.com' && password === 'password123') {
          resolve({ success: true });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1500);
    });
  };

  // 🔐 Email login
  const handleSubmit = async () => {
    if (!isValid || loading) return;

    setLoading(true);
    setServerError('');

    try {
      await loginUser(values.email, values.password);

      // ✅ Save user globally
      await login({ email: values.email });

      // ✅ Enable biometric for future
      db.runSync('INSERT INTO users (email) VALUES (?)', [values.email]);
    } catch (error) {
      setServerError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔐 Face ID login
  const handleBiometricLogin = async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) return;

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Face ID',
        fallbackLabel: 'Use Passcode',
      });

      if (result.success) {
        const storedUser = await AsyncStorage.getItem('user');

        if (storedUser) {
          await login(JSON.parse(storedUser));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
      }}
    >
      <View style={{ flex: 1 }}>
        {/* Back */}
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={{ marginBottom: spacing.xxl }}
              source={require('../../assets/images/arrow-left.png')}
            />
          </Pressable>
        </View>

        {/* Header */}
        <View>
          <Text style={[typography.h1, { textAlign: 'left' }]}>
            Welcome Back
          </Text>
          <Text
            style={[
              typography.bodyLarge,
              { marginTop: spacing.md, textAlign: 'left' },
            ]}
          >
            Sign in to continue to NexaPay
          </Text>
        </View>

        {/* Form */}
        <View style={{ marginTop: spacing.xl }}>
          <Input
            label='Email Address'
            placeholder='Please enter your email address'
            value={values.email}
            onChangeText={(val) => {
              setServerError('');
              handleChange('email')(val);
            }}
            onBlur={handleBlur('email')}
            error={touched.email ? errors.email : ''}
            success={touched.email && !errors.email}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            style={{ marginBottom: spacing.lg }}
          />

          <Input
            label='Password'
            placeholder='Please enter your password'
            value={values.password}
            onChangeText={(val) => {
              setServerError('');
              handleChange('password')(val);
            }}
            onBlur={handleBlur('password')}
            error={touched.password ? errors.password : ''}
            success={touched.password && !errors.password}
            secureTextEntry
            showToggle
            style={{ marginBottom: spacing.lg }}
          />

          <Text
            style={[
              typography.link,
              { marginTop: spacing.md, textAlign: 'right' },
            ]}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            Forgot password?
          </Text>

          {/* 🔐 Face ID Button */}
          {biometricEnabled && (
            <Button
              title='Use Face ID'
              variant='secondary'
              fullWidth
              style={{ marginTop: spacing.md }}
              onPress={handleBiometricLogin}
            />
          )}
        </View>
      </View>

      {/* Footer */}
      <View
        style={{
          flexDirection: 'column',
          marginTop: spacing.xxxxl,
          width: '100%',
        }}
      >
        {serverError ? (
          <Text
            style={[
              typography.bodySmall,
              {
                color: theme.state.error.text,
                textAlign: 'center',
                marginBottom: spacing.md,
              },
            ]}
          >
            {serverError}
          </Text>
        ) : null}

        <Button
          title={loading ? 'Signing in...' : 'Sign In'}
          variant='primary'
          fullWidth
          disabled={!isValid || loading}
          style={{ marginTop: spacing.lg }}
          onPress={handleSubmit}
        />

        <Text
          style={[
            typography.bodyMedium,
            { textAlign: 'center', marginTop: spacing.lg },
          ]}
        >
          Don't have an account?{' '}
          <Text
            style={typography.link}
            onPress={() =>
              navigation.navigate('Onboarding', {
                screen: 'Onboarding1',
              })
            }
          >
            Sign Up
          </Text>
        </Text>

        <Text
          style={[
            typography.bodySmall,
            { textAlign: 'center', marginTop: spacing.lg },
          ]}
        >
          By continue, you agree to NexaPay's
          <Text style={typography.link}> Terms</Text> and
          <Text style={typography.link}> Privacy Policy</Text>
        </Text>
      </View>
    </Screen>
  );
}
