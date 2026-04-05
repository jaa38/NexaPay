import React from "react";
import { View } from "react-native";
import { theme, spacing } from "../../theme";

/**
 * 📊 Step Indicator (Segmented)
 *
 * Props:
 * - currentStep (number)
 * - totalSteps (number)
 */

export default function StepIndicator({ currentStep, totalSteps }) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: spacing.sm,
        marginBottom: spacing.lg,
      }}
    >
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index < currentStep;

        return (
          <View
            key={index}
            style={{
              flex: 1,
              height: 6,
              borderRadius: 4,
              backgroundColor: isActive
                ? theme.action.primary.background // active
                : theme.border.default,           // inactive
            }}
          />
        );
      })}
    </View>
  );
}