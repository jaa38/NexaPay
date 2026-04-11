import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../../theme';

export default function MainScreen({ children, variant = 'auth' }) {
  const isMain = variant === 'main';

  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
      {/* ✅ STATUS BAR (overlay) */}
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle={isMain ? 'light-content' : 'dark-content'}
      />

      {/* 🔝 ONLY handle bottom safe area */}
      <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
        {/* 🔥 CONTENT STARTS AT y = 0 */}
        <View style={{ flex: 1 }}>{children}</View>
      </SafeAreaView>
    </View>
  );
}
