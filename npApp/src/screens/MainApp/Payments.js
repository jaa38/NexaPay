import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Platform,
  ToastAndroid,
  Alert,
  Share,
  FlatList,
} from 'react-native';

import DefaultScreenLayout from '../../components/Layout/DefaultScreenLayout';

import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../../components/SectionUI';
import FilterCard from '../../components/UICard/FilterCard';
import UICardStatus from '../../components/UICard/UICardStatus';

import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { usePayments } from '../../context/PaymentContext';
import SwipeablePaymentCard from '../../components/SwipeablePaymentCard';

export default function PaymentsScreen({ navigation }) {
  const [selected, setSelected] = useState('All');

  const filters = ['All', 'Paid', 'Pending', 'Failed'];

  const { payments, deletePayment } = usePayments();

  // COPY
  const handleCopy = async (link) => {
    await Clipboard.setStringAsync(link);

    if (Platform.OS === 'android') {
      ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
    } else {
      Alert.alert('Copied', 'Copied to clipboard');
    }
  };

  // SHARE
  const handleShare = async (link) => {
    try {
      await Share.share({
        message: `Pay me here: ${link}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // FILTER
  const filteredPayments =
    selected === 'All'
      ? payments
      : payments.filter((item) => {
          if (selected === 'Paid') return item.status === 'success';
          if (selected === 'Pending') return item.status === 'pending';
          if (selected === 'Failed') return item.status === 'failed';
          return false;
        });

  const formatCurrency = (amount) => `₦${amount.toLocaleString()}`;

  // ✅ Render Item
  const renderItem = ({ item }) => (
    <SwipeablePaymentCard
      onDelete={() => {
        Alert.alert(
          'Delete Payment',
          'Are you sure you want to delete this payment link?',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => deletePayment(item.id),
            },
          ],
        );
      }}
    >
      <SectionUICard>
        {/* TOP */}
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

            <Text
              style={[typography.bodySmall, { color: theme.text.secondary }]}
            >
              {item.date}
            </Text>
          </View>

          {/* ACTIONS */}
          <View style={{ flexDirection: 'row', gap: spacing.md }}>
            <Pressable
              onPress={() => handleCopy(item.link)}
              style={{
                backgroundColor: theme.icon.copy.background,
                padding: spacing.md,
                borderRadius: 999,
              }}
            >
              <Ionicons
                name='copy-outline'
                size={20}
                color={theme.icon.copy.icon}
              />
            </Pressable>

            <Pressable
              onPress={() => handleShare(item.link)}
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
        </View>

        {/* BOTTOM */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: spacing.lg,
          }}
        >
          <Text style={[typography.h3, { color: theme.text.primary }]}>
            {formatCurrency(item.amount)}
          </Text>

          <UICardStatus status={item.status} />
        </View>
      </SectionUICard>
    </SwipeablePaymentCard>
  );

  return (
    <DefaultScreenLayout
      title='Payment Link'
      subtitle='Generate your payment link'
      stats={
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Stat label='Total' value={payments.length} />
          <Divider />
          <Stat
            label='Paid'
            value={payments.filter((p) => p.status === 'success').length}
          />
          <Divider />
          <Stat
            label='Not Paid'
            value={payments.filter((p) => p.status === 'pending').length}
          />
        </View>
      }
    >
      {/* ✅ FlatList replaces ScrollView */}
      <FlatList
        data={filteredPayments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: spacing.xxl,
          paddingTop: spacing.xl,
          paddingBottom: 120,
          gap: spacing.lg,
        }}
        ListHeaderComponent={
          <>
            {/* FILTERS */}
            <View style={{ flexDirection: 'row', gap: spacing.sm }}>
              {filters.map((item) => (
                <FilterCard
                  key={item}
                  label={item}
                  active={selected === item}
                  onPress={() => setSelected(item)}
                />
              ))}
            </View>
          </>
        }
        ListEmptyComponent={
          <View
            style={{
              marginTop: spacing.xxxl,
              alignItems: 'center',
            }}
          >
            <Text
              style={[
                typography.h4,
                { color: theme.text.primary, marginBottom: spacing.sm },
              ]}
            >
              No payment links yet
            </Text>

            <Text
              style={[
                typography.bodySmall,
                {
                  color: theme.text.secondary,
                  textAlign: 'center',
                },
              ]}
            >
              Create a payment link to get started
            </Text>
          </View>
        }
      />

      {/* FAB */}
      <Pressable
        onPress={() => navigation.navigate('CreatePaymentLink')}
        style={({ pressed }) => [
          {
            position: 'absolute',
            bottom: 24,
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

// helpers
const Stat = ({ label, value }) => (
  <View style={{ alignItems: 'center' }}>
    <Text style={[typography.h4, { color: theme.text.primary }]}>{value}</Text>
    <Text style={[typography.bodySmall, { color: theme.text.secondary }]}>
      {label}
    </Text>
  </View>
);

const Divider = () => (
  <View
    style={{
      width: 1,
      height: 40,
      backgroundColor: theme.border.default,
    }}
  />
);
