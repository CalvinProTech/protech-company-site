import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface HowToStepFrontmatter {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  date: string;
  updated?: string;
  author: string;
  authorTitle?: string;
  authorUrl?: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  readingTime: string;
  howTo?: {
    name: string;
    description: string;
    totalTime?: string;
    estimatedCost?: { currency: string; value: number | string };
    steps: HowToStepFrontmatter[];
  };
}

export interface BlogPost {
  frontmatter: BlogPostFrontmatter;
  content: string;
  readingTime: string;
}

// The post template already renders the title as the page's <h1>. Every MDX
// body ALSO opens with a `# ...` heading repeating that title, so each post
// shipped two H1s — flagged by Semrush Site Audit (2026-08-08) across the
// published set. Strip the leading body H1 at parse time so the fix covers
// existing posts, the 26 drafts, and anything the generator writes later.
// Only a *leading* H1 is removed; mid-document H1s are demoted to H2 rather
// than dropped, so no content is ever silently lost.
function stripDuplicateH1(content: string): string {
  const withoutLeading = content.replace(/^\s*#\s+[^\n]*\n+/, "");
  return withoutLeading.replace(/^#\s+(?=\S)/gm, "## ");
}

function parseMdxFile(filePath: string): BlogPost {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content: rawContent } = matter(fileContent);
  const content = stripDuplicateH1(rawContent);
  const stats = readingTime(content);

  return {
    frontmatter: {
      title: data.title,
      slug: data.slug,
      date: data.date,
      updated: data.updated,
      author: data.author,
      authorTitle: data.authorTitle,
      authorUrl: data.authorUrl,
      category: data.category,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      readingTime: data.readingTime || stats.text,
      howTo: data.howTo,
    },
    content,
    readingTime: stats.text,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));

  const posts = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    return parseMdxFile(filePath);
  });

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.frontmatter.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  const allPosts = getAllPosts();
  const currentPost = allPosts.find(
    (post) => post.frontmatter.slug === currentSlug
  );

  if (!currentPost) {
    return allPosts.slice(0, count);
  }

  const sameCategoryPosts = allPosts.filter(
    (post) =>
      post.frontmatter.slug !== currentSlug &&
      post.frontmatter.category === currentPost.frontmatter.category
  );

  if (sameCategoryPosts.length >= count) {
    return sameCategoryPosts.slice(0, count);
  }

  const otherPosts = allPosts.filter(
    (post) =>
      post.frontmatter.slug !== currentSlug &&
      post.frontmatter.category !== currentPost.frontmatter.category
  );

  return [...sameCategoryPosts, ...otherPosts].slice(0, count);
}

export function getPaginatedPosts(
  page = 1,
  perPage = 6
): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
} {
  const allPosts = getAllPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * perPage;
  const posts = allPosts.slice(startIndex, startIndex + perPage);

  return {
    posts,
    totalPages,
    currentPage,
    totalPosts,
  };
}
