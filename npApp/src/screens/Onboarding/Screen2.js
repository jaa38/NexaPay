import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';

import Screen from '../../components/Layout/Screen';
import { spacing, theme, typography } from '../../theme';
import Button from '../../components/Button';
import StepIndicator from '../../components/StepIndicator';
import UIOptionCard from '../../components/UIOptionCard';

import { useOnboarding } from '../../context/OnboardingContext';

export default function Screen2({ navigation }) {
  const { formData, updateForm } = useOnboarding();

  const [selected, setSelected] = useState(formData.role || '');

  const handleContinue = () => {
    if (!selected) return; // ❌ prevent empty

    navigation.navigate('Onboarding3');
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

          <StepIndicator currentStep={2} totalSteps={3} />
        </View>

        {/* Title */}
        <View>
          <Text style={[typography.h1, { textAlign: 'left' }]}>
            What best describes you?
          </Text>

          <Text
            style={[
              typography.bodyLarge,
              { marginTop: spacing.md, textAlign: 'left' },
            ]}
          >
            This helps us personalise your experience
          </Text>
        </View>

        {/* Options */}
        <View
          style={{
            marginTop: spacing.xl,
            flexDirection: 'column',
            gap: spacing.lg,
          }}
        >
          <UIOptionCard
            title='Freelancer'
            description='I work independently and provide services to clients'
            selected={selected === 'Freelancer'}
            onPress={() => {
              setSelected('Freelancer');
              updateForm({ role: 'Freelancer' });
            }}
            icon={require('../../assets/images/user(unselected).png')}
            selectedIcon={require('../../assets/images/user(selected).png')}
          />

          <UIOptionCard
            title='Business Owner'
            description='I own a business and sell products or services'
            selected={selected === 'Business Owner'}
            onPress={() => {
              setSelected('Business Owner');
              updateForm({ role: 'Business Owner' });
            }}
            icon={require('../../assets/images/house(unselected).png')}
            selectedIcon={require('../../assets/images/house(selected).png')}
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
        <Button
          title='Continue'
          variant='primary'
          fullWidth
          disabled={!selected} // ✅ UX improvement
          style={{ marginTop: spacing.lg }}
          onPress={handleContinue}
        />
      </View>
    </Screen>
  );
}
