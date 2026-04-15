import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Platform,
  ToastAndroid,
  Alert,
  Share,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../../components/SectionUI';
import FilterCard from '../../components/UICard/FilterCard';
import UICardStatus from '../../components/UICard/UICardStatus';

import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { usePayments } from '../../context/PaymentContext';
import SwipeablePaymentCard from '../../components/SwipeablePaymentCard';

export default function PaymentsScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState('All');

  const filters = ['All', 'Paid', 'Pending', 'Failed'];

  // ✅ Get payments FIRST
  const { payments, deletePayment } = usePayments();

  // 📋 COPY
  const handleCopy = async (link) => {
    await Clipboard.setStringAsync(link);

    if (Platform.OS === 'android') {
      ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
    } else {
      Alert.alert('Copied', 'Copied to clipboard');
    }
  };

  // 📤 SHARE
  const handleShare = async (link) => {
    try {
      await Share.share({
        message: `Pay me here: ${link}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ FILTER LOGIC (safe)
  const filteredPayments =
    selected === 'All'
      ? payments
      : payments.filter((item) => {
          if (selected === 'Paid') return item.status === 'success';
          if (selected === 'Pending') return item.status === 'pending';
          if (selected === 'Failed') return item.status === 'failed';
          return false;
        });

  // 💰 FORMAT
  const formatCurrency = (amount) => `₦${amount.toLocaleString()}`;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
      {/* STATUS BAR */}
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />

      {/* STICKY STATUS BAR BACKGROUND */}
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

      {/* SCROLLABLE CONTENT */}
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
            Payment Link
          </Text>
        </View>

        {/* STATS CARD (still static for now) */}
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
                  {payments.length}
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
                  {payments.filter((p) => p.status === 'success').length}
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
                  {payments.filter((p) => p.status === 'pending').length}
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

        {/* BODY */}
        <View style={{ padding: spacing.xxl }}>
          {/* FILTERS */}
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

          {/* CARDS / EMPTY STATE */}
          <View style={{ marginTop: spacing.xl, gap: spacing.lg }}>
            {filteredPayments?.length === 0 ? (
              <View
                style={{
                  marginTop: spacing.xxxl,
                  alignItems: 'center',
                  justifyContent: 'center',
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

                {/* <Pressable
                  onPress={() => navigation.navigate('CreatePaymentLink')}
                  style={{ marginTop: spacing.lg }}
                >
                  <Text style={{ color: theme.text.brand }}>
                    Create Payment Link
                  </Text>
                </Pressable> */}
              </View>
            ) : (
              filteredPayments.map((item) => (
                <SwipeablePaymentCard
                  key={item.id}
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
                  <SectionUICard key={item.id}>
                    {/* TOP ROW */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
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
                          {item.title}
                        </Text>

                        <Text
                          style={[
                            typography.bodySmall,
                            { color: theme.text.secondary },
                          ]}
                        >
                          {item.date}
                        </Text>
                      </View>

                      {/* ACTIONS */}
                      <View style={{ flexDirection: 'row', gap: spacing.md }}>
                        {/* COPY */}
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

                        {/* SHARE */}
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

                    {/* BOTTOM ROW */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: spacing.lg,
                      }}
                    >
                      <Text
                        style={[typography.h3, { color: theme.text.primary }]}
                      >
                        {formatCurrency(item.amount)}
                      </Text>

                      <UICardStatus status={item.status} />
                    </View>
                  </SectionUICard>
                </SwipeablePaymentCard>
              ))
            )}
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <Pressable
        onPress={() => navigation.navigate('CreatePaymentLink')}
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
