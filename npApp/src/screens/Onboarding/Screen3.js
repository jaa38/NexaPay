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
          <StepIndicator currentStep={3} totalSteps={3} />
        </View>
        <View>
          <Text style={[typography.h1, { textAlign: 'left' }]}>
            Complete your profile
          </Text>
          <Text
            style={[
              typography.bodyLarge,
              { marginTop: spacing.md, textAlign: 'left' },
            ]}
          >
            Just a few details to get you started
          </Text>
        </View>
        <View
          style={{
            marginTop: spacing.xl,
            flexDirection: 'column',
            gap: spacing.lg,
          }}
        >
          <Text style={[typography.h4, { textAlign: 'left' }]}>
            Personal Information
          </Text>
          <View>
            <View style={{ flexDirection: 'row', gap: spacing.xl }}>
              <View style={{ flex: 1 }}>
                <Input label='First Name' placeholder='John' />
              </View>

              <View style={{ flex: 1 }}>
                <Input label='Last Name' placeholder='Doe' />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: spacing.xl }}>
          <View style={{ flexDirection: 'column', gap: spacing.lg }}>
            <Text style={[typography.h4, { textAlign: 'left' }]}>
              Business Information
            </Text>
            <Input label='Business Name' placeholder='Acme Corporation' />
          </View>
        </View>
        <View style={{ marginTop: spacing.xl }}>
          <Text style={[typography.h4, { textAlign: 'left' }]}>
            Business Account
          </Text>
          <Text
            style={[
              typography.bodyMedium,
              { textAlign: 'left', marginTop: spacing.sm },
            ]}
          >
            Where you'll receive your payments
          </Text>
          <View style={{ marginTop: spacing.xl }}>
            <Input
              label='Account Name'
              placeholder='0123456789'
              style={{ marginBottom: spacing.lg }}
            />
            <Input
              label='Bank Name'
              placeholder='Select Bank'
              style={{ marginBottom: spacing.lg }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginTop: spacing.xxxxl,
          width: '100%',
        }}
      >
        <View style={{ flexDirection: 'column', gap: spacing.lg }}>
          <Button
            title='Continue Setup'
            variant='primary'
            fullWidth
            style={{ marginTop: spacing.lg }}
            onPress={() => navigation.navigate('Onboarding3')}
          />
          <Text style={[typography.bodySmall, { textAlign: 'center' }]}>
            You can update these details anytime in settings
          </Text>
        </View>
      </View>
    </Screen>
  );
}
