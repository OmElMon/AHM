import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, shadow } from '@/lib/theme';

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <Text style={styles.eyebrow}>✦ {children}</Text>;
}

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle | ViewStyle[] }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function PrimaryButton({ label, onPress, icon }: { label: string; onPress: () => void; icon?: React.ReactNode }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.buttonWrap, pressed && { opacity: .88, transform: [{ scale: .99 }] }]}>
    <LinearGradient colors={['#FF4F9A', '#F02073', '#9D3CF3']} locations={[0, .58, 1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.button}>
      {icon}{icon ? <View style={{ width: 9 }} /> : null}<Text style={styles.buttonText}>{label}</Text>
    </LinearGradient>
  </Pressable>;
}

const styles = StyleSheet.create({
  eyebrow: { fontFamily: 'DMSans_700Bold', color: colors.rose, fontSize: 10, letterSpacing: 1.7 },
  card: { backgroundColor: 'rgba(255,255,255,.94)', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: '#FFD6E6', ...shadow },
  buttonWrap: { borderRadius: 18, ...shadow },
  button: { height: 58, borderRadius: 18, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
  buttonText: { color: '#fff', fontFamily: 'DMSans_700Bold', fontSize: 16 },
});
