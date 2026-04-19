import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import DefaultScreenLayout from '../../components/Layout/DefaultScreenLayout';
import { spacing, theme, typography } from '../../theme';
import SearchBar from '../../components/Input/SearchBar';
import UICardStatus from '../../components/UICard/UICardStatus';
import SectionUICard from '../../components/SectionUI';
import FilterCard from '../../components/UICard/FilterCard';
import { Ionicons } from '@expo/vector-icons';

import { fetchTransactions } from '../../api/transactions';

export default function TransactionsScreen() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const load = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };
    load();
  }, []);

  // 🔍 FILTER + SEARCH LOGIC
  const filteredTransactions = transactions.filter((t) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'received' && t.type === 'received') ||
      (filter === 'sent' && t.type === 'sent') ||
      (filter === 'failed' && t.status === 'failed');

    const matchesSearch = t.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <DefaultScreenLayout
      title="Transactions"
      subtitle="View your transaction history"
      stats={
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={[typography.bodySmall, { color: theme.text.secondary }]}>
              Total
            </Text>
            <Text style={[typography.h4, { color: theme.state.success.text }]}>
              +₦182,500
            </Text>
          </View>

          <View style={{ width: 1, height: 40, backgroundColor: theme.border.default }} />

          <View style={{ alignItems: 'center' }}>
            <Text style={[typography.bodySmall, { color: theme.text.secondary }]}>
              Spent
            </Text>
            <Text style={[typography.h4, { color: theme.state.error.text }]}>
              -₦58,500
            </Text>
          </View>
        </View>
      }
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing.xxl,
          marginTop: spacing.xxl,
          paddingBottom: spacing.xxxxl,
        }}
      >
        {/* 🔍 SEARCH */}
        <SearchBar
          value={search}
          onChangeText={setSearch}
          onClear={() => setSearch('')}
        />

        {/* FILTERS */}
        <View
          style={{
            marginTop: spacing.lg,
            flexDirection: 'row',
            gap: spacing.lg,
          }}
        >
          <FilterCard label="All" active={filter === 'all'} onPress={() => setFilter('all')} />
          <FilterCard label="Received" active={filter === 'received'} onPress={() => setFilter('received')} />
          <FilterCard label="Sent" active={filter === 'sent'} onPress={() => setFilter('sent')} />
          <FilterCard label="Failed" active={filter === 'failed'} onPress={() => setFilter('failed')} />
        </View>

        {/* HEADER */}
        <View
          style={{
            marginTop: spacing.xxxl,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={typography.h4}>All Transactions</Text>
          <Text style={typography.bodySmall}>
            {filteredTransactions.length} Transactions
          </Text>
        </View>

        {/* LIST */}
        <View style={{ marginTop: spacing.xxl }}>
          <View style={{ gap: spacing.lg }}>
            {filteredTransactions.map((item) => {
              const isReceived = item.type === 'received';
              const isFailed = item.status === 'failed';

              return (
                <SectionUICard key={item.id}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    
                    {/* ICON */}
                    <View style={{ justifyContent: 'center' }}>
                      <View
                        style={{
                          backgroundColor: isFailed
                            ? theme.state.error.background
                            : isReceived
                            ? theme.state.success.background
                            : theme.icon.withdraw.background,
                          padding: spacing.sm,
                          borderRadius: 999,
                        }}
                      >
                        <Ionicons
                          name={
                            isReceived
                              ? 'arrow-down-circle-outline'
                              : 'arrow-up-circle-outline'
                          }
                          color={
                            isFailed
                              ? theme.state.error.text
                              : isReceived
                              ? theme.state.success.text
                              : theme.icon.withdraw.icon
                          }
                          size={spacing.xxl}
                        />
                      </View>
                    </View>

                    {/* CONTENT */}
                    <View style={{ width: 142, gap: spacing.sm }}>
                      <Text style={typography.bodyLargeSemiBold}>
                        {item.title}
                      </Text>
                      <Text style={typography.bodySmall}>{item.date}</Text>
                    </View>

                    {/* AMOUNT */}
                    <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                      <Text
                        style={[
                          typography.h4,
                          {
                            color: isFailed
                              ? theme.state.error.text
                              : isReceived
                              ? theme.state.success.text
                              : theme.text.primary,
                          },
                        ]}
                      >
                        {item.amount > 0 ? '+' : '-'}₦{Math.abs(item.amount).toLocaleString()}
                      </Text>

                      <UICardStatus status={item.status} />
                    </View>
                  </View>
                </SectionUICard>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </DefaultScreenLayout>
  );
}