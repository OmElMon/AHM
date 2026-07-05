/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: { extend: { colors: { blush: '#F4B8C6', cream: '#FFF9F3', wine: '#432A35', gold: '#C89B5B' } } },
  plugins: []
};
