import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, shadow } from '@/lib/theme';

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <Text style={styles.eyebrow}>{children}</Text>;
}

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle | ViewStyle[] }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function PrimaryButton({ label, onPress, icon }: { label: string; onPress: () => void; icon?: React.ReactNode }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.buttonWrap, pressed && { opacity: .88, transform: [{ scale: .99 }] }]}>
    <LinearGradient colors={['#E88DA8', '#D86E8C']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.button}>
      {icon}{icon ? <View style={{ width: 9 }} /> : null}<Text style={styles.buttonText}>{label}</Text>
    </LinearGradient>
  </Pressable>;
}

const styles = StyleSheet.create({
  eyebrow: { fontFamily: 'DMSans_700Bold', color: colors.gold, fontSize: 11, letterSpacing: 1.8 },
  card: { backgroundColor: colors.paper, borderRadius: 24, padding: 20, borderWidth: 1, borderColor: '#F8EFEC', ...shadow },
  buttonWrap: { borderRadius: 18, ...shadow },
  button: { height: 58, borderRadius: 18, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
  buttonText: { color: '#fff', fontFamily: 'DMSans_700Bold', fontSize: 16 },
});
