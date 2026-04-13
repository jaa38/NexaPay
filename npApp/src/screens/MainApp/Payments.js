import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainScreen from '../../components/Layout/MainScreen';
import { theme, typography, spacing } from '../../theme';
import { StatusBar, ScrollView } from 'react-native';
import SectionUICard from '../../components/SectionUI';
import FilterCard from '../../components/UICard/FilterCard';

import { Ionicons } from '@expo/vector-icons';
import UICardStatus from '../../components/UICard/UICardStatus';

export default function PaymentsScreen() {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState('all');

  const filters = ['All', 'Paid', 'Pending', 'Failed'];

  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
      {/* ✅ STATUS BAR */}
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />

      {/* 🔥 STICKY STATUS BAR BACKGROUND */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: insets.top,
          backgroundColor: theme.background.statusbar,
          zIndex: 100,
        }}
      />

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: spacing.xxl,
        }}
      >
        {/* 🔵 HEADER */}
        <View
          style={{
            backgroundColor: theme.background.statusbar,
            paddingTop: insets.top + spacing.xl,
            paddingBottom: spacing.xxxxl + insets.bottom,
            paddingHorizontal: spacing.xxl,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: spacing.lg,
            }}
          >
            <Text style={[typography.h2, { color: theme.text.inverse }]}>
              Payment Link
            </Text>
          </View>
        </View>

        {/* 📊 STATS CARD */}
        <View
          style={{
            marginTop: -spacing.xxxxxl,
            paddingHorizontal: spacing.xxl,
            zIndex: 10,
          }}
        >
          <SectionUICard>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Text style={[typography.h4, { color: theme.text.primary }]}>
                  12
                </Text>
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Total Sent
                </Text>
              </View>

              <View
                style={{
                  width: 1,
                  height: 40,
                  backgroundColor: theme.border.default,
                }}
              />

              <View style={{ alignItems: 'center' }}>
                <Text style={[typography.h4, { color: theme.text.primary }]}>
                  12
                </Text>
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Paid
                </Text>
              </View>

              <View
                style={{
                  width: 1,
                  height: 40,
                  backgroundColor: theme.border.default,
                }}
              />

              <View style={{ alignItems: 'center' }}>
                <Text style={[typography.h4, { color: theme.text.primary }]}>
                  4
                </Text>
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Not Paid
                </Text>
              </View>
            </View>
          </SectionUICard>
        </View>

        <View style={{ padding: spacing.xxl }}>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {filters.map((item) => (
              <FilterCard
                key={item}
                label={item}
                active={selected === item}
                onPress={() => setSelected(item)}
              />
            ))}
          </View>
          <SectionUICard style={{ marginTop: spacing.xl }}>
            {/* 🔝 TOP ROW */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center', // ✅ important
              }}
            >
              {/* LEFT */}
              <View style={{ gap: spacing.xs }}>
                <Text
                  style={[
                    typography.bodyLargeSemiBold,
                    { color: theme.text.primary },
                  ]}
                >
                  Web Design Payment
                </Text>

                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  April 12, 2026
                </Text>
              </View>

              {/* RIGHT (ACTIONS) */}
              <View style={{ flexDirection: 'row', gap: spacing.md }}>
                {/* COPY */}
                <Pressable
                  style={{
                    backgroundColor: theme.icon.copy.background,
                    padding: spacing.md,
                    borderRadius: 999,
                  }}
                >
                  <Ionicons
                    name='copy-outline'
                    size={20}
                    color={theme.icon.copy.icon} // ✅ fixed
                  />
                </Pressable>

                {/* SHARE */}
                <Pressable
                  style={{
                    backgroundColor: theme.icon.share.background,
                    padding: spacing.md,
                    borderRadius: 999,
                  }}
                >
                  <Ionicons
                    name='share-outline'
                    size={20}
                    color={theme.icon.share.icon} // ✅ fixed
                  />
                </Pressable>
              </View>
            </View>

            {/* 🔽 BOTTOM ROW */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center', // ✅ important
                marginTop: spacing.lg,
              }}
            >
              <Text style={[typography.h3, { color: theme.text.primary }]}>
                ₦150,000
              </Text>

              <UICardStatus status='pending' />
            </View>
          </SectionUICard>
        </View>
      </ScrollView>
    </View>

    // <MainScreen variant="main">
    //   {/* 🔵 HEADER */}
    //   <View
    //     style={{
    //       backgroundColor: theme.background.statusbar,

    //       // ✅ safe area spacing stays here (NOT in MainScreen)
    //       paddingTop: insets.top,

    //       paddingBottom: spacing.xl,
    //       paddingHorizontal: spacing.xxl,
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Text style={[typography.h2, { color: theme.text.inverse }]}>
    //       Create Payment Link
    //     </Text>
    //   </View>

    //   {/* ⚪ BODY */}
    //   <View style={{ flex: 1, padding: spacing.xxl }}>
    //     <Text>Create Payment Link Screen</Text>
    //   </View>
    // </MainScreen>
  );
}
