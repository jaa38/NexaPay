import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { theme, spacing, typography } from '../../theme';

/**
 * 🧩 UIOptionCard
 *
 * Props:
 * - title
 * - description
 * - selected (boolean)
 * - onPress
 * - icon (unselected)
 * - selectedIcon (selected)
 */

export default function UIOptionCard({
  title,
  description,
  selected = false,
  onPress,
  icon,
  selectedIcon,
}) {
  const isSelected = selected;

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          // 🎨 Padding
          paddingHorizontal: spacing.xxl,
          paddingVertical: spacing.xxl,

          // 🎨 Border
          borderWidth: 1,
          borderRadius: 16,
          borderColor: isSelected
            ? theme.action.secondary.border
            : theme.border.default,

          // 🎨 Background
          backgroundColor: isSelected
            ? theme.action.secondary.background
            : theme.background.subtle,
        }}
      >
        {/* ICON */}
        <Image
          source={isSelected ? selectedIcon : icon}
          style={{
            width: 40,
            height: 40,
            marginRight: spacing.lg,
            resizeMode: 'contain',
          }}
        />

        {/* TEXT */}
        <View style={{ flex: 1 }}>
          <Text style={typography.h4}>{title}</Text>

          <Text style={[typography.bodyMedium, { marginTop: spacing.xs }]}>
            {description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
