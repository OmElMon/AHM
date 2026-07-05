import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Bell, BookHeart, ChevronRight, Flame, HeartHandshake, Sparkles } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Screen } from '@/components/Screen';
import { Card, Eyebrow, PrimaryButton } from '@/components/ui';
import { HappinessRing } from '@/components/HappinessRing';
import { colors, shadow } from '@/lib/theme';
import { useHappinessStore } from '@/lib/store';

export default function Today() {
  const { name, streak, entries } = useHappinessStore();
  const score = entries.at(-1)?.score ?? 84;
  const todayDone = entries.at(-1)?.date === new Date().toISOString().slice(0, 10);
  return <Screen>
    <View style={styles.header}><View><Eyebrow>SUNDAY, JULY 5</Eyebrow><Text style={styles.hello}>Good morning, {name} <Text style={{ fontSize: 24 }}>🌸</Text></Text></View><Pressable style={styles.bell}><Bell size={20} color={colors.ink}/><View style={styles.dot}/></Pressable></View>
    <LinearGradient colors={['#FFFDFB', '#FCEAEC']} style={styles.hero}>
      <View style={styles.heroTop}><View><Eyebrow>TODAY'S HAPPINESS</Eyebrow><Text style={styles.heroTitle}>{todayDone ? 'You checked in.' : 'Your glow awaits.'}</Text></View><View style={styles.streak}><Flame size={15} color="#E88B5E" fill="#E88B5E"/><Text style={styles.streakText}>{streak} days</Text></View></View>
      <View style={styles.ring}><HappinessRing score={score}/></View>
      <Text style={styles.note}>{todayDone ? 'A softer day still counts. You showed up for yourself.' : 'Take a quiet minute to notice how you really feel.'}</Text>
      <PrimaryButton label={todayDone ? 'Check in again' : "Start today's check"} onPress={() => router.push('/check-in')} icon={<Sparkles color="#fff" size={18}/>}/>
    </LinearGradient>
    <View style={styles.sectionHead}><Text style={styles.sectionTitle}>A little care for today</Text><Text style={styles.sectionLink}>Just for you</Text></View>
    <View style={styles.quickRow}>
      <Quick icon={<BookHeart size={20} color={colors.rose}/>} title="Journal" subtitle="Let it out" tint="#FCE9EE" />
      <Quick icon={<HeartHandshake size={20} color="#8F7EB0"/>} title="Comfort" subtitle="A warm corner" tint="#F0ECF8" onPress={() => router.push('/emergency')}/>
    </View>
    <Pressable onPress={() => router.push('/(tabs)/insights')}><Card style={styles.insight}>
      <View style={styles.insightIcon}><Sparkles size={19} color={colors.gold}/></View><View style={{ flex: 1 }}><Eyebrow>YOUR WEEKLY WHISPER</Eyebrow><Text style={styles.insightTitle}>Rest is working its magic</Text><Text style={styles.insightText}>Your happiest days followed better sleep this week.</Text></View><ChevronRight size={20} color="#B9A9AE"/>
    </Card></Pressable>
    <Text style={styles.quote}>“There are always flowers for those who want to see them.”</Text><Text style={styles.quoteBy}>— HENRI MATISSE</Text>
  </Screen>;
}

function Quick({ icon, title, subtitle, tint, onPress }: any) { return <Pressable onPress={onPress} style={styles.quick}><View style={[styles.quickIcon,{ backgroundColor: tint }]}>{icon}</View><View><Text style={styles.quickTitle}>{title}</Text><Text style={styles.quickSub}>{subtitle}</Text></View><ChevronRight size={18} color="#C2B2B7" style={{ marginLeft: 'auto' }}/></Pressable>; }

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 15, paddingBottom: 22 },
  hello: { fontFamily: 'CormorantGaramond_700Bold', fontSize: 30, color: colors.ink, marginTop: 4 },
  bell: { width: 43, height: 43, borderRadius: 22, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', ...shadow }, dot: { position: 'absolute', right: 10, top: 9, width: 6, height: 6, borderRadius: 3, backgroundColor: colors.rose },
  hero: { borderRadius: 32, padding: 22, borderWidth: 1, borderColor: '#F8E7E7', ...shadow }, heroTop: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  heroTitle: { fontFamily: 'CormorantGaramond_600SemiBold', fontSize: 25, color: colors.ink, marginTop: 3 }, streak: { flexDirection: 'row', backgroundColor: '#FFF4EA', paddingHorizontal: 11, paddingVertical: 7, borderRadius: 15, gap: 5 }, streakText: { fontFamily: 'DMSans_700Bold', fontSize: 11, color: '#A85E3B' },
  ring: { alignItems: 'center', marginVertical: 4 }, note: { fontFamily: 'DMSans_400Regular', textAlign: 'center', color: colors.muted, fontSize: 13, lineHeight: 20, maxWidth: 300, alignSelf: 'center', marginBottom: 18 },
  sectionHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 28, marginBottom: 13 }, sectionTitle: { fontFamily: 'CormorantGaramond_700Bold', fontSize: 23, color: colors.ink }, sectionLink: { fontFamily: 'DMSans_600SemiBold', color: colors.rose, fontSize: 12 },
  quickRow: { flexDirection: 'row', gap: 12 }, quick: { flex: 1, minHeight: 88, padding: 13, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 21, borderWidth: 1, borderColor: '#F5ECE8', ...shadow }, quickIcon: { width: 42, height: 42, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginRight: 9 }, quickTitle: { fontFamily: 'DMSans_700Bold', fontSize: 13, color: colors.ink }, quickSub: { fontFamily: 'DMSans_400Regular', fontSize: 10, color: colors.muted, marginTop: 2 },
  insight: { marginTop: 14, flexDirection: 'row', alignItems: 'center', gap: 13 }, insightIcon: { width: 42, height: 42, borderRadius: 14, backgroundColor: '#FFF5DF', alignItems: 'center', justifyContent: 'center' }, insightTitle: { fontFamily: 'DMSans_700Bold', color: colors.ink, fontSize: 14, marginTop: 4 }, insightText: { fontFamily: 'DMSans_400Regular', color: colors.muted, fontSize: 11, marginTop: 3 },
  quote: { fontFamily: 'CormorantGaramond_600SemiBold', fontStyle: 'italic', fontSize: 18, textAlign: 'center', color: '#7B646D', marginTop: 30, paddingHorizontal: 32 }, quoteBy: { fontFamily: 'DMSans_700Bold', fontSize: 8, letterSpacing: 1.5, textAlign: 'center', color: colors.gold, marginTop: 7, marginBottom: 12 },
});
