import '../global.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const client = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    DMSans_400Regular: require('../assets/fonts/DMSans_400Regular.ttf'),
    DMSans_500Medium: require('../assets/fonts/DMSans_500Medium.ttf'),
    DMSans_600SemiBold: require('../assets/fonts/DMSans_600SemiBold.ttf'),
    DMSans_700Bold: require('../assets/fonts/DMSans_700Bold.ttf'),
    BodoniModa_600SemiBold: require('../assets/fonts/BodoniModa_600SemiBold.ttf'),
    BodoniModa_700Bold: require('../assets/fonts/BodoniModa_700Bold.ttf'),
    BodoniModa_700Bold_Italic: require('../assets/fonts/BodoniModa_700Bold_Italic.ttf'),
  });
  if (!fontsLoaded && !fontError) return null;
  return <SafeAreaProvider><QueryClientProvider client={client}>
    <StatusBar style="dark" />
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFF4F8' } }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="check-in" options={{ presentation: 'modal' }} />
      <Stack.Screen name="emergency" options={{ presentation: 'modal' }} />
    </Stack>
  </QueryClientProvider></SafeAreaProvider>;
}
