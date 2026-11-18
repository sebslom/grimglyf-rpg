import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
// Zmień 'nazwa-twojego-repo' na dokładną nazwę swojego repozytorium na GitHubie
// np. base: '/grimglyf/', jeśli repo nazywa się 'grimglyf'.
// Jeśli to repozytorium typu username.github.io, możesz zostawić '/' lub usunąć pole base.
base: '/grimglyf-rpg/',
build: {
outDir: 'dist',
sourcemap: false,
},
server: {
port: 3000,
open: true,
},
});
