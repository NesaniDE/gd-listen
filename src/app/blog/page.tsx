import { blogPosts } from '@/data/blog'
import BlogCard from '@/components/cards/BlogCard'
import PageHero from '@/components/layout/PageHero'

export const metadata = {
  title: 'Blog & Ratgeber',
  description:
    'Tipps, Hintergründe und Empfehlungen rund um Schwäbisch Gmünd — vom passenden Café bis zur richtigen Zahnarztpraxis.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <div>
      <PageHero
        badge="Ratgeber"
        title="Blog & Ratgeber"
        subtitle="Tipps, Hintergründe und redaktionelle Einordnungen zu lokalen Themen aus Schwäbisch Gmünd."
      />

      <div className="section-container" style={{ paddingBottom: '6rem' }}>
        <div
          className="stagger-children"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
