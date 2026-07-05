import { Tabs } from 'expo-router';
import { CalendarDays, Home, LineChart, Sparkles, UserRound } from 'lucide-react-native';
import { colors } from '@/lib/theme';

export default function TabLayout() {
  return <Tabs screenOptions={{
    headerShown: false, tabBarActiveTintColor: colors.rose, tabBarInactiveTintColor: '#B2A3A8',
    tabBarStyle: { height: 82, paddingTop: 9, paddingBottom: 17, borderTopWidth: 0, backgroundColor: '#FFFCF9' },
    tabBarLabelStyle: { fontFamily: 'DMSans_600SemiBold', fontSize: 10 },
  }}>
    <Tabs.Screen name="index" options={{ title: 'Today', tabBarIcon: ({ color }) => <Home size={22} color={color} /> }} />
    <Tabs.Screen name="journey" options={{ title: 'Journey', tabBarIcon: ({ color }) => <CalendarDays size={22} color={color} /> }} />
    <Tabs.Screen name="check" options={{ title: '', tabBarButton: () => null }} />
    <Tabs.Screen name="insights" options={{ title: 'Insights', tabBarIcon: ({ color }) => <LineChart size={22} color={color} /> }} />
    <Tabs.Screen name="profile" options={{ title: 'For You', tabBarIcon: ({ color }) => <UserRound size={22} color={color} /> }} />
  </Tabs>;
}
