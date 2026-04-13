import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { typography } from '../../theme';

export default function FilterCard({
  label = 'Card',
  active = false,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.base, active ? styles.active : styles.inactive]}
    >
      <Text
        style={[styles.text, active ? styles.activeText : styles.inactiveText]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12, // matches your system
    alignSelf: 'flex-start', // width: auto
  },

  /**
   * 🔥 ACTIVE
   */
  active: {
    backgroundColor: theme.action.secondary.link, // secondary-500
  },

  activeText: {
    ...typography.bodyMediumSemiBold,
    color: theme.text.inverse,
  },

  /**
   * ⚪ INACTIVE
   */
  inactive: {
    backgroundColor: theme.background.surface,
    borderWidth: 1,
    borderColor: theme.border.default,
  },

  inactiveText: {
    ...typography.bodyMediumSemiBold,
    color: theme.text.primary,
  },
});
