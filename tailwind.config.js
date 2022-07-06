/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        hiragino_sans_3: ['HiraginoSans-W3', 'ui-serif'],
        hiragino_kaku_3: ['ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'ui-serif'],
      },
      backgroundImage: {
        app_icon: "url('/public/appIcon_1024.png')",
      },
      colors: {
        main_normal: '#009639',
        main_lighter: '#B7DEC6',
        main_light: '#E0F8E9',
        main_lightest: '#F4FCF7',

        gray_deep: '#AAAAAA',
        gray_normal: '#D4D4D4',
        gray_light: '#F2F2F2',
      },
      spacing: {
        '9/10': '90%',
      },
      maxWidth: {
        icon_w: '150px',
        s_icon_w: '100px',
      },
      minWidth: {
        screen_w: '290px',
      },
    },
  },
  plugins: [],
}
