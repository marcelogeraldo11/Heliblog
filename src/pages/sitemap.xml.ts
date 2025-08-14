import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');
  const publishedPosts = posts;
  
  // Get all unique tags
  const allTags = [...new Set(publishedPosts.flatMap(post => post.data.tags || []))];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Homepage -->
  <url>
    <loc>${site}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Blog index -->
  <url>
    <loc>${site}blog/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- About page -->
  <url>
    <loc>${site}about/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Tags index -->
  <url>
    <loc>${site}tags/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Individual tag pages -->
  ${allTags.map(tag => `
  <url>
    <loc>${site}tags/${tag}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
  
  <!-- Blog posts -->
  ${publishedPosts.map(post => `
  <url>
    <loc>${site}blog/${post.slug}/</loc>
    <lastmod>${(post.data.updatedDate || post.data.pubDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    ${post.data.heroImage ? `
    <image:image>
      <image:loc>${post.data.heroImage.startsWith('http') ? post.data.heroImage : site + post.data.heroImage}</image:loc>
      <image:title>${post.data.title}</image:title>
      <image:caption>${post.data.description}</image:caption>
    </image:image>` : ''}
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};