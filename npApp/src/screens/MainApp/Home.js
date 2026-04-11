import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainScreen from '../../components/Layout/MainScreen';
import { theme, typography, spacing } from '../../theme';

import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const insets = useSafeAreaInsets(); // 🔥 key
  const [isHidden, setIsHidden] = useState(false);

  const toggleBalance = () => {
    setIsHidden(!isHidden);
  };

  return (
    <MainScreen variant='main'>
      {/* 🔵 HEADER */}
      <View
        style={{
          backgroundColor: theme.background.statusbar,

          // ✅ replaces paddingTop: 80
          paddingTop: insets.top + spacing.xxl,

          paddingBottom: 84,
          paddingHorizontal: spacing.xxl,

          borderBottomLeftRadius: 48,
          borderBottomRightRadius: 48,
        }}
      >
        {/* 👤 Top Row */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Text
            style={[typography.h2, { color: theme.text.inverse, width: 261 }]}
          >
            Welcome,{'\n'}Jeremiah Akinsowon
          </Text>

          <View
            style={{
              backgroundColor: theme.background.brand,
              padding: spacing.lg,
              borderRadius: 999,
            }}
          >
            <Text style={[typography.h2, { color: theme.text.primary }]}>
              JA
            </Text>
          </View>
        </View>

        {/* 💰 Balance Section */}
        <View style={{ marginTop: spacing.xxl }}>
          <View style={{ flexDirection: 'column', gap: spacing.xs }}>
            <Text style={[typography.label, { color: theme.border.strong }]}>
              Total Balance
            </Text>

            <View
              style={{
                flexDirection: 'row',
                gap: spacing.xl,
                alignItems: 'center',
              }}
            >
              <Text style={[typography.h2, { color: theme.background.brand }]}>
                {isHidden ? '•••••••' : '₦248,500'}
              </Text>

              <Pressable onPress={toggleBalance}>
                <Ionicons
                  name={isHidden ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color={theme.background.brand}
                />
              </Pressable>
            </View>

            <Text
              style={[
                typography.label,
                { color: theme.action.secondary.background },
              ]}
            >
              Available Balance
            </Text>
          </View>
        </View>
      </View>

      {/* ⚪ BODY */}
      <View style={{ flex: 1 }}>{/* content */}</View>
    </MainScreen>
  );
}
