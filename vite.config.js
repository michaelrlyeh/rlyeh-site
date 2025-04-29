// === Fichier : vite.config.js (mise à jour) ===

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process'; // ✅ pour lire Git

// Lire automatiquement la version et le commit depuis Git
let version = "v1.0.0";
let commitHash = "";

try {
  version = execSync('git describe --tags --abbrev=0').toString().trim();
  commitHash = execSync('git rev-parse --short HEAD').toString().trim();
} catch (error) {
  console.warn('⚠️ Impossible de récupérer la version Git:', error);
}

export default defineConfig({
  plugins: [react()],
  base: '/', // <<< très important
  define: {
    __VERSION__: JSON.stringify(version),
    __COMMIT__: JSON.stringify(commitHash),
  }
});