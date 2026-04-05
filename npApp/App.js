import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import Screen from './src/components/Layout/Screen';
import Button from './src/components/Button';
import Input from './src/components/Input';
import Card from './src/components/Card';

import { typography, spacing } from './src/theme';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      {/* <Screen>
        <Text style={typography.h2}>NexaPay UI Test</Text>

        <Card style={{ marginTop: spacing.lg }}>
          <Text style={typography.bodyMedium}>
            This is a test card
          </Text>
        </Card>

        <Input
          label="Password"
          placeholder="Enter password"
          helperText="Must be at least 8 characters"
          style={{ marginTop: spacing.lg }}
        />

        <Button
          title="Test Button"
          variant="primary"
          onPress={() => console.log("Pressed")}
          style={{ marginTop: spacing.lg }}
        />

        <Button
          title="Secondary"
          variant="secondary"
          style={{ marginTop: spacing.md }}
        />

        <Button
          title="Ghost"
          variant="ghost"
          style={{ marginTop: spacing.md }}
        />

        <StatusBar style="dark" />
      </Screen> */}
      <AppNavigator />
    </SafeAreaProvider>
  );
}
