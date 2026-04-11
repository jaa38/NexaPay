import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { theme } from "../theme";
import { theme, typography } from '../theme';

// Icons
import { Home, Send, Store, ShoppingBag, Receipt } from 'lucide-react-native';

// Screens
import HomeScreen from '../screens/MainApp/Home';
import PaymentsScreen from '../screens/MainApp/Payments';
import StorefrontScreen from '../screens/MainApp/Storefront';
import OrdersScreen from '../screens/MainApp/Orders';
import TransactionsScreen from '../screens/MainApp/Transactions';

const Tab = createBottomTabNavigator();
const ICON_SIZE = 24;

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        /**
         * 🧱 Tab Bar Container
         */
        tabBarStyle: {
          backgroundColor: theme.background.surface,
          borderTopColor: theme.border.default,
          height: 70,
          paddingBottom: 10,
          paddingTop: 6,
        },

        /**
         * 🎨 Active / Inactive Colors
         */
        tabBarActiveTintColor: theme.action.primary.background,
        tabBarInactiveTintColor: theme.text.muted,

        /**
         * 🔤 Custom Label (uses typography system)
         */
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

        /**
         * 🧭 Icons
         */
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

          return <Icon size={ICON_SIZE} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />

      <Tab.Screen name='Payments' component={PaymentsScreen} />

      <Tab.Screen name='Storefront' component={StorefrontScreen} />

      <Tab.Screen name='Orders' component={OrdersScreen} />

      <Tab.Screen name='Transactions' component={TransactionsScreen} />
    </Tab.Navigator>
  );
}
