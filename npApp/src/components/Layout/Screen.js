import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme, spacing } from '../../theme';

/**
 * 📱 Cross-Platform Screen Layout
 * Works perfectly on iOS + Android
 */

function Screen({ children, style }) {
  return (
    <SafeAreaView
      edges={['top', 'bottom', 'left', 'right']}
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

            // ✅ Android fix
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
  );
}

export default Screen;
