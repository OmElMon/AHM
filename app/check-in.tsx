import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Sparkles, X } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useForm, Controller } from 'react-hook-form';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/ui';
import { colors, shadow } from '@/lib/theme';
import { dailyQuestions, defaultAnswer } from '@/lib/questions';
import { useHappinessStore } from '@/lib/store';

type Answers = Record<string, string | number>;

export default function CheckIn() {
  const questions = useMemo(dailyQuestions, []); const [step, setStep] = useState(0); const [done, setDone] = useState(false); const [finalScore, setFinalScore] = useState(84);
  const defaults = useMemo(() => Object.fromEntries(questions.map((question) => [question.id, defaultAnswer(question)])), [questions]);
  const { control, watch } = useForm<Answers>({ defaultValues: defaults });
  const addEntry = useHappinessStore((s) => s.addEntry); const q = questions[step]; const value = watch(q?.id);
  const advance = () => { Haptics.selectionAsync(); if (step < questions.length - 1) setStep(step + 1); else finish(); };
  const finish = () => {
    const values = watch();
    const scored = questions.filter((question) => question.type !== 'text' && !question.omar).map((question) => {
      const answer = Number(values[question.id]);
      return question.reverse ? 100 - answer : answer;
    }).filter(Number.isFinite);
    const score = Math.round(scored.reduce((sum, answer) => sum + answer, 0) / Math.max(scored.length, 1));
    const moodOpt = questions[0].options?.find(o => o.value === Number(values.mood));
    const journalAnswer = questions.find((question) => question.type === 'text' && String(values[question.id] ?? '').trim());
    addEntry({ id: Date.now().toString(), date: new Date().toISOString().slice(0,10), score, mood: moodOpt?.label ?? 'Cute', moodEmoji: moodOpt?.emoji ?? '😊', energy: Number(values.energy ?? score), stress: Number(values.stress ?? (100-score)), sleep: Number(values.sleep ?? score), note: journalAnswer ? String(values[journalAnswer.id]) : '' });
    setFinalScore(score); Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); setDone(true);
  };
  if (done) return <Screen scroll={false}><View style={styles.done}>
    <View style={styles.sun}><Text style={{ fontSize: 54 }}>🌸</Text></View><Text style={styles.doneEyebrow}>CHECK-IN COMPLETE</Text><Text style={styles.doneTitle}>Beautifully done.</Text><Text style={styles.doneCopy}>You made space for your feelings today. That’s a tiny, lovely act of care.</Text>
    <View style={styles.result}><Text style={styles.resultLabel}>TODAY'S GLOW</Text><Text style={styles.resultScore}>{finalScore}%</Text><Text style={styles.resultNote}>Omar owes you one celebratory coffee. We don't make the rules.</Text></View>
    <View style={{ width: '100%' }}><PrimaryButton label="Back to my day" onPress={() => router.replace('/(tabs)')} icon={<Sparkles color="#fff" size={18}/>} /></View>
  </View></Screen>;
  return <Screen scroll={false}>
    <View style={styles.top}><Pressable onPress={() => step ? setStep(step-1) : router.back()} style={styles.circle}><ChevronLeft size={22} color={colors.ink}/></Pressable><Text style={styles.progressText}>{step+1} of {questions.length}</Text><Pressable onPress={() => router.back()} style={styles.circle}><X size={19} color={colors.ink}/></Pressable></View>
    <View style={styles.track}><View style={[styles.fill,{ width: `${((step+1)/questions.length)*100}%` }]} /></View>
    <View style={styles.questionWrap}><Text style={[styles.eyebrow, q.omar && { color: colors.lavender }]}>{q.omar ? '💋 ' : '✦ '}{q.eyebrow}</Text><Text style={styles.title}>{q.prompt}</Text>
      <Controller control={control} name={q.id} render={({ field: { onChange, value: current } }) => <View style={styles.answers}>
        {q.type === 'emoji' && <View style={styles.emojiRow}>{q.options?.map(o => <Pressable key={o.value} onPress={() => onChange(o.value)} style={[styles.emojiOption, current === o.value && styles.selectedEmoji]}><Text style={styles.emoji}>{o.emoji}</Text><Text style={[styles.emojiLabel,current===o.value&&styles.selectedLabel]}>{o.label}</Text></Pressable>)}</View>}
        {q.type === 'choice' && q.options?.map(o => <Pressable key={o.value} onPress={() => onChange(o.value)} style={[styles.choice,current===o.value&&styles.selectedChoice]}><Text style={styles.choiceEmoji}>{o.emoji}</Text><Text style={[styles.choiceText,current===o.value&&styles.selectedLabel]}>{o.label}</Text><View style={[styles.radio,current===o.value&&styles.radioSelected]}>{current===o.value&&<View style={styles.radioDot}/>}</View></Pressable>)}
        {q.type === 'scale' && <View><Text style={styles.bigValue}>{current}%</Text><View style={styles.scaleRow}>{[25,50,75,100].map(n => <Pressable key={n} onPress={() => onChange(n)} style={[styles.scaleDot,current===n&&styles.scaleActive]}><Text style={[styles.scaleNumber,current===n&&{color:'#fff'}]}>{n/25}</Text></Pressable>)}</View><View style={styles.scaleLabels}><Text style={styles.scaleLabel}>{q.low}</Text><Text style={styles.scaleLabel}>{q.high}</Text></View></View>}
        {q.type === 'text' && <TextInput value={String(current)} onChangeText={onChange} multiline placeholder="A tiny moment, a person, a snack..." placeholderTextColor="#B4A5AA" style={styles.input}/>} 
      </View>} />
    </View>
    <View style={styles.bottom}><PrimaryButton label={step === questions.length-1 ? 'See my happiness' : 'Continue'} onPress={advance}/><Pressable onPress={advance}><Text style={styles.skip}>{value ? 'I’m happy with this' : 'Skip for now'}</Text></Pressable></View>
  </Screen>;
}

const styles = StyleSheet.create({
  top:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:14},circle:{width:42,height:42,borderRadius:21,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'#FFD0E2',...shadow},progressText:{fontFamily:'DMSans_700Bold',fontSize:12,color:colors.rose},track:{height:6,backgroundColor:'#F5D8E5',borderRadius:5,marginTop:22},fill:{height:6,backgroundColor:colors.rose,borderRadius:5},
  questionWrap:{flex:1,justifyContent:'center'},eyebrow:{fontFamily:'DMSans_700Bold',fontSize:11,letterSpacing:2,color:colors.gold,textAlign:'center'},title:{fontFamily:'BodoniModa_700Bold',fontSize:38,lineHeight:43,color:colors.ink,textAlign:'center',marginTop:9,marginBottom:38,paddingHorizontal:18},answers:{width:'100%'},
  emojiRow:{flexDirection:'row',justifyContent:'space-between',gap:5},emojiOption:{alignItems:'center',paddingVertical:15,flex:1,borderRadius:19},selectedEmoji:{backgroundColor:'#fff',...shadow},emoji:{fontSize:31},emojiLabel:{fontFamily:'DMSans_600SemiBold',fontSize:10,color:colors.muted,marginTop:8},selectedLabel:{color:colors.rose},
  choice:{minHeight:68,borderRadius:20,backgroundColor:'#fff',borderWidth:1,borderColor:'#FFD4E4',marginBottom:11,paddingHorizontal:16,flexDirection:'row',alignItems:'center',...shadow},selectedChoice:{borderColor:colors.rose,backgroundColor:'#FFE2EE'},choiceEmoji:{fontSize:25,marginRight:13},choiceText:{fontFamily:'DMSans_600SemiBold',fontSize:14,color:colors.ink,flex:1},radio:{width:20,height:20,borderRadius:10,borderWidth:1.5,borderColor:'#D8C8CD',alignItems:'center',justifyContent:'center'},radioSelected:{borderColor:colors.rose},radioDot:{width:10,height:10,borderRadius:5,backgroundColor:colors.rose},
  bigValue:{fontFamily:'BodoniModa_700Bold',fontSize:64,color:colors.rose,textAlign:'center',marginBottom:25},scaleRow:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5},scaleDot:{width:53,height:53,borderRadius:27,backgroundColor:'#fff',borderWidth:1,borderColor:'#F0E3E0',alignItems:'center',justifyContent:'center',...shadow},scaleActive:{backgroundColor:colors.rose,transform:[{scale:1.12}]},scaleNumber:{fontFamily:'DMSans_700Bold',color:colors.muted,fontSize:14},scaleLabels:{flexDirection:'row',justifyContent:'space-between',marginTop:18},scaleLabel:{fontFamily:'DMSans_500Medium',fontSize:11,color:colors.muted},input:{minHeight:150,backgroundColor:'#fff',borderRadius:24,padding:20,textAlignVertical:'top',fontFamily:'DMSans_400Regular',fontSize:15,color:colors.ink,borderWidth:1,borderColor:'#F0E3E0',...shadow},
  bottom:{paddingBottom:22},skip:{fontFamily:'DMSans_600SemiBold',fontSize:12,color:colors.muted,textAlign:'center',marginTop:16},
  done:{flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:12},sun:{width:112,height:112,borderRadius:56,backgroundColor:'#FCE5EB',alignItems:'center',justifyContent:'center',marginBottom:24},doneEyebrow:{fontFamily:'DMSans_700Bold',fontSize:10,letterSpacing:2,color:colors.gold},doneTitle:{fontFamily:'BodoniModa_700Bold',fontSize:42,color:colors.ink,marginTop:5},doneCopy:{fontFamily:'DMSans_400Regular',fontSize:14,lineHeight:22,color:colors.muted,textAlign:'center',maxWidth:350},result:{backgroundColor:'#fff',borderRadius:28,padding:23,alignItems:'center',width:'100%',marginVertical:30,...shadow},resultLabel:{fontFamily:'DMSans_700Bold',fontSize:10,letterSpacing:1.7,color:colors.gold},resultScore:{fontFamily:'BodoniModa_700Bold',fontSize:54,color:colors.rose},resultNote:{fontFamily:'DMSans_500Medium',fontSize:12,color:colors.muted,textAlign:'center'},
});
