import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Screen from '../../components/Layout/Screen';
import { spacing, theme, typography } from '../../theme';
import Button from '../../components/Button';
import StepIndicator from '../../components/StepIndicator';
import Input from '../../components/Input';

export default function Screen1({ navigation }) {
  return (
    <Screen
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
      }}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={{ marginBottom: spacing.xxl }}
              source={require('../../assets/images/arrow-left.png')}
            />
          </Pressable>
          <StepIndicator currentStep={1} totalSteps={3} />
        </View>
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
        <View style={{ marginTop: spacing.xl }}>
          <Input
            label='Email Address'
            placeholder='Please enter your email address'
            style={{ marginBottom: spacing.lg }}
          />
          <Input
            label='Password'
            placeholder='Please enter your password'
            secureTextEntry
            style={{ marginBottom: spacing.lg }}
          />
          <Input
            label='Confirm Password'
            placeholder='Please confirm your password'
            secureTextEntry
            style={{ marginBottom: spacing.lg }} // 16px
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'column',
          marginTop: spacing.xxxxl,
          width: '100%',
        }}
      >
        <Button
          title='Create Account'
          variant='primary'
          fullWidth
          style={{ marginTop: spacing.lg }}
          onPress={() => navigation.navigate('Onboarding2')}
        />
        <Text
          style={[
            typography.bodyMedium,
            { textAlign: 'center', marginTop: spacing.lg },
          ]}
        >
          Already have an account?
          <Text style={{ color: theme.action.secondary.link }}>
            {' '}
            Sign In
          </Text>
        </Text>
        <Text
          style={[
            typography.bodySmall,
            { textAlign: 'center', marginTop: spacing.lg },
          ]}
        >
          By continue, you agree to NexaPay's
          <Text style={{ color: theme.action.secondary.link }}>
            {' '}
            Terms
          </Text>{' '}
          and
          <Text style={{ color: theme.action.secondary.link }}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
      </View>
    </Screen>
  );
}
