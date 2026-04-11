// components/Transactions/TransactionsList.js

import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { spacing, theme } from '../../theme';
import TransactionItem from './TransactionItem';
import { fetchTransactions } from './Transaction.data';

export default function TransactionsList({ limit }) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={{ marginTop: spacing.xxl }}>
        <ActivityIndicator color={theme.text.primary} />
      </View>
    );
  }

  const displayData = limit ? transactions.slice(0, limit) : transactions;

  return (
    <View style={{ gap: spacing.lg }}>
      {displayData.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </View>
  );
}
