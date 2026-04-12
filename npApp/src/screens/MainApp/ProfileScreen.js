import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { theme, typography, spacing } from '../../theme';
import SectionUICard from '../../components/SectionUI';
import { useAuth } from '../../context/AuthContext';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { logout } = useAuth(); // ✅ get logout

  // 🔐 Handle logout (with confirmation)
  const handleLogout = () => {
    Alert.alert('Log out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log out',
        style: 'destructive',
        onPress: logout,
      },
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
      {/* ✅ STATUS BAR */}
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />

      {/* 🔥 STICKY STATUS BAR BACKGROUND */}
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

      {/* ✅ SCROLLABLE SCREEN */}
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: spacing.xxl,
        }}
      >
        {/* 🔵 HEADER */}
        <View
          style={{
            backgroundColor: theme.background.statusbar,
            paddingTop: insets.top + spacing.xl,
            paddingBottom: spacing.xxxxl + insets.bottom,
            paddingHorizontal: spacing.xxl,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: spacing.lg,
            }}
          >
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

            <Text style={[typography.h2, { color: theme.text.inverse }]}>
              Jeremiah Akinsowon
            </Text>
          </View>
        </View>

        {/* 📊 STATS CARD */}
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
                  248
                </Text>
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Transactions
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
                  12
                </Text>
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Products
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
                  4.8
                </Text>
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Rating
                </Text>
              </View>
            </View>
          </SectionUICard>
        </View>

        {/* ⚪ BODY */}
        <View style={{ padding: spacing.xxl }}>
          <Text style={[typography.h4, { color: theme.text.heading }]}>
            Account Settings
          </Text>

          <View style={{ marginTop: spacing.xxl, gap: spacing.lg }}>
            {[
              {
                title: 'Personal Information',
                subtitle: 'Name, email, phone number',
                icon: 'person-outline',
                bg: theme.icon.personsalInfo.background,
                color: theme.icon.personsalInfo.icon,
              },
              {
                title: 'Business Information',
                subtitle: 'Business name, address, CAC',
                icon: 'business-outline',
                bg: theme.icon.businessInfo.background,
                color: theme.icon.businessInfo.icon,
              },
              {
                title: 'Bank Details',
                subtitle: 'Manage withdrawal accounts',
                icon: 'card-outline',
                bg: theme.icon.bankDetails.background,
                color: theme.icon.bankDetails.icon,
              },
              {
                title: 'Notifications',
                subtitle: 'Push, email, SMS preferences',
                icon: 'notifications-outline',
                bg: theme.icon.notifications.background,
                color: theme.icon.notifications.icon,
              },
              {
                title: 'Security',
                subtitle: 'Password, 2FA, PIN',
                icon: 'shield-outline',
                bg: theme.icon.security.background,
                color: theme.icon.security.icon,
              },
              {
                title: 'Help & Support',
                subtitle: 'FAQs, contact us',
                icon: 'help-circle-outline',
                bg: theme.icon.helpSupport.background,
                color: theme.icon.helpSupport.icon,
              },
              {
                title: 'App Settings',
                subtitle: 'Language, theme, preferences',
                icon: 'settings-outline',
                bg: theme.icon.settings.background,
                color: theme.icon.settings.icon,
              },
              {
                title: 'Log out',
                subtitle: 'Sign out of your account',
                icon: 'log-out-outline',
                bg: theme.icon.logout.background,
                color: theme.icon.logout.icon,
                danger: true,
                isLogout: true,
              },
            ].map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  if (item.isLogout) {
                    handleLogout(); // ✅ trigger logout
                  }
                }}
              >
                <SectionUICard>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* LEFT */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: spacing.lg,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: item.bg,
                          padding: spacing.md,
                          borderRadius: 999,
                        }}
                      >
                        <Ionicons
                          name={item.icon}
                          size={20}
                          color={item.color}
                        />
                      </View>

                      <View>
                        <Text
                          style={[
                            typography.bodyLargeSemiBold,
                            {
                              color: item.danger
                                ? theme.state.error.text
                                : theme.text.heading,
                            },
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
                          {item.subtitle}
                        </Text>
                      </View>
                    </View>

                    {/* RIGHT */}
                    <Ionicons
                      name='chevron-forward-outline'
                      size={24}
                      color={theme.text.muted}
                    />
                  </View>
                </SectionUICard>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
