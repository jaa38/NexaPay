import React, { useState } from 'react';
import { View, Text, StatusBar, Pressable, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../../components/SectionUI';
import Button from '../../components/Button';

import TransactionsList from '../../components/Transactions/TransactionList';

export default function HomeScreen({navigation}) {
  const insets = useSafeAreaInsets();
  const [isHidden, setIsHidden] = useState(false);

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
          paddingTop: insets.top + spacing.xxl,
          paddingBottom: spacing.xxxxl + insets.bottom,
          paddingHorizontal: spacing.xxl,

          borderBottomLeftRadius: 48,
          borderBottomRightRadius: 48,
          overflow: 'hidden',
        }}
      >
        {/* TOP ROW */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={[typography.h2, { color: theme.text.inverse, flex: 1 }]}>
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

        {/* BALANCE */}
        <View style={{ marginTop: spacing.xxl }}>
          <Text style={[typography.label, { color: theme.border.strong }]}>
            Total Balance
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: spacing.xs,
            }}
          >
            <Text style={[typography.h2, { color: theme.background.brand }]}>
              {isHidden ? '•••••••' : '₦248,500'}
            </Text>

            <Pressable
              onPress={() => setIsHidden(!isHidden)}
              style={{ marginLeft: spacing.md }}
            >
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
              {
                color: theme.action.secondary.background,
                marginTop: spacing.xs,
              },
            ]}
          >
            Available Balance
          </Text>
        </View>
      </View>

      {/* FLOATING ACTIONS */}
      <View
        style={{
          marginTop: -spacing.xxxxxl,
          paddingHorizontal: spacing.xxl,
          zIndex: 10,
        }}
      >
        <SectionUICard>
          <View style={{ flexDirection: 'row' }}>
            <Button
              title='Create Link'
              style={{ flex: 1, marginRight: spacing.sm }}
              leftIcon={<Ionicons name='link-outline' size={18} color='#fff' />}
            />

            <Button
              title='Storefront'
              variant='quick-action'
              style={{ flex: 1, marginLeft: spacing.sm }}
              leftIcon={
                <Ionicons name='storefront-outline' size={18} color='#fff' />
              }
            />
          </View>
        </SectionUICard>
      </View>

      {/* BODY */}
      <View style={{ padding: spacing.xxl }}>
        {/* RECENT TRANSACTIONS */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={[typography.h4, { color: theme.text.heading }]}>
            Recent Transactions
          </Text>
          <Text
            style={[
              typography.bodySmall,
              { color: theme.action.secondary.link },
            ]}
            onPress={() => navigation.navigate('Transactions')}
          >
            View All
          </Text>
        </View>
        <View style={{ marginTop: spacing.xxl, marginBottom: spacing.xxxl }}>
          <ScrollView>
            <TransactionsList limit={4} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
