import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, blogPosts } from '@/data/blog'
import { siteConfig } from '@/lib/config'
import { blogPostJsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import BlogCard from '@/components/cards/BlogCard'

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  const path = `/blog/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, post.title, siteConfig.city, ...siteConfig.keywords],
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: `${siteConfig.url}${path}`,
      title: post.title,
      description: post.excerpt,
      siteName: siteConfig.name,
      publishedTime: post.publishedAt,
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Start', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: post.title, href: `/blog/${post.slug}` },
            ]),
          ),
        }}
      />

      <div className="section-container-narrow">
        <Breadcrumbs crumbs={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
      </div>

      <article style={{ padding: '3rem 0' }}>
        <div className="section-container-narrow">
          <span className="badge badge-purple" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            {post.category}
          </span>
          <h1
            className="section-title"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', marginBottom: '1.25rem', lineHeight: 1.15 }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              marginBottom: '3rem',
            }}
          >
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span style={{ color: 'var(--text-subtle)' }}>·</span>
            <span>{post.readingTime}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  color: 'var(--text)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                  letterSpacing: '-0.005em',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <div className="section-container-narrow" style={{ paddingBottom: '6rem' }}>
        <hr className="divider" style={{ margin: '4rem 0 3rem' }} />

        <span className="eyebrow" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
          Weiter lesen
        </span>
        <h2 className="section-title" style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '2rem' }}>
          Weitere Artikel
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {related.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
