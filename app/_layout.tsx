import '../global.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts as useDMFonts, DMSans_400Regular, DMSans_500Medium, DMSans_600SemiBold, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { useFonts as useSerifFonts, BodoniModa_600SemiBold, BodoniModa_700Bold, BodoniModa_700Bold_Italic } from '@expo-google-fonts/bodoni-moda';

const client = new QueryClient();

export default function RootLayout() {
  const [dm] = useDMFonts({ DMSans_400Regular, DMSans_500Medium, DMSans_600SemiBold, DMSans_700Bold });
  const [serif] = useSerifFonts({ BodoniModa_600SemiBold, BodoniModa_700Bold, BodoniModa_700Bold_Italic });
  if (!dm || !serif) return null;
  return <SafeAreaProvider><QueryClientProvider client={client}>
    <StatusBar style="dark" />
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFF4F8' } }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="check-in" options={{ presentation: 'modal' }} />
      <Stack.Screen name="emergency" options={{ presentation: 'modal' }} />
    </Stack>
  </QueryClientProvider></SafeAreaProvider>;
}
