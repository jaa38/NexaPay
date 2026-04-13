import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../../theme';
import { typography } from '../../theme';

export default function UICardStatus({
  status = 'pending', // pending | failed | success
  label,
  icon, // optional override
}) {
  const config = getStatusConfig(status);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: config.border,
          backgroundColor: config.background,
        },
      ]}
    >
      {/* ICON */}
      <Ionicons
        name={icon || config.icon}
        size={14}
        color={config.text}
        style={styles.icon}
      />

      {/* TEXT */}
      <Text
        style={[
          styles.text,
          { color: config.text },
        ]}
      >
        {label || status.toUpperCase()}
      </Text>
    </View>
  );
}

/**
 * 🎯 Status Mapping
 */
const getStatusConfig = (status) => {
  switch (status) {
    case 'success':
      return {
        border: theme.state.success.border,
        background: theme.state.success.background,
        text: theme.state.success.text,
        icon: 'checkmark-circle',
      };

    case 'failed':
      return {
        border: theme.state.error.border,
        background: theme.state.error.background,
        text: theme.state.error.text,
        icon: 'close-circle',
      };

    case 'pending':
    default:
      return {
        border: theme.state.warning.border,
        background: theme.state.warning.background,
        text: theme.state.warning.text,
        icon: 'time',
      };
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
  },

  icon: {
    marginRight: 4, // tight spacing (fits your 4px system)
  },

  text: {
    ...typography.bodySmallSemiBold,
  },
});