/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        hiragino_sans_3: ['HiraginoSans-W3', 'ui-serif'],
        hiragino_kaku_3: ['ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'ui-serif'],
      },
    },
  },
  plugins: [],
}
