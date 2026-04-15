import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../../components/SectionUI';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { usePayments } from '../../context/PaymentContext';

export default function CreatePaymentLinkScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  // const [amount, setAmount] = useState('');

  const [form, setForm] = useState({
    amount: '',
    description: '',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const { amount, description } = form;

    // ❌ Validation
    if (!amount || Number(amount) <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid amount');
      return;
    }

    if (!description.trim()) {
      Alert.alert('Missing Description', 'Please enter a description');
      return;
    }

    // ✅ Create new payment object
    const newPayment = {
      id: Date.now().toString(),
      title: description,
      date: new Date().toLocaleDateString(),
      amount: Number(amount),
      status: 'pending',
    };

    addPayment(newPayment);

    // ✅ Success feedback
    Alert.alert('Success', 'Payment link created');

    // ✅ Reset form
    setForm({
      amount: '',
      description: '',
    });

    // ✅ Go back (optional)
    navigation.goBack();
  };

  const isValid =
    form.amount && Number(form.amount) > 0 && form.description.trim();

  const { addPayment } = usePayments();
  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />

      {/* Sticky status bar bg */}
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
            paddingBottom: spacing.xs,
            paddingHorizontal: spacing.lg,
          }}
        >
          <View style={{ flexDirection: 'row', gap: spacing.md }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={{ marginBottom: spacing.xxl }}
                source={require('../../assets/images/arrow-left.png')}
              />
            </Pressable>

            <Text
              style={[
                typography.h2,
                { alignItems: 'center', color: theme.text.inverse },
              ]}
            >
              Create Payment Link
            </Text>
          </View>
        </View>

        {/* BODY */}
        <View style={{ padding: spacing.xxl }}>
          <View style={{ flexDirection: 'column', gap: spacing.lg }}>
            <SectionUICard>
              <Input
                label='Amount'
                placeholder='0.00'
                value={form.amount}
                onChangeText={(val) => handleChange('amount', val)}
                prefix='₦'
                keyboardType='numeric'
              />
            </SectionUICard>
            <SectionUICard>
              <Input
                label='Description'
                placeholder='Enter payment description...'
                value={form.description}
                onChangeText={(val) => handleChange('description', val)}
                multiline
              />
            </SectionUICard>
          </View>
          <Button
            title='Generate Link'
            style={{ marginTop: spacing.xxl }}
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </View>
      </ScrollView>
    </View>
  );
}
