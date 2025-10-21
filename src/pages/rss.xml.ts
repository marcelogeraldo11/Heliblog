import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const publishedPosts = posts.filter((p) => !p.data.draft);

  const site = (context.site?.toString() ?? 'https://heliboss.cl');

  function toAbsolute(url: string): string {
    if (!url) return '';
    try {
      return new URL(url, site).toString();
    } catch {
      return url.startsWith('http') ? url : new URL(url, site).toString();
    }
  }

  function mimeFromUrl(url: string): string {
    const lower = url.toLowerCase();
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
    if (lower.endsWith('.png')) return 'image/png';
    if (lower.endsWith('.webp')) return 'image/webp';
    if (lower.endsWith('.gif')) return 'image/gif';
    return 'image/jpeg';
  }

  return rss({
    title: 'Heliboss Blog - Drones DJI en Chile',
    description: 'Las últimas noticias sobre drones DJI, tecnología y lanzamientos en Chile. Dealer oficial DJI Enterprise.',
    site,
    items: publishedPosts.map((post) => {
      const link = new URL(`/blog/${post.slug}/`, site).toString();
      const hero = post.data.heroImage ? toAbsolute(post.data.heroImage) : '';
      const enclosure = hero ? `<enclosure url="${hero}" type="${mimeFromUrl(hero)}" />` : '';
      const guid = link;

      return {
        title: post.data.title,
        pubDate: post.data.updatedDate || post.data.pubDate,
        description: post.data.description,
        link,
        categories: post.data.tags || [],
        author: 'Heliboss',
        customData: `
          <guid>${guid}</guid>
          <language>es-cl</language>
          ${enclosure}
        `,
      };
    }),
    customData: `
      <language>es-cl</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <managingEditor>info@heliboss.cl (Heliboss)</managingEditor>
      <webMaster>info@heliboss.cl (Heliboss)</webMaster>
      <copyright>Copyright ${new Date().getFullYear()} Heliboss</copyright>
      <category>Technology</category>
      <category>Drones</category>
      <category>DJI</category>
      <ttl>60</ttl>
    `,
  });
}