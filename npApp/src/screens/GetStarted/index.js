import React from 'react';
import { Text } from 'react-native';
import { View, Image } from 'react-native';

import { spacing, theme, typography } from '../../theme';

import Screen from '../../components/Layout/Screen';
import Button from '../../components/Button';
import StepIndicator from '../../components/StepIndicator';

export default function GetStartedScreen({ navigation }) {
  return (
    <Screen
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[typography.h1, { textAlign: 'center' }]}>NexaPay UI</Text>
        <Text
          style={[
            typography.bodyLarge,
            {
              marginTop: spacing.lg,
              textAlign: 'center',
            },
          ]}
        >
          Get paid faster, manage your business from your phone
        </Text>
        <View
          style={{
            marginTop: spacing.xxxxxl,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: spacing.sm,
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: 'contain' }}
              source={require('../../assets/images/flash.png')}
            />
            <Text style={[typography.bodyMedium]}>Fast Setup</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: spacing.sm,
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: 'contain' }}
              source={require('../../assets/images/shield.png')}
            />
            <Text style={[typography.bodyMedium]}>Secure</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: spacing.sm,
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: 'contain' }}
              source={require('../../assets/images/trend-up.png')}
            />
            <Text style={[typography.bodyMedium]}>Grow Sales</Text>
          </View>
        </View>
      </View>
      {/* <View
        style={{
          marginTop: spacing.xxxxxl,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
            source={require('../../assets/images/flash.png')}
          />
          <Text style={[typography.bodyMedium]}>Fast Setup</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
            source={require('../../assets/images/shield.png')}
          />
          <Text style={[typography.bodyMedium]}>Secure</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: spacing.sm,
          }}
        >
          <Image
            style={{ width: 40, height: 40, resizeMode: 'contain' }}
            source={require('../../assets/images/trend-up.png')}
          />
          <Text style={[typography.bodyMedium]}>Grow Sales</Text>
        </View>
      </View> */}
      <View
        style={{
          flexDirection: 'column',
          marginTop: spacing.xxxxl,
          width: '100%',
        }}
      >
        <Button
          title='Get Started'
          variant='primary'
          fullWidth
          style={{ marginTop: spacing.lg }}
          onPress={() => navigation.navigate('Onboarding')}
        />
        <Text
          style={[
            typography.bodySmall,
            { textAlign: 'center', marginTop: spacing.lg },
          ]}
        >
          Join thousands of businesses in Africa
        </Text>
      </View>
    </Screen>
  );
}
