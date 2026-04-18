import React, { useState } from 'react';
import { View, Text as RNText, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { theme, typography, spacing } from '../../theme';

/**
 * 🧩 Status Dropdown
 *
 * Use for:
 * - Payment status
 * - Filters (pending, processing, completed)
 */

export default function StatusDropdown({
  value,
  onChange,
  options = ['pending', 'processing', 'completed'],
  label = 'Status',
}) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ width: '100%' }}>
      {/* LABEL */}
      {label && (
        <RNText style={[typography.inputLabel, { marginBottom: spacing.xs }]}>
          {label}
        </RNText>
      )}

      {/* SELECT BOX */}
      <Pressable
        onPress={() => setOpen((prev) => !prev)}
        style={{
          borderWidth: 1,
          borderColor: theme.border.default,
          borderRadius: 12,
          backgroundColor: theme.background.surface,
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.md,

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <RNText
          style={[
            typography.bodyMedium,
            {
              color: value ? theme.text.primary : theme.text.placeholder,
            },
          ]}
        >
          {value || 'Select status'}
        </RNText>

        <Ionicons
          name={open ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.text.muted}
        />
      </Pressable>

      {/* DROPDOWN LIST */}
      {open && (
        <View
          style={{
            marginTop: spacing.xs,
            borderWidth: 1,
            borderColor: theme.border.default,
            borderRadius: 12,
            backgroundColor: theme.background.surface,
            overflow: 'hidden',
          }}
        >
          {options.map((item) => {
            const isSelected = item === value;

            return (
              <Pressable
                key={item}
                onPress={() => {
                  onChange(item);
                  setOpen(false);
                }}
                style={({ pressed }) => ({
                  paddingVertical: spacing.md,
                  paddingHorizontal: spacing.lg,
                  backgroundColor: pressed
                    ? theme.background.subtle
                    : 'transparent',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                })}
              >
                <RNText
                  style={[
                    typography.bodyMedium,
                    {
                      color: isSelected
                        ? theme.action.secondary.link
                        : theme.text.primary,
                    },
                  ]}
                >
                  {item}
                </RNText>

                {isSelected && (
                  <Ionicons
                    name='checkmark'
                    size={16}
                    color={theme.action.secondary.link}
                  />
                )}
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}
