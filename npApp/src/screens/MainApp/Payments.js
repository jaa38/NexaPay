import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainScreen from '../../components/Layout/MainScreen';
import { theme, typography, spacing } from '../../theme';

export default function PaymentsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <MainScreen variant="main">
      {/* 🔵 HEADER */}
      <View
        style={{
          backgroundColor: theme.background.statusbar,

          // ✅ safe area spacing stays here (NOT in MainScreen)
          paddingTop: insets.top,

          paddingBottom: spacing.xl,
          paddingHorizontal: spacing.xxl,
          alignItems: 'center',
        }}
      >
        <Text style={[typography.h2, { color: theme.text.inverse }]}>
          Create Payment Link
        </Text>
      </View>

      {/* ⚪ BODY */}
      <View style={{ flex: 1, padding: spacing.xxl }}>
        <Text>Create Payment Link Screen</Text>
      </View>
    </MainScreen>
  );
}