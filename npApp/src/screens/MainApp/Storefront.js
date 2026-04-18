import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../../components/SectionUI';

export default function StorefrontScreen() {
  const insets = useSafeAreaInsets();

  // ✅ DATA (instead of repeating UI)
  const products = [
    {
      id: '1',
      name: 'Premium Headphones',
      description: 'Wireless noise cancelling headphones',
      price: 45000,
      stock: 12,
      image: require('../../assets/images/premiumheadphones.png'),
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Fitness tracker with heart rate monitor',
      price: 85000,
      stock: 12,
      image: require('../../assets/images/smartwatch.png'),
    },
    {
      id: '3',
      name: 'Phone Case',
      description: 'Protective case for iPhone 14',
      price: 5500,
      stock: 12,
      image: require('../../assets/images/phonecase.png'),
    },
    {
      id: '4',
      name: 'Laptop Stand',
      description: 'Adjustable aluminium laptop stand',
      price: 15000,
      stock: 12,
      image: require('../../assets/images/laptopstand.png'),
    },
  ];

  const formatCurrency = (amount) => `₦${amount.toLocaleString()}`;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
      {/* STATUS BAR */}
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />

      {/* STATUS BAR BACKGROUND */}
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
        contentContainerStyle={{ paddingBottom: 120 }}
      >
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
            My Storefront
          </Text>
          <Text style={[typography.bodyMedium, { color: theme.text.inverse }]}>
            Manage your products and inventory
          </Text>
        </View>

        {/* STATS */}
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
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Total Products
                </Text>
                <Text style={[typography.h4, { color: theme.text.primary }]}>
                  {products.length}
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
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Inventory Value
                </Text>
                <Text style={[typography.h4, { color: theme.text.primary }]}>
                  ₦1,582,500
                </Text>
              </View>
            </View>
          </SectionUICard>
        </View>

        {/* BODY */}
        <View style={{ padding: spacing.xxl }}>
          <Text style={[typography.h4, { color: theme.text.heading }]}>
            Products
          </Text>

          <View style={{ marginTop: spacing.xl, gap: spacing.lg }}>
            {products.map((item) => (
              <SectionUICard key={item.id}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {/* IMAGE */}
                  <Image
                    source={item.image}
                    resizeMode='contain'

                  />

                  {/* CONTENT */}
                  <View
                    style={{
                      flex: 1,
                      marginHorizontal: spacing.md,
                    }}
                  >
                    <View style={{ gap: spacing.xs }}>
                      <Text
                        style={[
                          typography.bodyMediumSemiBold,
                          { color: theme.text.primary },
                        ]}
                      >
                        {item.name}
                      </Text>

                      <Text
                        style={[
                          typography.bodySmall,
                          { color: theme.text.secondary },
                        ]}
                      >
                        {item.description}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: spacing.sm,
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={[typography.h3, { color: theme.text.primary }]}
                      >
                        {formatCurrency(item.price)}
                      </Text>

                      <Text
                        style={[
                          typography.bodySmall,
                          { color: theme.text.secondary },
                        ]}
                      >
                        Stock: {item.stock}
                      </Text>
                    </View>
                  </View>

                  {/* SHARE ICON */}
                  <Pressable
                    android_ripple={{ color: '#ffffff30', borderless: true }}
                    style={{
                      backgroundColor: theme.icon.share.background,
                      padding: spacing.md,
                      borderRadius: 999,
                    }}
                  >
                    <Ionicons
                      name='share-outline'
                      size={20}
                      color={theme.icon.share.icon}
                    />
                  </Pressable>
                </View>
              </SectionUICard>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <Pressable
        android_ripple={{ color: '#ffffff30', borderless: true }}
        style={({ pressed }) => [
          {
            position: 'absolute',
            bottom: insets.bottom + 24,
            right: spacing.xxl,
            backgroundColor: theme.background.brand,
            width: 56,
            height: 56,
            borderRadius: 999,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 6,
            zIndex: 1000,
          },
          pressed && { opacity: 0.8 },
        ]}
      >
        <Ionicons name='add-outline' size={24} color='#1E2A78' />
      </Pressable>
    </View>
  );
}
