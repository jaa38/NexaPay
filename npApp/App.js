import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import Button from './src/components/Buttons';
import Input from './src/components/Input';
import Card from './src/components/Card';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 24 }}>
        Open up App.js to start working on your app!
      </Text>
      <Button
        title='Test Button'
        variant='primary'
        onPress={() => console.log('Cancel')}
      />
      <Input
        label='Password'
        placeholder='Enter password'
        helperText='Must be at least 8 characters'
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
