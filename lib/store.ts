import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

export type CheckIn = {
  id: string; date: string; score: number; mood: string; moodEmoji: string;
  energy: number; stress: number; sleep: number; note?: string;
};

type HappinessState = {
  name: string;
  onboarded: boolean;
  streak: number;
  entries: CheckIn[];
  completeOnboarding: (name: string) => void;
  addEntry: (entry: CheckIn) => void;
};

const seed: CheckIn[] = [
  { id: '1', date: '2026-06-29', score: 72, mood: 'Content', moodEmoji: '🙂', energy: 65, stress: 48, sleep: 74 },
  { id: '2', date: '2026-06-30', score: 81, mood: 'Happy', moodEmoji: '😊', energy: 78, stress: 31, sleep: 86 },
  { id: '3', date: '2026-07-01', score: 68, mood: 'Calm', moodEmoji: '😌', energy: 58, stress: 42, sleep: 62 },
  { id: '4', date: '2026-07-02', score: 88, mood: 'Joyful', moodEmoji: '🥰', energy: 85, stress: 19, sleep: 90 },
  { id: '5', date: '2026-07-03', score: 76, mood: 'Good', moodEmoji: '😊', energy: 70, stress: 36, sleep: 71 },
  { id: '6', date: '2026-07-04', score: 84, mood: 'Radiant', moodEmoji: '✨', energy: 81, stress: 25, sleep: 82 },
];

const STORAGE_KEY = 'amina-happiness';

export const useHappinessStore = create<HappinessState>((set, get) => ({
  name: 'Amina', onboarded: true, streak: 7, entries: seed,
  completeOnboarding: (name) => {
    set({ name: name || 'Amina', onboarded: true });
    void save(get());
  },
  addEntry: (entry) => {
    set((state) => ({ entries: [...state.entries.filter((item) => item.date !== entry.date), entry], streak: state.streak + 1 }));
    void save(get());
  },
}));

async function save(state: HappinessState) {
  const { name, onboarded, streak, entries } = state;
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ name, onboarded, streak, entries }));
}

void AsyncStorage.getItem(STORAGE_KEY).then((value) => {
  if (value) useHappinessStore.setState(JSON.parse(value));
}).catch(() => undefined);
