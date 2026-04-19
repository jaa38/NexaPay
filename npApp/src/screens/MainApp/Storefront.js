import React from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import DefaultScreenLayout from '../../components/Layout/DefaultScreenLayout';
import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../../components/SectionUI';

export default function StorefrontScreen() {
  const insets = useSafeAreaInsets();

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

  // ✅ Dynamic inventory value (important improvement)
  const totalValue = products.reduce((sum, p) => sum + p.price, 0);

  const renderItem = ({ item }) => (
    <SectionUICard>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={item.image}
          resizeMode='contain'
          style={{ width: 64, height: 64 }}
        />

        <View style={{ flex: 1, marginHorizontal: spacing.md }}>
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
              style={[typography.bodySmall, { color: theme.text.secondary }]}
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
            <Text style={[typography.h3, { color: theme.text.primary }]}>
              {formatCurrency(item.price)}
            </Text>

            <Text
              style={[typography.bodySmall, { color: theme.text.secondary }]}
            >
              Stock: {item.stock}
            </Text>
          </View>
        </View>

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
  );

  return (
    <DefaultScreenLayout
      title='My Storefront'
      subtitle='Manage your products and inventory'
      stats={
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text
              style={[typography.bodySmall, { color: theme.text.secondary }]}
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
              style={[typography.bodySmall, { color: theme.text.secondary }]}
            >
              Inventory Value
            </Text>
            <Text style={[typography.h4, { color: theme.text.primary }]}>
              {formatCurrency(totalValue)}
            </Text>
          </View>
        </View>
      }
    >
      {/* ✅ FlatList AFTER stats */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing.xxl,
          paddingTop: spacing.xl,
          paddingBottom: insets.bottom + 120,
          gap: spacing.lg,
        }}
        ListHeaderComponent={
          <Text style={[typography.h4, { color: theme.text.heading }]}>
            Products
          </Text>
        }
      />

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
          },
          pressed && { opacity: 0.8 },
        ]}
      >
        <Ionicons name='add-outline' size={24} color='#1E2A78' />
      </Pressable>
    </DefaultScreenLayout>
  );
}
