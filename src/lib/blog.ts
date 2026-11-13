import { posts as legacyPosts } from '../data/posts';

export type BlogPost = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  url: string;
  slug?: string;
  body?: unknown[];
};

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET || 'production';

type SanityPost = {
  title: string;
  slug: string;
  publishedAt: string;
  category?: string;
  excerpt?: string;
  coverUrl?: string;
  body?: unknown[];
};

let postPromise: Promise<BlogPost[]> | undefined;

async function loadPosts(): Promise<BlogPost[]> {
  if (!projectId) return legacyPosts;
  if (!/^[a-z0-9-]+$/i.test(projectId) || !/^[a-z0-9_-]+$/i.test(dataset)) {
    throw new Error('SANITY_PROJECT_ID o SANITY_DATASET no tienen un formato válido.');
  }

  const query = `*[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    category,
    excerpt,
    "coverUrl": cover.asset->url,
    body[]{...,
      _type == "image" => {"url": asset->url, alt}
    }
  }`;
  const endpoint = new URL(`https://${projectId}.apicdn.sanity.io/v2026-03-01/data/query/${dataset}`);
  endpoint.searchParams.set('query', query);
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`No se pudieron cargar los artículos de Sanity (${response.status}).`);
  const payload = (await response.json()) as { result: SanityPost[] };
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return payload.result.map((post) => ({
    title: post.title,
    date: post.publishedAt.slice(0, 10),
    category: post.category || 'Historias',
    excerpt: post.excerpt || '',
    image: post.coverUrl || '',
    url: `${base}/blog/${post.slug}/`,
    slug: post.slug,
    body: post.body || [],
  }));
}

export function getPosts(): Promise<BlogPost[]> {
  return postPromise ??= loadPosts();
}
