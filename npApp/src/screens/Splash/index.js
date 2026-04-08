import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import Screen from '../../components/Layout/Screen';
import Button from '../../components/Button';
import { typography } from '../../theme';
import { theme } from '../../theme';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Get Started');
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{ height: 300, width: 300, resizeMode: 'contain' }}
        source={require('../../assets/images/NexaPayLogo.png')}
      />
    </Screen>
  );
}
