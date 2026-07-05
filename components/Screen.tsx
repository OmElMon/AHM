import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/lib/theme';

export function Screen({ children, scroll = true }: { children: React.ReactNode; scroll?: boolean }) {
  const content = <View style={styles.inner}>{children}</View>;
  return <SafeAreaView style={styles.safe} edges={['top']}>
    {scroll ? <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>{content}</ScrollView> : content}
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.cream }, scroll: { flexGrow: 1, paddingBottom: 28 },
  inner: { width: '100%', maxWidth: 620, alignSelf: 'center', paddingHorizontal: 20 },
});
