import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../SectionUI';

export default function DefaultScreenLayout({
  title,
  subtitle,
  stats,
  children,
}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
      {/* STATUS BAR */}
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />

      {/* HEADER */}
      <View
        style={{
          backgroundColor: theme.background.statusbar,
          paddingTop: insets.top + spacing.xl,
          paddingBottom: spacing.xxxxl + insets.bottom,
          paddingHorizontal: spacing.xxl,
        }}
      >
        <Text style={[typography.h2, { color: theme.text.inverse }]}>
          {title}
        </Text>
        {subtitle && (
          <Text style={[typography.bodyLarge, { color: theme.text.inverse }]}>
            {subtitle}
          </Text>
        )}
      </View>

      {/* STATS (optional) */}
      {stats && (
        <View
          style={{
            marginTop: -spacing.xxxxxl,
            paddingHorizontal: spacing.xxl,
            zIndex: 10,
          }}
        >
          <SectionUICard>{stats}</SectionUICard>
        </View>
      )}

      {/* BODY */}
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}
