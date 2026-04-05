import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Screen from '../../components/Layout/Screen';
import { spacing, theme, typography } from '../../theme';
import Button from '../../components/Button';
import StepIndicator from '../../components/StepIndicator';
import Input from '../../components/Input';
import UIOptionCard from '../../components/UIOptionCard';
import { useState } from 'react';

export default function Screen1({ navigation }) {
  const [selected, setSelected] = useState('freelancers', 'business owner');

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
          <StepIndicator currentStep={2} totalSteps={3} />
        </View>
        <View>
          <Text style={[typography.h1, { textAlign: 'left' }]}>
            What best describes you?{' '}
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
        <View
          style={{
            marginTop: spacing.xl,
            flexDirection: 'column',
            gap: spacing.lg,
          }}
        >
          <UIOptionCard
            title='Freelances'
            description='I work independently and provide services to clients'
            selected={selected === 'Freelancers'}
            onPress={() => setSelected('Freelancers')}
            icon={require('../../assets/images/user(unselected).png')}
            selectedIcon={require('../../assets/images/user(selected).png')}
          />
          <UIOptionCard
            title='Business Owner'
            description='I owe a business and sell products or services'
            selected={selected === 'Business Owner'}
            onPress={() => setSelected('Business Owner')}
            icon={require('../../assets/images/house(unselected).png')}
            selectedIcon={require('../../assets/images/house(selected).png')}
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
          title='Continue'
          variant='primary'
          fullWidth
          style={{ marginTop: spacing.lg }}
          onPress={() => navigation.navigate('Onboarding3')}
        />
      </View>
    </Screen>
  );
}
