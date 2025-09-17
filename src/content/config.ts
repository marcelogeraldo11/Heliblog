import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Thêm readingTime vào schema nhưng đặt là optional
    readingTime: z.string().optional(),
  }),
  slug: ({ data, defaultSlug }) => {
    const source = (data?.title || defaultSlug).toLowerCase();
    const normalized = source
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, ' ');
    const words = normalized.trim().split(/[\s-]+/).filter(Boolean);
    let candidate = words.slice(0, 7).join('-');
    if (candidate.length > 70) {
      candidate = candidate.slice(0, 70).replace(/-+$/g, '');
    }
    return candidate || defaultSlug;
  },
});

export const collections = {
  'blog': blogCollection,
};

