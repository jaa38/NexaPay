import React from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';

import MainScreen from '../../components/Layout/Screen';
import { theme, typography, spacing } from '../../theme';

export default function PaymentsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
      {/* ✅ STATUS BAR (overlay) */}
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />

      {/* 🔵 HEADER (covers status bar + top area) */}
      <View
        style={{
          backgroundColor: theme.background.statusbar,
          paddingTop: 60, // 👈 pushes content below status bar
          paddingBottom: spacing.xl,
          alignItems: 'center',
        }}
      >
        <Text style={[typography.h2, { color: theme.text.inverse }]}>
          Order{' '}
        </Text>
      </View>

      {/* ⚪ BODY */}
      <View style={{ flex: 1 }}>{/* Your main content */}</View>
    </View>
  );
}
