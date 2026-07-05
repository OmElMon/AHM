import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '@/lib/theme';

export function HappinessRing({ score = 84 }: { score?: number }) {
  const size = 208, stroke = 14, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return <View style={styles.wrap}>
    <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
      <Defs><LinearGradient id="ring" x1="0" y1="0" x2="1" y2="1"><Stop offset="0" stopColor="#FF4F9A"/><Stop offset=".55" stopColor="#F02D7D"/><Stop offset="1" stopColor="#9D3CF3"/></LinearGradient></Defs>
      <Circle cx={size/2} cy={size/2} r={r} stroke="#FFDCE9" strokeWidth={stroke} fill="none" />
      <Circle cx={size/2} cy={size/2} r={r} stroke="url(#ring)" strokeWidth={stroke} fill="none" strokeLinecap="round"
        strokeDasharray={`${c} ${c}`} strokeDashoffset={c * (1 - score/100)} transform={`rotate(-90 ${size/2} ${size/2})`} />
    </Svg>
    <Text style={styles.spark}>✦</Text><View style={styles.scoreRow}><Text style={styles.score}>{score}</Text><Text style={styles.percent}>%</Text></View>
    <Text style={styles.label}>RADIANT</Text>
  </View>;
}

const styles = StyleSheet.create({
  wrap: { width: 208, height: 208, alignItems: 'center', justifyContent: 'center' },
  spark: { color: colors.gold, fontSize: 16, marginBottom: 0 }, scoreRow: { flexDirection: 'row', alignItems: 'flex-start' },
  score: { fontFamily: 'BodoniModa_700Bold', fontSize: 58, lineHeight: 68, color: colors.ink },
  percent: { fontFamily: 'DMSans_600SemiBold', fontSize: 18, color: colors.rose, marginTop: 12 },
  label: { fontFamily: 'DMSans_700Bold', fontSize: 10, color: colors.rose, letterSpacing: 2.4 },
});
