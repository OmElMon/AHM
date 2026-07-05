export type Question = {
  id: string; prompt: string; eyebrow: string; type: 'emoji' | 'scale' | 'choice' | 'text';
  options?: { label: string; emoji?: string; value: number }[]; low?: string; high?: string; omar?: boolean;
};

export const QUESTIONS: Question[] = [
  { id: 'mood', eyebrow: 'YOUR HEART', prompt: 'How does today feel?', type: 'emoji', options: [
    { label: 'Rough', emoji: '😔', value: 25 }, { label: 'Meh', emoji: '😐', value: 45 },
    { label: 'Good', emoji: '🙂', value: 68 }, { label: 'Happy', emoji: '😊', value: 84 }, { label: 'Radiant', emoji: '🥰', value: 100 },
  ]},
  { id: 'sleep', eyebrow: 'REST & RESTORE', prompt: 'How did you sleep?', type: 'scale', low: 'Barely slept', high: 'Like a princess' },
  { id: 'energy', eyebrow: 'YOUR SPARK', prompt: 'How much energy is in your cup?', type: 'scale', low: 'Running on fumes', high: 'Unstoppable' },
  { id: 'smile', eyebrow: 'A LITTLE JOY', prompt: 'What made you smile today?', type: 'text' },
  { id: 'water', eyebrow: 'TINY HABITS', prompt: 'Did you drink enough water?', type: 'choice', options: [
    { label: 'Yes, hydrated queen', emoji: '💧', value: 100 }, { label: 'Getting there', emoji: '🫗', value: 65 }, { label: 'Water? Oh.', emoji: '🫠', value: 30 },
  ]},
  { id: 'omar', eyebrow: 'OMAR CHECK-IN', prompt: 'Has Omar behaved today?', type: 'choice', omar: true, options: [
    { label: 'Angel behavior', emoji: '😇', value: 100 }, { label: 'He is... acceptable', emoji: '🤨', value: 70 }, { label: 'Apology pending', emoji: '⚠️', value: 40 },
  ]},
];

export function dailyQuestions() {
  return QUESTIONS;
}
