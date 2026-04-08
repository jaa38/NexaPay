import React from 'react';
import { View, Text, Image } from 'react-native';
import { theme, spacing, typography } from '../../theme';

/**
 * 🧩 UICard (Info Row Card)
 *
 * Props:
 * - text
 * - icon (image source)
 */

export default function UICard({ text, icon, style, fullWidth = false }) {
  return (
    <View
      style={[
        {
          width: '100%',
          height: 40,
          borderRadius: 24,
          flexDirection: 'row',
          alignItems: 'center',
          width: fullWidth ? '100%' : 'auto',

          paddingVertical: spacing.sm, // 8
          paddingHorizontal: spacing.md, // 12

          backgroundColor: theme.background.brand, // Primary-100
          borderRadius: 12,

          gap: spacing.md, // 12 (icon ↔ text)
        },
        style,
      ]}
    >
      {/* ICON */}
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
        }}
      />

      {/* TEXT */}
      <Text
        style={[
          typography.bodyMedium,
          {
            color: theme.text.secondary, // Gray-600
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}
