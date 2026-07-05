export type Question = {
  id: string;
  prompt: string;
  eyebrow: string;
  type: 'emoji' | 'scale' | 'choice' | 'text';
  options?: { label: string; emoji?: string; value: number }[];
  low?: string;
  high?: string;
  omar?: boolean;
  reverse?: boolean;
};

export const MOOD_QUESTION: Question = {
  id: 'mood', eyebrow: 'MAIN CHARACTER CHECK', prompt: 'What’s the vibe today?', type: 'emoji', options: [
    { label: 'Not it', emoji: '😔', value: 25 }, { label: 'Meh', emoji: '😐', value: 45 },
    { label: 'Cute', emoji: '🙂', value: 68 }, { label: 'Thriving', emoji: '😊', value: 84 }, { label: 'Iconic', emoji: '🥰', value: 100 },
  ],
};

const DAILY_POOL: Question[] = [
  { id: 'sleep', eyebrow: 'BEAUTY SLEEP', prompt: 'How did you sleep, gorgeous?', type: 'scale', low: 'Barely happened', high: 'Princess level' },
  { id: 'energy', eyebrow: 'YOUR SPARK', prompt: 'How charged is your social battery?', type: 'scale', low: 'Do not perceive me', high: 'Center of attention' },
  { id: 'stress', eyebrow: 'PROTECT YOUR PEACE', prompt: 'How much is stressing you out?', type: 'scale', low: 'Unbothered', high: 'A lot, actually', reverse: true },
  { id: 'confidence', eyebrow: 'BADDIE ENERGY', prompt: 'How unstoppable do you feel?', type: 'scale', low: 'Finding my footing', high: 'Absolutely lethal' },
  { id: 'productivity', eyebrow: 'GETTING IT DONE', prompt: 'How productive was today?', type: 'scale', low: 'Rest was the task', high: 'A whole empire' },
  { id: 'social', eyebrow: 'PEOPLE METER', prompt: 'How social are we feeling?', type: 'scale', low: 'Airplane mode', high: 'Call everybody' },
  { id: 'peace', eyebrow: 'INNER GLOW', prompt: 'How peaceful does your mind feel?', type: 'scale', low: 'A little loud', high: 'Silk and silence' },
  { id: 'movement', eyebrow: 'BODY LOVE', prompt: 'Did moving your body feel good today?', type: 'choice', options: [
    { label: 'Yes, I felt alive', emoji: '💃', value: 100 }, { label: 'A cute little bit', emoji: '🚶‍♀️', value: 70 }, { label: 'Rest day, babe', emoji: '🛋️', value: 55 },
  ]},
  { id: 'water', eyebrow: 'HYDRATION CHECK', prompt: 'Did we drink water or just look pretty?', type: 'choice', options: [
    { label: 'Hydrated queen', emoji: '💧', value: 100 }, { label: 'Getting there', emoji: '🫗', value: 65 }, { label: 'Water? Oh.', emoji: '🫠', value: 30 },
  ]},
  { id: 'food', eyebrow: 'FUEL THE ICON', prompt: 'Did you eat something that hit the spot?', type: 'choice', options: [
    { label: 'Absolutely delicious', emoji: '🤌', value: 100 }, { label: 'It did the job', emoji: '🍽️', value: 70 }, { label: 'I need a treat', emoji: '🍰', value: 45 },
  ]},
  { id: 'outside', eyebrow: 'TOUCH GRASS, CUTELY', prompt: 'Did you get a little fresh air?', type: 'choice', options: [
    { label: 'Yes, sun kissed', emoji: '☀️', value: 100 }, { label: 'A quick moment', emoji: '🌤️', value: 70 }, { label: 'Not today', emoji: '🏠', value: 45 },
  ]},
  { id: 'laugh', eyebrow: 'JOY RECEIPT', prompt: 'Did anything make you laugh for real?', type: 'choice', options: [
    { label: 'Full ugly laugh', emoji: '😂', value: 100 }, { label: 'A solid giggle', emoji: '🤭', value: 75 }, { label: 'Still waiting', emoji: '😶', value: 40 },
  ]},
  { id: 'kindness', eyebrow: 'SOFT POWER', prompt: 'Were you kind to yourself today?', type: 'choice', options: [
    { label: 'Yes, she deserves it', emoji: '💗', value: 100 }, { label: 'I’m learning', emoji: '🌱', value: 70 }, { label: 'I was a bit harsh', emoji: '🫶', value: 45 },
  ]},
  { id: 'boundaries', eyebrow: 'PROTECT THE VIBE', prompt: 'Did your boundaries boundary today?', type: 'choice', options: [
    { label: 'Firm and fabulous', emoji: '💅', value: 100 }, { label: 'Mostly', emoji: '✨', value: 72 }, { label: 'We’ll try tomorrow', emoji: '🫣', value: 45 },
  ]},
  { id: 'dessert', eyebrow: 'IMPORTANT RESEARCH', prompt: 'Would dessert improve the situation?', type: 'choice', options: [
    { label: 'Obviously, yes', emoji: '🍰', value: 90 }, { label: 'Maybe something tiny', emoji: '🍓', value: 75 }, { label: 'I’m already sweet', emoji: '😌', value: 100 },
  ]},
  { id: 'smile', eyebrow: 'A LITTLE JOY', prompt: 'What made you smile today?', type: 'text' },
  { id: 'win', eyebrow: 'TAKE THE CREDIT', prompt: 'What was your biggest win today?', type: 'text' },
  { id: 'grateful', eyebrow: 'GOLDEN MOMENT', prompt: 'What are you grateful for right now?', type: 'text' },
  { id: 'release', eyebrow: 'LEAVE IT HERE', prompt: 'What are we not carrying into tomorrow?', type: 'text' },
  { id: 'compliment', eyebrow: 'GAS YOURSELF UP', prompt: 'Name one thing you love about yourself today.', type: 'text' },
  { id: 'wish', eyebrow: 'TINY WISH', prompt: 'What would make tonight feel extra nice?', type: 'text' },
  { id: 'soundtrack', eyebrow: 'CURRENT SOUNDTRACK', prompt: 'What song matches your mood?', type: 'text' },
  { id: 'romance', eyebrow: 'ROMANTICIZE IT', prompt: 'What felt cinematic today?', type: 'text' },
  { id: 'tomorrow', eyebrow: 'FUTURE YOU', prompt: 'What’s one sweet thing you can do for tomorrow-you?', type: 'text' },
];

const OMAR_POOL: Question[] = [
  { id: 'omar_behaved', eyebrow: 'OMAR INVESTIGATION', prompt: 'Has Omar behaved today?', type: 'choice', omar: true, options: [
    { label: 'Angel behavior', emoji: '😇', value: 100 }, { label: 'He is… acceptable', emoji: '🤨', value: 70 }, { label: 'Apology pending', emoji: '⚠️', value: 40 },
  ]},
  { id: 'omar_rating', eyebrow: 'OFFICIAL OMAR RATING', prompt: 'What’s today’s Omar survival level?', type: 'choice', omar: true, options: [
    { label: 'Safe and adorable', emoji: '🟢', value: 100 }, { label: 'Mild danger', emoji: '🟡', value: 72 }, { label: 'Pray for him', emoji: '🔴', value: 35 },
  ]},
  { id: 'omar_fries', eyebrow: 'RELATIONSHIP SCIENCE', prompt: 'Would you forgive Omar for stealing your fries?', type: 'choice', omar: true, options: [
    { label: 'Only because he’s cute', emoji: '🍟', value: 85 }, { label: 'He owes me two orders', emoji: '🧾', value: 60 }, { label: 'Absolutely not', emoji: '🚨', value: 35 },
  ]},
  { id: 'omar_eyerolls', eyebrow: 'EYE-ROLL AUDIT', prompt: 'How many eye-rolls has Omar earned?', type: 'choice', omar: true, options: [
    { label: 'Zero. Suspicious.', emoji: '😇', value: 100 }, { label: 'A respectful two', emoji: '🙄', value: 70 }, { label: 'Lost count', emoji: '🌀', value: 40 },
  ]},
  { id: 'omar_hug', eyebrow: 'FINAL VERDICT', prompt: 'Did Omar earn a hug today?', type: 'choice', omar: true, options: [
    { label: 'The biggest one', emoji: '🥰', value: 100 }, { label: 'A brief hug', emoji: '🫂', value: 70 }, { label: 'Under review', emoji: '📋', value: 45 },
  ]},
];

function seededNumber(seed: string) {
  let value = 2166136261;
  for (let i = 0; i < seed.length; i += 1) value = Math.imul(value ^ seed.charCodeAt(i), 16777619);
  return () => ((value = Math.imul(value ^ (value >>> 13), 2246822519)) >>> 0) / 4294967296;
}

function shuffled<T>(items: T[], random: () => number) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function dailyQuestions(date = new Date()) {
  const day = date.toISOString().slice(0, 10);
  const random = seededNumber(day);
  const total = 5 + Math.floor(random() * 4); // 5–8 questions, stable for the whole day.
  const includeOmar = random() < 0.28;
  const regularCount = total - 1 - (includeOmar ? 1 : 0);
  const selected = shuffled(DAILY_POOL, random).slice(0, regularCount);
  if (includeOmar) selected.splice(Math.max(1, selected.length - 1), 0, shuffled(OMAR_POOL, random)[0]);
  return [MOOD_QUESTION, ...selected];
}

export function defaultAnswer(question: Question): string | number {
  if (question.type === 'text') return '';
  if (question.type === 'scale') return question.reverse ? 25 : 75;
  return question.options?.find((option) => option.value >= 70)?.value ?? question.options?.[0]?.value ?? 75;
}
