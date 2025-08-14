import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const publishedPosts = posts;
  
  return rss({
    title: 'Heliboss Blog - Drones DJI en Chile',
    description: 'Las últimas noticias sobre drones DJI, tecnología y lanzamientos en Chile. Dealer oficial DJI Enterprise.',
    site: context.site || 'https://heliboss.cl',
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
      author: 'Heliboss',
      customData: `
        <language>es-cl</language>
        ${post.data.heroImage ? `<enclosure url="${post.data.heroImage}" type="image/jpeg" />` : ''}
      `,
    })),
    customData: `
      <language>es-cl</language>
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