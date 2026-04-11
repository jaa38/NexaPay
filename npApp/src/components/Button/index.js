import React from 'react';
import {
  Pressable,
  Text as RNText,
  ActivityIndicator,
  View,
} from 'react-native';

import { theme, typography, spacing } from '../../theme';

/**
 * 🔘 NexaPay Button (Enhanced)
 */

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,

  // ✅ NEW
  leftIcon,
  rightIcon,
}) {
  const isDisabled = disabled || loading;

  const getStyles = (pressed) => {
    const base = {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: spacing.sm, // 👈 space between icon & text
      width: fullWidth ? '100%' : 'auto',
    };

    if (isDisabled) {
      return {
        ...base,
        backgroundColor: theme.border.default,
        opacity: 0.5,
      };
    }

    switch (variant) {
      case 'secondary':
        return {
          ...base,
          backgroundColor: pressed
            ? theme.action.secondary.background + 'CC'
            : theme.action.secondary.background,
        };

      case 'tertiary':
        return {
          ...base,
          backgroundColor: pressed
            ? theme.background.subtle
            : theme.action.tertiary.background,
          borderWidth: 1,
          borderColor: theme.action.tertiary.border,
        };

      case 'ghost':
        return {
          ...base,
          backgroundColor: pressed ? theme.background.subtle : 'transparent',
        };

      // ✅ NEW VARIANT
      case 'quick-action':
        return {
          ...base,
          backgroundColor: pressed
            ? theme.background.accent // 👈 Accent-100 on press (nice UX)
            : theme.border.focus, // 👈 Accent-600
        };

      default:
        return {
          ...base,
          backgroundColor: pressed
            ? theme.action.primary.background + 'CC'
            : theme.action.primary.background,
        };
    }
  };

  const getTextColor = () => {
    if (isDisabled) return theme.text.muted;

    switch (variant) {
      case 'ghost':
        return theme.action.primary.background;
      case 'secondary':
        return theme.action.secondary.text;
      case 'tertiary':
        return theme.action.tertiary.text;
      case 'accent':
        return theme.text.inverse; // 👈 white text
      default:
        return theme.action.primary.text;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [getStyles(pressed), style]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
          
          {/* ✅ LEFT ICON */}
          {leftIcon && leftIcon}

          <RNText
            style={[
              typography.button,
              {
                color: getTextColor(),
              },
            ]}
          >
            {title}
          </RNText>

          {/* ✅ RIGHT ICON */}
          {rightIcon && rightIcon}
        </View>
      )}
    </Pressable>
  );
}