import React from "react";
import { View, Pressable } from "react-native";

import { theme, spacing } from "../../theme";

/**
 * 🧩 NexaPay Card Component
 *
 * Variants:
 * - default (surface)
 * - outlined
 * - elevated
 *
 * Features:
 * - Padding system
 * - Optional pressable
 * - Flexible content (children)
 */

export default function Card({
  children,
  variant = "default",
  onPress,
  style,
  padding = "lg",
}) {
  const isPressable = !!onPress;

  const getPadding = () => spacing[padding] || spacing.lg;

  const getStyles = (pressed) => {
    const base = {
      borderRadius: 16,
      padding: getPadding(),
    };

    switch (variant) {
      case "outlined":
        return {
          ...base,
          backgroundColor: theme.background.surface,
          borderWidth: 1,
          borderColor: theme.border.default,
        };

      case "elevated":
        return {
          ...base,
          backgroundColor: theme.background.surface,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 3,
          opacity: pressed ? 0.95 : 1,
        };

      default:
        return {
          ...base,
          backgroundColor: theme.background.surface,
          borderWidth: 1,
          borderColor: theme.border.light,
          opacity: pressed ? 0.97 : 1,
        };
    }
  };

  if (isPressable) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [getStyles(pressed), style]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={[getStyles(false), style]}>{children}</View>;
}