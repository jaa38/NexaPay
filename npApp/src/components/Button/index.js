import React from 'react';
import { Pressable, Text as RNText, ActivityIndicator } from 'react-native';

import { theme, typography, spacing } from '../../theme';

/**
 * 🔘 NexaPay Button (Pressable Version)
 */

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
}) {
  const isDisabled = disabled || loading;

  const getStyles = (pressed) => {
    const base = {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: 12,
      // alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
      width: fullWidth ? "100%" : "auto",
    };

    if (isDisabled) {
      return {
        ...base,
        backgroundColor: theme.border.default,
      };
    }

    switch (variant) {
      case 'secondary':
        return {
          ...base,
          backgroundColor: pressed
            ? theme.action.secondary.background + 'CC' // slight darken
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
      )}
    </Pressable>
  );
}
