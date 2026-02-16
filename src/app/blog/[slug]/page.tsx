import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  type BlogPost,
} from '@/lib/blog';
import { createPageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';
import { CTABanner } from '@/components/sections/CTABanner';
import Badge from '@/components/ui/Badge';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = getAllPosts();
    return posts.map((post) => ({
      slug: post.frontmatter.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    if (!post) {
      return createPageMetadata({
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
        path: `/blog/${slug}`,
      });
    }

    return createPageMetadata({
      title: `${post.frontmatter.title} | ProTech Roofing Blog`,
      description: post.frontmatter.excerpt,
      path: `/blog/${post.frontmatter.slug}`,
      image: post.frontmatter.featuredImage,
    });
  } catch {
    return createPageMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      path: `/blog/${slug}`,
    });
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  let relatedPosts: BlogPost[];
  try {
    relatedPosts = getRelatedPosts(slug, 3);
  } catch {
    relatedPosts = [];
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.frontmatter.title, href: `/blog/${post.frontmatter.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        datePublished={post.frontmatter.date}
        dateModified={post.frontmatter.date}
        author={post.frontmatter.author}
        image={post.frontmatter.featuredImage || '/images/og-default.jpg'}
        slug={post.frontmatter.slug}
      />

      {/* Article Header */}
      <section className="bg-primary-900 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-primary-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <Badge variant="accent">{post.frontmatter.category}</Badge>
          <h1 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            {post.frontmatter.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-primary-200">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.frontmatter.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.frontmatter.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Featured Image */}
      {post.frontmatter.featuredImage && (
        <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={post.frontmatter.featuredImage}
              alt={post.frontmatter.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-none prose-headings:text-primary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-primary-900 prose-img:rounded-lg">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-neutral-50 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-primary-900">
              Related Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.frontmatter.slug}
                  href={`/blog/${related.frontmatter.slug}`}
                  className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] bg-primary-100">
                    {related.frontmatter.featuredImage ? (
                      <Image
                        src={related.frontmatter.featuredImage}
                        alt={related.frontmatter.title}
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
                  <div className="p-5">
                    <Badge variant="accent">
                      {related.frontmatter.category}
                    </Badge>
                    <h3 className="mt-3 text-base font-semibold text-primary-900 group-hover:text-primary-600">
                      {related.frontmatter.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {formatDate(related.frontmatter.date)}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        heading="Need Expert Roofing Help?"
        subtext="Our team is ready to answer your questions and provide a free estimate for your roofing project."
      />
    </>
  );
}
