import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
  ],
  theme: {
    colors: {
      tarot: {
        dark: '#0f172a',
        gold: '#fbbf24',
        accent: '#8b5cf6',
      },
    },
  },
})
