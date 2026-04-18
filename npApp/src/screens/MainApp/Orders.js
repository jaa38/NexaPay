import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';

import { theme, typography, spacing } from '../../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SectionUICard from '../../components/SectionUI';
import FilterCard from '../../components/UICard/FilterCard';
import SearchBar from '../../components/Input/SearchBar';
import UICardStatus from '../../components/UICard/UICardStatus';

import { Ionicons } from '@expo/vector-icons';
import { orders } from '../../data/orders';

export default function OrdersScreen() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const insets = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading orders...</Text>
      </View>
    );
  }

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === 'all' || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  // 🔁 Render each order item
  const renderOrder = ({ item }) => (
    <View
      style={{
        marginHorizontal: spacing.xxl,
        marginBottom: spacing.lg,
        marginTop: spacing.lg,
      }}
    >
      <SectionUICard>
        {/* HEADER */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ gap: spacing.xs }}>
            <Text
              style={[
                typography.bodyLargeSemiBold,
                { color: theme.text.primary },
              ]}
            >
              {item.title}
            </Text>

            <Text style={[typography.bodySmall, { color: theme.text.muted }]}>
              {item.orderId}
            </Text>
          </View>

          <Ionicons
            name='chevron-forward-outline'
            size={24}
            color={theme.text.muted}
          />
        </View>

        {/* AMOUNT + STATUS */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: spacing.lg,
          }}
        >
          <Text style={[typography.h3, { color: theme.text.primary }]}>
            ₦{item.amount.toLocaleString()}
          </Text>

          <UICardStatus status={item.status} />
        </View>

        {/* META */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: spacing.lg,
          }}
        >
          <Text style={[typography.bodySmallSemiBold]}>{item.items} items</Text>

          <Text style={[typography.bodySmallSemiBold]}>{item.date}</Text>
        </View>
      </SectionUICard>
    </View>
  );

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

      {/* MAIN FLATLIST */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshing={refreshing}
        ListEmptyComponent={
          <View
            style={{
              padding: spacing.xxl,
              alignItems: 'center',
            }}
          >
            <Text style={[typography.bodyMedium, { color: theme.text.muted }]}>
              No orders found
            </Text>
          </View>
        }
        ListHeaderComponent={
          <>
            {/* HEADER */}
            <View
              style={{
                backgroundColor: theme.background.statusbar,
                paddingTop: insets.top + spacing.xl,
                paddingBottom: spacing.xxxxxxxl,
                paddingHorizontal: spacing.xxl,
              }}
            >
              <Text style={[typography.h2, { color: theme.text.inverse }]}>
                Orders
              </Text>

              <Text
                style={[typography.bodyMedium, { color: theme.text.inverse }]}
              >
                Manage your Customer orders
              </Text>
            </View>

            {/* STATS */}
            <View
              style={{
                marginTop: -spacing.xxxxl,
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
                  {/* Total */}
                  <View style={{ alignItems: 'center' }}>
                    <Text
                      style={[
                        typography.bodySmall,
                        { color: theme.text.secondary },
                      ]}
                    >
                      Total
                    </Text>
                    <Text
                      style={[typography.h4, { color: theme.text.primary }]}
                    >
                      {filteredOrders.length}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 1,
                      height: 40,
                      backgroundColor: theme.border.default,
                    }}
                  />

                  {/* Pending */}
                  <View style={{ alignItems: 'center' }}>
                    <Text
                      style={[
                        typography.bodySmall,
                        { color: theme.text.secondary },
                      ]}
                    >
                      Pending
                    </Text>
                    <Text
                      style={[typography.h4, { color: theme.text.strongText }]}
                    >
                      {orders.filter((o) => o.status === 'pending').length}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 1,
                      height: 40,
                      backgroundColor: theme.border.default,
                    }}
                  />

                  {/* Processing */}
                  <View style={{ alignItems: 'center' }}>
                    <Text
                      style={[
                        typography.bodySmall,
                        { color: theme.text.secondary },
                      ]}
                    >
                      Processing
                    </Text>
                    <Text style={[typography.h4, { color: theme.text.link }]}>
                      {orders.filter((o) => o.status === 'processing').length}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 1,
                      height: 40,
                      backgroundColor: theme.border.default,
                    }}
                  />

                  {/* Completed */}
                  <View style={{ alignItems: 'center' }}>
                    <Text
                      style={[
                        typography.bodySmall,
                        { color: theme.text.secondary },
                      ]}
                    >
                      Completed
                    </Text>
                    <Text
                      style={[
                        typography.h4,
                        { color: theme.action.secondary.link },
                      ]}
                    >
                      {orders.filter((o) => o.status === 'completed').length}
                    </Text>
                  </View>
                </View>
              </SectionUICard>
            </View>

            {/* SEARCH */}
            <View style={{ padding: spacing.xxl }}>
              <SearchBar
                value={search}
                onChangeText={setSearch}
                onClear={() => setSearch('')}
              />
            </View>

            {/* FILTERS */}
            <View
              style={{
                paddingHorizontal: spacing.xxl,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <FilterCard
                label='All'
                active={filter === 'all'}
                onPress={() => handleFilterChange('all')}
              />
              <FilterCard
                label='Pending'
                active={filter === 'pending'}
                onPress={() => handleFilterChange('pending')}
              />
              <FilterCard
                label='Processing'
                active={filter === 'processing'}
                onPress={() => handleFilterChange('processing')}
              />
              <FilterCard
                label='Completed'
                active={filter === 'completed'}
                onPress={() => handleFilterChange('completed')}
              />
            </View>

            {/* TITLE */}
            <View
              style={{
                marginTop: spacing.xl,
                paddingHorizontal: spacing.xxl,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={[typography.h4, { color: theme.text.primary }]}>
                All Orders
              </Text>

              <Text
                style={[typography.bodySmall, { color: theme.text.secondary }]}
              >
                {orders.length} orders
              </Text>
            </View>
          </>
        }
        contentContainerStyle={{
          paddingTop: spacing.lg,
          paddingBottom: spacing.lg,
        }}
      />
    </View>
  );
}
