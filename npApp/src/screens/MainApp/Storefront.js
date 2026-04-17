import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';

import MainScreen from '../../components/Layout/Screen';
import { theme, typography, spacing } from '../../theme';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import SectionUICard from '../../components/SectionUI';

export default function StorefrontScreen() {
  const insets = useSafeAreaInsets();

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
            My Storefront
          </Text>
          <Text style={[typography.bodyMedium, { color: theme.text.inverse }]}>
            Manage your products and inventory
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
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.text.secondary },
                  ]}
                >
                  Total Products
                </Text>
                <Text style={[typography.h4, { color: theme.text.primary }]}>
                  4
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
          {/* CARDS / EMPTY STATE */}
          <View style={{ marginTop: spacing.xl, gap: spacing.lg }}>
            <Text style={[typography.h4, { color: theme.text.heading }]}>
              Account Settings
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              gap: spacing.lg,
              marginTop: spacing.xl,
            }}
          >
            <SectionUICard>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // alignItems: 'center',
                }}
              >
                <View>
                  <Image
                    source={require('../../assets/images/premiumheadphones.png')}
                    resizeMode='contan'
                    // style={{ width: 50, height: 50 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 169,
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      gap: spacing.xs,
                    }}
                  >
                    <Text
                      style={[
                        typography.bodyMediumSemiBold,
                        { color: theme.text.primary },
                      ]}
                    >
                      Premium Headphones
                    </Text>
                    <Text
                      style={[
                        typography.bodySmall,
                        { color: theme.text.secondary },
                      ]}
                    >
                      Wireless noise cancelling headphones
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={[typography.h3, { color: theme.text.primary }]}
                    >
                      ₦45,000
                    </Text>
                    <Text
                      style={[
                        typography.bodySmall,
                        {
                          color: theme.text.secondary,
                          alignItems: 'center',
                        },
                      ]}
                    >
                      Stock:12
                    </Text>
                  </View>
                </View>
                <View>
                  <Pressable
                    // onPress={() => handleShare(item.link)}
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
            </SectionUICard>
            <SectionUICard>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // alignItems: 'center',
                }}
              >
                <View>
                  <Image
                    source={require('../../assets/images/smartwatch.png')}
                    resizeMode='contan'
                    // style={{ width: 50, height: 50 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 169,
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      gap: spacing.xs,
                    }}
                  >
                    <Text
                      style={[
                        typography.bodyMediumSemiBold,
                        { color: theme.text.primary },
                      ]}
                    >
                      Smart Watch
                    </Text>
                    <Text
                      style={[
                        typography.bodySmall,
                        { color: theme.text.secondary },
                      ]}
                    >
                      Fitness track with heart rate monitor
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={[typography.h3, { color: theme.text.primary }]}
                    >
                      ₦85,000
                    </Text>
                    <Text
                      style={[
                        typography.bodySmall,
                        {
                          color: theme.text.secondary,
                          alignItems: 'center',
                        },
                      ]}
                    >
                      Stock:12
                    </Text>
                  </View>
                </View>
                <View>
                  <Pressable
                    // onPress={() => handleShare(item.link)}
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
            </SectionUICard>
            <SectionUICard>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // alignItems: 'center',
                }}
              >
                <View>
                  <Image
                    source={require('../../assets/images/phonecase.png')}
                    resizeMode='contan'
                    // style={{ width: 50, height: 50 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 169,
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      gap: spacing.xs,
                    }}
                  >
                    <Text
                      style={[
                        typography.bodyMediumSemiBold,
                        { color: theme.text.primary },
                      ]}
                    >
                      Phone Case
                    </Text>
                    <Text
                      style={[
                        typography.bodySmall,
                        { color: theme.text.secondary },
                      ]}
                    >
                      Protective case for iPhone 14
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={[typography.h3, { color: theme.text.primary }]}
                    >
                      ₦5,500
                    </Text>
                    <Text
                      style={[
                        typography.bodySmall,
                        {
                          color: theme.text.secondary,
                          alignItems: 'center',
                        },
                      ]}
                    >
                      Stock:12
                    </Text>
                  </View>
                </View>
                <View>
                  <Pressable
                    // onPress={() => handleShare(item.link)}
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
            </SectionUICard>
            <SectionUICard>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // alignItems: 'center',
                }}
              >
                <View>
                  <Image
                    source={require('../../assets/images/laptopstand.png')}
                    resizeMode='contan'
                    // style={{ width: 50, height: 50 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    width: 169,
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      gap: spacing.xs,
                    }}
                  >
                    <Text
                      style={[
                        typography.bodyMediumSemiBold,
                        { color: theme.text.primary },
                      ]}
                    >
                      Laptop Stand
                    </Text>
                    <Text
                      style={[
                        typography.bodySmall,
                        { color: theme.text.secondary },
                      ]}
                    >
                      Adjustable aluminium laptop stand
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={[typography.h3, { color: theme.text.primary }]}
                    >
                      ₦15,000
                    </Text>
                    <Text
                      style={[
                        typography.bodySmall,
                        {
                          color: theme.text.secondary,
                          alignItems: 'center',
                        },
                      ]}
                    >
                      Stock:12
                    </Text>
                  </View>
                </View>
                <View>
                  <Pressable
                    // onPress={() => handleShare(item.link)}
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
            </SectionUICard>
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <Pressable
        // onPress={() => navigation.navigate('CreatePaymentLink')}
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
