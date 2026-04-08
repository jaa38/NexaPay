import React from 'react';
import { View, Text } from 'react-native';
import { theme, spacing, typography } from '../../theme';

/**
 * 🧩 UIDisclaimerCard
 *
 * Props:
 * - title (e.g. "Note:")
 * - description (string)
 */

export default function UIDisclaimerCard({
  title = 'Note:',
  description,
  style,
}) {
  return (
    <View
      style={[
        {
        //   width: '100%',
        //   height: 48,

          flexDirection: 'row',
          alignItems: 'center',

          paddingHorizontal: spacing.md, // 12
          paddingVertical: spacing.sm, // 8

          borderWidth: 1,
          borderRadius: 12,

          borderColor: theme.border.accent,
          backgroundColor: theme.background.accent, // Accent-100
        },
        style,
      ]}
    >
      <Text style={{ flex: 1 }}>
        {/* TITLE */}
        <Text
          style={[
            typography.bodySmallSemiBold,
            { color: theme.text.secondary },
          ]}
        >
          {title}{' '}
        </Text>

        {/* DESCRIPTION */}
        <Text style={[typography.bodySmall, { color: theme.text.secondary }]}>
          {description}
        </Text>
      </Text>
    </View>
  );
}
