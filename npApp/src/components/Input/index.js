import React, { useState } from "react";
import {
  View,
  TextInput,
  Text as RNText,
  Pressable,
} from "react-native";

import { theme, typography, spacing } from "../../theme";

/**
 * 🧾 NexaPay Input Component
 *
 * Features:
 * - Label
 * - Placeholder
 * - Focus state
 * - Error state
 * - Disabled state
 * - Helper text
 */

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  helperText,
  disabled = false,
  style,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (error) return theme.state.error.border;
    if (isFocused) return theme.border.focus;
    return theme.border.default;
  };

  const getBackgroundColor = () => {
    if (disabled) return theme.background.subtle;
    return theme.background.surface;
  };

  return (
    <View style={{ width: "100%" }}>
      {/* Label */}
      {label && (
        <RNText
          style={[
            typography.inputLabel,
            { marginBottom: spacing.xs },
          ]}
        >
          {label}
        </RNText>
      )}

      {/* Input Field */}
      <Pressable
        style={[
          {
            borderWidth: 1,
            borderColor: getBorderColor(),
            borderRadius: 12,
            backgroundColor: getBackgroundColor(),
            paddingHorizontal: spacing.lg,
            paddingVertical: spacing.md,
          },
          style,
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.text.placeholder}
          editable={!disabled}
          style={[
            typography.bodyMedium,
            {
              color: theme.text.primary,
            },
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </Pressable>

      {/* Helper / Error Text */}
      {(error || helperText) && (
        <RNText
          style={[
            typography.caption,
            {
              marginTop: spacing.xs,
              color: error
                ? theme.state.error.text
                : theme.text.muted,
            },
          ]}
        >
          {error || helperText}
        </RNText>
      )}
    </View>
  );
}