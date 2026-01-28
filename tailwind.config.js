/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#2C80EC', // blue-600

        'text-white': '#FBFBFC',
        'text-black': '#000000',
        'text-dark': '#323135',
        'text-light': '#71717A',
        'text-lighter-dark': '#474747',

        inputborder: '#A7A5AF',

        // background: '#FFFFFF',
        background: '#F9FAFB',

        surfrace: '#EFF6FF',

        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
      spacing: {
        container: '20px', // for horizontal padding
        screen: '60px', // for vertical padding
        button: '13px', // for padding y button
      },

      borderRadius: {
        xl: '12px', // rounded-xl
      },

      // fonts
      fontFamily: {
        nunito: ['Nunito-Regular'], // 400
        nunitoMeidum: ['Nunito-Medium'], // 500
        nunitoSemi: ['Nunito-SemiBold'], // 600
        nunitoBold: ['Nunito-Bold'], // 700

        syne: ['Syne-Regular'], // 400
        syneMeidum: ['Syne-Medium'], // 500
        syneSemi: ['Syne-SemiBold'], // 600
        syneBold: ['Syne-Bold'], // 700
        syneExtraBold: ['Syne-ExtraBold'], // 800
      },

      fontSize: {
        'heading-sm': ['24px', '33px'], // font-size, line-height
        'heading-lg': ['28px', '38px'],
        'sub-sm': ['16px', '28px'],
        'sub-lg': ['18px', '32px'],
      },
    },
  },
  plugins: [],
};
