import React, { useState } from 'react';
import { View, TextInput, Text as RNText, Pressable } from 'react-native';

import { theme, typography, spacing } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

/**
 * 🧾 NexaPay Input Component (Extended)
 *
 * Features:
 * - Label
 * - Placeholder
 * - Focus state
 * - Error state
 * - Success state
 * - Disabled state
 * - Helper text
 * - Password toggle (👁️)
 * - Currency prefix (₦, $, etc.)
 * - Multiline (description field)
 */

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  helperText,
  disabled = false,
  style,
  error,
  success,
  showToggle = false,
  secureTextEntry = false,

  // 🔥 NEW PROPS
  prefix,
  multiline = false,
  keyboardType = 'default',

  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [secure, setSecure] = useState(secureTextEntry);

  /**
   * 🎨 Dynamic Styles
   */
  const getBorderColor = () => {
    if (error) return theme.state.error.border;
    if (success) return theme.state.success.border;
    if (isFocused) return theme.border.focus;
    return theme.border.default;
  };

  const getBackgroundColor = () => {
    if (disabled) return theme.background.subtle;
    return theme.background.surface;
  };

  return (
    <View style={{ width: '100%' }}>
      {/* Label */}
      {label && (
        <RNText style={[typography.inputLabel, { marginBottom: spacing.xs }]}>
          {label}
        </RNText>
      )}

      {/* Wrapper */}
      <View style={style}>
        {/* Input Container */}
        <View
          style={{
            borderWidth: 1,
            borderColor: getBorderColor(),
            borderRadius: 12,
            backgroundColor: getBackgroundColor(),
            paddingHorizontal: spacing.lg,
            paddingVertical: spacing.md,

            flexDirection: 'row',
            alignItems: multiline ? 'flex-start' : 'center',
          }}
        >
          {/* 💰 PREFIX (Currency) */}
          {prefix && (
            <RNText
              style={[
                typography.bodyMediumSemiBold,
                {
                  marginRight: spacing.sm,
                  color: theme.text.primary,
                },
              ]}
            >
              {prefix}
            </RNText>
          )}

          {/* 🧾 TEXT INPUT */}
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={theme.text.placeholder}
            editable={!disabled}
            secureTextEntry={secure}

            keyboardType={keyboardType}
            multiline={multiline}

            style={[
              typography.bodyMedium,
              {
                color: theme.text.primary,
                flex: 1,

                // 🔥 MULTILINE FIX
                textAlignVertical: multiline ? 'top' : 'center',
                height: multiline ? 120 : undefined,
              },
            ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {/* 👁️ PASSWORD TOGGLE */}
          {showToggle && (
            <Pressable
              onPress={() => setSecure((prev) => !prev)}
              style={({ pressed }) => ({
                paddingLeft: spacing.sm,
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Ionicons
                name={secure ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color={theme.text.muted}
              />
            </Pressable>
          )}
        </View>

        {/* ⚠️ FEEDBACK TEXT */}
        {error ? (
          <RNText
            style={[
              typography.caption,
              {
                marginTop: spacing.xs,
                color: theme.state.error.text,
              },
            ]}
          >
            {error}
          </RNText>
        ) : success ? (
          <RNText
            style={[
              typography.caption,
              {
                marginTop: spacing.xs,
                color: theme.state.success.text,
              },
            ]}
          >
            Looks good!
          </RNText>
        ) : helperText ? (
          <RNText
            style={[
              typography.caption,
              {
                marginTop: spacing.xs,
                color: theme.text.muted,
              },
            ]}
          >
            {helperText}
          </RNText>
        ) : null}
      </View>
    </View>
  );
}