import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/components/ReactFreezeframe.tsx'),
      name: 'ReactFreezeframe',
      formats: ['es'],
      fileName: 'ReactFreezeframe',
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: ['react', 'react-dom', 'freezeframe'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          freezeframe: 'Freezeframe',
        },
        exports: 'named',
      },
    },
  },
});