import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@shared': path.resolve(__dirname, './src/shared'),
            '@store': path.resolve(__dirname, './src/store'),
        },
    },
    build: {
        sourcemap: process.env.NODE_ENV === 'production' ? false : true,
    },
});
