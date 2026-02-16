import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { getAllPosts, type BlogPost } from '@/lib/blog';
import { createPageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import Badge from '@/components/ui/Badge';

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: 'Roofing Blog | Tips, Guides & Industry News | ProTech Roofing',
    description:
      'Read expert roofing tips, maintenance guides, and industry news from ProTech Roofing. Stay informed about roof care, storm preparation, and material comparisons.',
    path: '/blog',
  });
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  let posts: BlogPost[];
  try {
    posts = getAllPosts();
  } catch {
    posts = [];
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Roofing Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-200">
            Expert tips, maintenance guides, and industry insights from our team
            of licensed roofing professionals.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Blog Grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <BookOpen className="mx-auto h-16 w-16 text-neutral-300" />
              <h2 className="mt-6 text-2xl font-bold text-primary-900">
                Coming Soon
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-neutral-600">
                We are working on expert roofing content for you. Check back
                soon for tips, guides, and industry news from our team.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-primary-600 px-6 text-base font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 6).map((post) => (
                <Link
                  key={post.frontmatter.slug}
                  href={`/blog/${post.frontmatter.slug}`}
                  className="content-visibility-auto group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  {/* Thumbnail Placeholder */}
                  <div className="relative aspect-[16/9] bg-primary-100">
                    {post.frontmatter.featuredImage ? (
                      <Image
                        src={post.frontmatter.featuredImage}
                        alt={post.frontmatter.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <BookOpen className="h-12 w-12 text-primary-300" />
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <Badge variant="accent">
                        {post.frontmatter.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-neutral-500">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold text-primary-900 group-hover:text-primary-600">
                      {post.frontmatter.title}
                    </h2>
                    <p className="mt-1 flex items-center gap-1 text-sm text-neutral-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.frontmatter.date)}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm text-neutral-600">
                      {post.frontmatter.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
