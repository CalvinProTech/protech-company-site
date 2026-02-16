import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featuredImage: string;
}

interface BlogPreviewProps {
  posts: BlogPost[];
}

function BlogCards({ posts }: { posts: BlogPost[] }) {
  const displayPosts = posts.slice(0, 3);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {displayPosts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-5">
            <div className="mb-2 inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-600">
              {post.category}
            </div>
            <h3 className="text-lg font-semibold text-primary-900 group-hover:text-accent-500">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
              {post.excerpt}
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs text-neutral-400">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl bg-white shadow-sm"
        >
          <div className="aspect-[16/9] animate-pulse bg-neutral-200" />
          <div className="p-5">
            <div className="h-4 w-20 animate-pulse rounded bg-neutral-200" />
            <div className="mt-3 h-5 w-3/4 animate-pulse rounded bg-neutral-200" />
            <div className="mt-2 h-4 w-full animate-pulse rounded bg-neutral-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 md:text-4xl">
            Roofing Tips & Insights
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Expert advice to help you make informed decisions about your roof
          </p>
        </div>

        <Suspense fallback={<BlogSkeleton />}>
          <BlogCards posts={posts} />
        </Suspense>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 font-medium text-accent-500 transition-colors hover:text-accent-600"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
