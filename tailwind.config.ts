import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightPink: '#fde2e4',
        lightPurple: '#f3e8ff',
        linkBlue: '#1d4ed8', // blue for links
      },
      fontSize: {
        nav: '1.25rem', // 20px for navbar links
        footer: '1rem', // 16px for footer text
      },
    },
  },
  plugins: [],
}

export default config
