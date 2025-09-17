import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Determine site URL based on environment
const getSiteURL = () => {
  // For Netlify production deployment
  if (process.env.NETLIFY && process.env.URL) {
    return process.env.URL;
  }
  // For Netlify deploy previews
  if (process.env.NETLIFY && process.env.DEPLOY_PRIME_URL) {
    return process.env.DEPLOY_PRIME_URL;
  }
  // For Vercel production deployment
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // For Vercel preview deployment
  if (process.env.VERCEL_BRANCH_URL) {
    return `https://${process.env.VERCEL_BRANCH_URL}`;
  }
  // For local development
  return 'http://localhost:4321';
};

// https://astro.build/config
export default defineConfig({
  site: getSiteURL(),
  devToolbar: {
    enabled: false
  },
  integrations: [
    tailwind(),
    react(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['localhost', 'heliboss.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.heliboss.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Optimización de imágenes para mejor rendimiento
    formats: ['avif', 'webp', 'jpg'],
    quality: 80,
  },
  vite: {
    assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.avif'],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            astro: ['astro/runtime/client/idle.js', 'astro/runtime/client/load.js'],
          },
          // Optimización de nombres de archivos para mejor caching
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            if (/css/i.test(ext)) {
              return `assets/css/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
      cssCodeSplit: true,
      minify: 'esbuild',
      // Configuración para mejor compresión
      target: 'es2020',
      sourcemap: false,
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  },
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto',
    split: true,
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  // Configuraciones adicionales para rendimiento
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
});