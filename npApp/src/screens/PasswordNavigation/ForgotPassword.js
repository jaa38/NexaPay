import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Screen from '../../components/Layout/Screen';
import { spacing, theme, typography } from '../../theme';
import Button from '../../components/Button';
import Input from '../../components/Input';
import UIDisclaimerCard from '../../components/UICard/UICardDisclaimer';

export default function ForgotPasswordScreen({ navigation }) {
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
        </View>
        <View>
          <Text style={[typography.h1, { textAlign: 'left' }]}>
            Forgot Password
          </Text>
          <Text
            style={[
              typography.bodyLarge,
              { marginTop: spacing.md, textAlign: 'left' },
            ]}
          >
            Enter your email address to reset your password
          </Text>
        </View>
        <View style={{ marginTop: spacing.xl }}>
          <Input
            label='Email Address'
            placeholder='Please enter your email address'
            // style={{ marginBottom: spacing.lg }}
          />
        </View>
        <View style={{ marginTop: spacing.xl }}>
          <UIDisclaimerCard
            label='Note:'
            description="We'll send you a secure link to reset your password. This link will expire in 1 hour."
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
          title='Send Reset Link'
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
          Remember your password?{' '}
          <Text
            style={typography.link}
            onPress={() =>
              navigation.navigate('SignIn', {
                screen: 'SignIn',
              })
            }
          >
            Sign In
          </Text>
        </Text>
      </View>
    </Screen>
  );
}
