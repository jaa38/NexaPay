import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { theme, spacing } from '../../theme';

export default function SectionUICard({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',

    // ✅ Padding
    paddingVertical: spacing.xxl, // 24
    paddingHorizontal: spacing.xxl, // 24

    // ✅ Border
    borderWidth: 1,
    borderColor: theme.border.default, // Gray-200

    // ✅ Background
    backgroundColor: theme.background.surface,

    // ✅ Rounded corners (optional but recommended)
    borderRadius: 16,

    // ✅ Shadow (iOS)
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    // ✅ Elevation (Android)
    elevation: 3,
  },
});