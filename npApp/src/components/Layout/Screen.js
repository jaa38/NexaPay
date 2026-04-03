import React from "react";
import { View, SafeAreaView } from "react-native";

import { theme, spacing } from "../../theme";

/**
 * 📱 Screen Layout Wrapper
 *
 * Ensures consistent spacing & background across all screens
 */

export default function Screen({ children, style }) {
  return (
    <SafeAreaView
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
            paddingTop: spacing.xxl,
          },
          style,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}