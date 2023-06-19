import { defineConfig } from 'windicss/helpers';
import DefaultPlugin from './windi.plugin.default';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {},
    },
  },
  extract: {
    // A common use case is scanning files from the root directory
    include: ['**/*.{vue,html,jsx,tsx}'],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', 'dist'],
  },
  plugins: [DefaultPlugin],
});