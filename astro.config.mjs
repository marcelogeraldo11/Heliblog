import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Add this line

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
  integrations: [
    tailwind(),
    react(),
  ],
  vite: {
    assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg']
  },
  build: {
    assets: 'assets'
  }
});