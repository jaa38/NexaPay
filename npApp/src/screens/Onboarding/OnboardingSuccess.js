import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Screen from '../../components/Layout/Screen';
import { spacing, theme, typography } from '../../theme';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';
import UICard from '../../components/UICard';

export default function OnboardingSuccessScreen({ navigation }) {
  return (
    <Screen
      statusBarStyle='light'
      style={{
        backgroundColor: theme.background.primary,
      }}
    >
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('../../assets/images/tick-circle.png')} />
        <Text
          style={[
            typography.h1,
            { textAlign: 'center', marginTop: spacing.xxl },
          ]}
        >
          You're all set!
        </Text>
        <Text
          style={[
            typography.bodyLarge,
            { textAlign: 'center', marginTop: spacing.md },
          ]}
        >
          Your NexaPay account is ready. Start accepting payments and growing
          your business today
        </Text>

        <View
          style={{
            marginTop: spacing.xl,
            gap: spacing.xxl,
            flexDirection: 'column',
            width: '100%',
            gap: spacing.lg,
          }}
        >
          <UICard
            icon={require('../../assets/images/tick-circle(purple).png')}
            text='Create payment links in seconds'
          />
          <UICard
            icon={require('../../assets/images/tick-circle(purple).png')}
            text='Build your online storefront'
          />
          <UICard
            icon={require('../../assets/images/tick-circle(purple).png')}
            text='Track all your transactions'
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
          title='Go to Dashboard'
          variant='primary'
          fullWidth
          style={{ marginTop: spacing.lg }}
          onPress={() => navigation.navigate('')}
        />
      </View>
    </Screen>
  );
}
