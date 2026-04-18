import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text as RNText,
  Pressable,
} from 'react-native';

import { theme, typography, spacing } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

/**
 * 🧾 NexaPay Input Component (Final)
 *
 * A flexible, design-system-driven input component.
 *
 * ----------------------------------------
 * ✅ FEATURES
 * ----------------------------------------
 * - Label support
 * - Placeholder
 * - Focus state
 * - Error state
 * - Success state
 * - Disabled state
 * - Helper / feedback text
 * - Password toggle (👁️)
 * - Currency prefix (₦, $, etc.)
 * - Multiline (e.g. description input → 120px height)
 * - Left & Right slots (icons, buttons, loaders, etc.)
 *
 * ----------------------------------------
 * 🧠 DESIGN PRINCIPLE
 * ----------------------------------------
 * This is a **base primitive component**.
 * Do NOT overload it with feature-specific logic (e.g. search).
 *
 * Instead:
 * 👉 Compose it (e.g. SearchBar uses renderLeft/renderRight)
 *
 * ----------------------------------------
 * 🧩 EXTENSIBILITY (IMPORTANT)
 * ----------------------------------------
 * renderLeft  → Inject element before input
 * renderRight → Inject element after input
 *
 * Example:
 * - Search icon
 * - Clear button
 * - Loading spinner
 *
 * ----------------------------------------
 * 📏 SPACING SYSTEM
 * ----------------------------------------
 * Uses:
 * 4px → xs
 * 8px → sm
 * 16px → md
 * 24px → lg
 *
 * ----------------------------------------
 * 💡 USAGE EXAMPLES
 * ----------------------------------------
 *
 * 💰 Currency Input:
 * <Input prefix="₦" keyboardType="numeric" />
 *
 * 📝 Description Input:
 * <Input multiline />
 *
 * 🔍 Search Input (via composition):
 * <Input renderLeft={() => <Icon />} />
 *
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

  // 🔥 EXTENSIONS
  prefix,
  multiline = false,
  keyboardType = 'default',

  // 🔥 COMPOSITION (NEW)
  renderLeft,
  renderRight,

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
      {/* 🏷️ LABEL */}
      {label && (
        <RNText style={[typography.inputLabel, { marginBottom: spacing.xs }]}>
          {label}
        </RNText>
      )}

      {/* 🧱 WRAPPER */}
      <View style={style}>
        {/* 📦 INPUT CONTAINER */}
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
          {/* 🔹 LEFT SLOT */}
          {renderLeft && (
            <View style={{ marginRight: spacing.sm }}>
              {renderLeft()}
            </View>
          )}

          {/* 💰 PREFIX */}
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

          {/* 🔹 RIGHT SLOT */}
          {renderRight && renderRight()}

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