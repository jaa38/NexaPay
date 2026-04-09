import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';

import Screen from '../../components/Layout/Screen';
import { spacing, theme, typography } from '../../theme';
import Button from '../../components/Button';
import StepIndicator from '../../components/StepIndicator';
import Input from '../../components/Input';

import useForm from '../../hooks/useForm';

// import { useOnboarding } from '../../context/OnboardingContext';
import { useOnboarding } from '../../context/OnboardingContext';

export default function Screen1({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { formData, updateForm } = useOnboarding();

  const { values, errors, touched, isValid, handleChange, handleBlur } =
    useForm({
      initialValues: {
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.password,
      },
      validate: (field, value, values) => {
        switch (field) {
          case 'email':
            if (!value.trim()) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
              return 'Enter a valid email';
            return '';

          case 'password':
            if (!value) return 'Password is required';
            if (value.length < 8) return 'Minimum 8 characters';
            return '';

          case 'confirmPassword':
            if (!value) return 'Confirm your password';
            if (value !== values.password) return 'Passwords do not match';
            return '';

          default:
            return '';
        }
      },
    });

  const handleSubmit = () => {
    if (!isValid || loading) return;

    updateForm({
      email: values.email,
      password: values.password,
    });

    navigation.navigate('Onboarding2');
  };

  const getPasswordStrength = (password) => {
    if (!password) return '';

    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };

  return (
    <Screen
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
      }}
    >
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={{ marginBottom: spacing.xxl }}
              source={require('../../assets/images/arrow-left.png')}
            />
          </Pressable>

          <StepIndicator currentStep={1} totalSteps={3} />
        </View>

        {/* Title */}
        <View>
          <Text style={[typography.h1, { textAlign: 'left' }]}>
            Create your account
          </Text>

          <Text
            style={[
              typography.bodyLarge,
              { marginTop: spacing.md, textAlign: 'left' },
            ]}
          >
            Start accepting payments in minutes
          </Text>
        </View>

        {/* Form */}
        <View style={{ marginTop: spacing.xl }}>
          <Input
            label='Email Address'
            placeholder='Please enter your email address'
            value={values.email}
            onChangeText={(val) => {
              setErrorMessage('');
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
            showToggle
            placeholder='Please enter your password'
            value={values.password}
            onChangeText={(val) => {
              setErrorMessage('');
              handleChange('password')(val);
            }}
            onBlur={handleBlur('password')}
            error={touched.password ? errors.password : ''}
            success={touched.password && !errors.password}
            secureTextEntry
            style={{ marginBottom: spacing.lg }}
          />

          <Text
            style={[
              typography.bodySmall,
              {
                color:
                  getPasswordStrength(values.password) === 'Strong'
                    ? theme.state.success.text
                    : theme.state.warning.text,
                marginTop: spacing.xs,
              },
            ]}
          >
            {getPasswordStrength(values.password)}
          </Text>

          <Input
            label='Confirm Password'
            showToggle
            placeholder='Please confirm your password'
            value={values.confirmPassword}
            onChangeText={(val) => {
              setErrorMessage('');
              handleChange('confirmPassword')(val);
            }}
            onBlur={handleBlur('confirmPassword')}
            error={touched.confirmPassword ? errors.confirmPassword : ''}
            success={touched.confirmPassword && !errors.confirmPassword}
            secureTextEntry
            style={{ marginBottom: spacing.lg }}
          />
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
        {/* Error Message */}
        {errorMessage ? (
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
            {errorMessage}
          </Text>
        ) : null}

        {/* CTA */}
        <Button
          title={loading ? 'Creating...' : 'Create Account'}
          variant='primary'
          fullWidth
          disabled={!isValid || loading}
          style={{ marginTop: spacing.lg }}
          onPress={handleSubmit}
        />

        {/* Sign In */}
        <Text
          style={[
            typography.bodyMedium,
            { textAlign: 'center', marginTop: spacing.lg },
          ]}
        >
          Already have an account?
          <Text
            style={typography.link}
            onPress={() =>
              navigation.navigate('Password', {
                screen: 'SignIn',
              })
            }
          >
            {' '}
            Sign In
          </Text>
        </Text>

        {/* Terms */}
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
