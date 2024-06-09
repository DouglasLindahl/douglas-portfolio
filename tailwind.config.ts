import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#007BFF',
        'secondary-color': '#FF6B6B',
        'accent-color': '#8A2BE2',
        'neutral-color': '#343A40',
        'neutral-color-two': '#F8F9FA',
        'background-color': '#1C1E21',
      },
    },
  },
  plugins: [],
}

export default config
