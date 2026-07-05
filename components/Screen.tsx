import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/lib/theme';

export function Screen({ children, scroll = true }: { children: React.ReactNode; scroll?: boolean }) {
  const content = <View style={styles.inner}>{children}</View>;
  return <LinearGradient colors={['#FFF1F7', '#FFF8F3', '#F7F0FF']} style={styles.safe}>
    <SafeAreaView style={styles.safe} edges={['top']}>
      {scroll ? <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>{content}</ScrollView> : content}
    </SafeAreaView>
  </LinearGradient>;
}

const styles = StyleSheet.create({
  safe: { flex: 1 }, scroll: { flexGrow: 1, paddingBottom: 28 },
  inner: { width: '100%', maxWidth: 620, alignSelf: 'center', paddingHorizontal: 20 },
});
