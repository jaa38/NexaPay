import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme, spacing } from '../../theme';

function Screen({ children, style, variant = 'auth' }) {
  const isMain = variant === 'main';

  const statusBarColor = isMain
    ? theme.background.statusbar
    : theme.background.primary;

  return (
    <>
      {/* ✅ Status Bar */}
      <StatusBar
        backgroundColor={statusBarColor}
        barStyle={isMain ? 'light-content' : 'dark-content'}
      />

      {/* 🔝 TOP SAFE AREA (ONLY TOP gets primary color) */}
      <SafeAreaView
        edges={['top']}
        style={{
          backgroundColor: statusBarColor,
        }}
      />

      {/* 📱 MAIN CONTENT (normal background) */}
      <SafeAreaView
        edges={['bottom', 'left', 'right']}
        style={{
          flex: 1,
          backgroundColor: theme.background.primary,
        }}
      >
        <View
          style={[
            {
              flex: 1,
              paddingHorizontal: spacing.xxl,

              paddingTop:
                Platform.OS === 'android'
                  ? StatusBar.currentHeight + spacing.xxl
                  : spacing.xxl,
            },
            style,
          ]}
        >
          {children}
        </View>
      </SafeAreaView>
    </>
  );
}

export default Screen;