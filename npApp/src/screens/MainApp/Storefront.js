import React from 'react';
import { View, Text } from 'react-native';

import Screen from '../../components/Layout/Screen';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';
import { theme, typography, spacing } from '../../theme';

import BottomTabs from '../../components/BottomTabBar';

export default function StorefrontScreen() {
  const { user, logout } = useAuth();

  return (
    <Screen
      style={{
        flex: 1,
        backgroundColor: theme.background.primary,
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={typography.h1}>Welcome, User</Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          marginTop: spacing.xxxxl,
          width: '100%',
        }}
      >
        <Button
          title='Logout'
          fullWidth
          style={{ marginTop: spacing.lg }}
          onPress={logout}
        />
      </View>
    </Screen>
  );
}
