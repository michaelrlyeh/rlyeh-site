// === Fichier : vite.config.js ===

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <<< C'EST TRÈS IMPORTANT pour travailler en sous-dossier
})