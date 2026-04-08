import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Screen from '../../components/Layout/Screen';
import { spacing, theme, typography } from '../../theme';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function ChangePasswordScreen({ navigation }) {
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
            Reset Password
          </Text>
          <Text
            style={[
              typography.bodyLarge,
              { marginTop: spacing.md, textAlign: 'left' },
            ]}
          >
            Create a new secure password for your account
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
          title='Reset Password'
          variant='primary'
          fullWidth
          style={{ marginTop: spacing.lg }}
          // onPress={() => navigation.navigate('Onboarding2')}
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
            Sign In
          </Text>
        </Text>
      </View>
    </Screen>
  );
}
