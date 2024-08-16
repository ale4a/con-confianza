/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

const config =  {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui"), nextui()],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#93BBFB",
          "primary-content": "#212638",
          secondary: "#DAE8FF",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#212638",
          "primary-content": "#F9FBFF",
          secondary: "#323f61",
          "secondary-content": "#F9FBFF",
          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#385183",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        urbanist: ['urbanist'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-2': 'linear-gradient(270deg, #f55925 0%, #D75986 100%)',
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        'boat-footer-dark-gray': '#141519',
        'boat-footer-light-gray': '#8a919e',
        'boat-color-gray-900': '#191918',
        'boat-color-blue-40': '#1354e1',
        'boat-color-green-40': '#0b8552',
        'boat-color-palette-backgroundalternate': '#141519',
        'boat-color-palette-foreground': '#fff',
        'boat-color-palette-foregroundmuted': '#8a919e;',
        'boat-color-palette-line': '#8a919e33',
        'boat-color-pink-50': '#d058c1',
        'boat-color-purple-60': '#b388f5',
        'boat-color-yellow-60': '#e9b300',
        'boat-color-yellow-70': '#FFD200',
        'boat-color-orange': '#f55925',
        'boat-gold': '#7b602f',
        primary: '#19CE5E',
        'primary-hover': '#80F5AC',
        'primary-active': '#53E88B',
        'primary-disabled': '#53E88B80',
        'primary-subtle': '#EFFEFA',
        'primary-strong': '#0F863D',
        secondary: '#FEAD1D',
        'secondary-hover': '#FEC64B',
        'secondary-active': '#F88B08',
        'secondary-disabled': '#FEAD1D80',
        'secondary-subtle': '#FFF9EB',
        'secondary-strong': '#B64407',
        tertiary: '#15BE77',
        'tertiary-hover': '#38CF8B',
        'tertiary-active': '#08935B',
        'tertiary-disabled': '#15BE7780',
        'tertiary-subtle': '#D2F9E2',
        'tertiary-strong': '#085D3E',
        success: '#17D071',
        'success-hover': '#40E891',
        'success-active': '#0CAD5A',
        'success-disabled': '#17D07180',
        'success-subtle': '#D2F9E2',
        information: '#3268FF',
        'information-hover': '#5B91FF',
        'information-active': '#1743F9',
        'information-disabled': '#3268FF80',
        warning: '#FF8E10',
        'warning-hover': '#FFA938',
        'warning-active': '#F67100',
        'warning-disabled': '#FF8E1080',
        danger: '#FA3116',
        'danger-hover': '#FF7C6A',
        'danger-active': '#E8321A',
        'danger-disabled': '#FA311680',
        text: {
          title: '#3D3D3D',
          body: '#656565',
          'body-subtle': '#989898',
          caption: '#BDBDBD',
        },
        background: {
          1: '#FFFFFF',
          2: '#EFEFEF',
          3: '#DCDCDC',
        },
        stroke: {
          1: '#FFFFFF',
          2: '#EFEFEF',
          3: '#DCDCDC',
        },
      },
    },
  },
};

export default config;
