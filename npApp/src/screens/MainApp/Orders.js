import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import DefaultScreenLayout from '../../components/Layout/DefaultScreenLayout';

import { theme, typography, spacing } from '../../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SectionUICard from '../../components/SectionUI';
import FilterCard from '../../components/UICard/FilterCard';
import SearchBar from '../../components/Input/SearchBar';
import UICardStatus from '../../components/UICard/UICardStatus';

import { Ionicons } from '@expo/vector-icons';
import { fetchOrders } from '../../api/orders';

export default function OrdersScreen() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (error) {
        console.log('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const data = await fetchOrders();
      setOrders(data);
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === 'all' || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  const handleFilterChange = (value) => setFilter(value);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background.primary,
        }}
      >
        <Text>Loading orders...</Text>
      </View>
    );
  }

  const renderOrder = ({ item }) => (
    <View
      style={{
        marginHorizontal: spacing.xxl,
        marginBottom: spacing.lg,
        marginTop: spacing.lg,
      }}
    >
      <SectionUICard>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ gap: spacing.xs }}>
            <Text style={typography.bodyLargeSemiBold}>{item.title}</Text>

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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: spacing.lg,
          }}
        >
          <Text style={typography.h3}>₦{item.amount.toLocaleString()}</Text>

          <UICardStatus status={item.status} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: spacing.lg,
          }}
        >
          <Text style={typography.bodySmallSemiBold}>{item.items} items</Text>

          <Text style={typography.bodySmallSemiBold}>{item.date}</Text>
        </View>
      </SectionUICard>
    </View>
  );

  return (
    <DefaultScreenLayout
      title='Orders'
      subtitle='Manage your Customer orders'
      stats={
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Stat label='Total' value={filteredOrders.length} />
          <Stat
            label='Pending'
            value={orders.filter((o) => o.status === 'pending').length}
          />
          <Stat
            label='Processing'
            value={orders.filter((o) => o.status === 'processing').length}
          />
          <Stat
            label='Completed'
            value={orders.filter((o) => o.status === 'completed').length}
          />
        </View>
      }
    >
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshing={refreshing}
        contentContainerStyle={{
          paddingTop: spacing.lg,
          paddingBottom: insets.bottom + spacing.xl,
        }}
        ListHeaderComponent={
          <>
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
              <Text style={typography.h4}>All Orders</Text>
              <Text style={typography.bodySmall}>
                {filteredOrders.length} orders
              </Text>
            </View>
          </>
        }
        ListEmptyComponent={
          <View style={{ padding: spacing.xxl, alignItems: 'center' }}>
            <Text style={{ color: theme.text.muted }}>No orders found</Text>
          </View>
        }
      />
    </DefaultScreenLayout>
  );
}

const Stat = ({ label, value }) => (
  <View style={{ alignItems: 'center' }}>
    <Text style={{ fontSize: 12, color: '#6B7280' }}>{label}</Text>
    <Text style={{ fontSize: 16, fontWeight: '600' }}>{value}</Text>
  </View>
);
