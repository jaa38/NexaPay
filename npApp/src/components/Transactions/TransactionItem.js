// components/Transactions/TransactionItem.js

import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../SectionUI';

export default function TransactionItem({ item }) {
  const getStylesByType = () => {
    switch (item.type) {
      case 'success':
        return {
          bg: theme.state.success.background,
          color: theme.state.success.text,
          icon: 'checkmark-circle-outline',
        };
      case 'withdrawal':
        return {
          bg: theme.state.error.background,
          color: theme.state.error.text,
          icon: 'arrow-up-outline',
        };
      case 'refund':
        return {
          bg: theme.background.accent,
          color: theme.text.link,
          icon: 'return-down-back-outline',
        };
      default:
        return {
          bg: theme.background.subtle,
          color: theme.text.secondary,
          icon: 'cash-outline',
        };
    }
  };

  const styles = getStylesByType();

  return (
    <SectionUICard>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* ICON */}
        <View
          style={{
            backgroundColor: styles.bg,
            padding: spacing.md,
            borderRadius: 999,
            marginRight: spacing.lg,
          }}
        >
          <Ionicons name={styles.icon} size={16} color={styles.color} />
        </View>

        {/* TEXT */}
        <View style={{ flex: 1 }}>
          <Text
            style={[
              typography.bodyLargeSemiBold,
              { color: theme.text.primary, width: 160 },
            ]}
            numberOfLines={2}
          >
            {item.title}
          </Text>

          <Text
            style={[
              typography.bodySmall,
              { color: theme.text.muted, marginTop: spacing.xs },
            ]}
          >
            {item.time}
          </Text>
        </View>

        {/* AMOUNT */}
        <Text
          style={[
            typography.h4,
            {
              color:
                item.amount > 0
                  ? theme.state.success.text
                  : styles.color,
            },
          ]}
        >
          {item.amount > 0 ? `+$${item.amount}` : `-$${Math.abs(item.amount)}`}
        </Text>
      </View>
    </SectionUICard>
  );
}