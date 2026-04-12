import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme, typography } from '../theme';

// Icons
import { Home, Send, Store, ShoppingBag, Receipt } from 'lucide-react-native';

// Screens
import HomeScreen from '../screens/MainApp/Home';
import PaymentsScreen from '../screens/MainApp/Payments';
import StorefrontScreen from '../screens/MainApp/Storefront';
import OrdersScreen from '../screens/MainApp/Orders';
import TransactionsScreen from '../screens/MainApp/Transactions';
import ProfileScreen from '../screens/MainApp/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ICON_SIZE = 24;

// ✅ Home Stack
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeMain' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: theme.background.surface,
          borderTopColor: theme.border.default,
          height: 70,
          paddingBottom: 10,
          paddingTop: 6,
        },

        tabBarActiveTintColor: theme.action.primary.background,
        tabBarInactiveTintColor: theme.text.muted,

        tabBarLabel: ({ color }) => {
          let label;

          switch (route.name) {
            case 'Home':
              label = 'Home';
              break;
            case 'Payments':
              label = 'Payments';
              break;
            case 'Storefront':
              label = 'Storefront';
              break;
            case 'Orders':
              label = 'Orders';
              break;
            case 'Transactions':
              label = 'History';
              break;
          }

          return <Text style={[typography.label, { color }]}>{label}</Text>;
        },

        tabBarIcon: ({ color }) => {
          let Icon;

          switch (route.name) {
            case 'Home':
              Icon = Home;
              break;
            case 'Payments':
              Icon = Send;
              break;
            case 'Storefront':
              Icon = Store;
              break;
            case 'Orders':
              Icon = ShoppingBag;
              break;
            case 'Transactions':
              Icon = Receipt;
              break;
          }

          return <Icon size={24} color={color} />;
        },
      })}
    >
      {/* ✅ FIXED */}
      <Tab.Screen
        name='Home'
        component={HomeStack}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            navigation.navigate('Home', {
              screen: 'HomeMain',
            });
          },
        })}
      />

      <Tab.Screen name='Payments' component={PaymentsScreen} />
      <Tab.Screen name='Storefront' component={StorefrontScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
      <Tab.Screen name='Transactions' component={TransactionsScreen} />
    </Tab.Navigator>
  );
}
