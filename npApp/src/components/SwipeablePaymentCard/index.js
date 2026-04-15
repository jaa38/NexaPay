import React, { useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { theme, spacing } from '../../theme';

export default function SwipeablePaymentCard({ children, onDelete }) {
  const swipeRef = useRef(null);

  // 👉 RIGHT ACTION (Delete UI)
  const renderRightActions = () => {
    return (
      <Pressable
        onPress={() => {
          swipeRef.current?.close(); // close animation first
          onDelete();
        }}
        style={{
          flex: 1,
          backgroundColor: theme.state.error.background,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
          marginVertical: spacing.xs,
        }}
      >
        <Ionicons
          name='trash-outline'
          size={22}
          color={theme.state.error.text}
        />
        <Text
          style={{
            color: theme.state.error.text,
            marginTop: 4,
          }}
        >
          Delete
        </Text>
      </Pressable>
    );
  };

  return (
    <Swipeable
      ref={swipeRef}
      renderRightActions={renderRightActions}
      // 👉 iOS-like smooth feel
      friction={2}
      rightThreshold={40}
      overshootRight={false}
    >
      <View
        style={{
          marginBottom: spacing.md,
          borderRadius: 16,
          marginVertical: spacing.xs,
        }}
      >
        {children}
      </View>
    </Swipeable>
  );
}
