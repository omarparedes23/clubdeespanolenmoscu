import type { Metadata } from 'next'
import Link from 'next/link'
import { Newspaper, CalendarDays, Tag } from 'lucide-react'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog del Club',
  description:
    'Consejos, historias y guías del Spanish Club Moscow para conocer gente nueva, practicar español y disfrutar Moscú. • Советы, истории и гиды клуба испанского языка в Москве.',
  openGraph: {
    title: 'Blog del Club | Spanish Club Moscow',
    description: 'Consejos, historias y guías para conocer gente nueva, practicar español y disfrutar Moscú.',
  },
}

const categories = ['Todos', 'Vida social', 'Español', 'Cultura latina', 'Eventos', 'Guía de Moscú', 'Viajes']

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-medium mb-6">
            <Newspaper size={14} />
            Blog del Club · Блог клуба
          </span>
          <h1 className="section-title text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Blog</span> del Club
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
            Consejos, historias y guías para conocer gente nueva, practicar español y disfrutar Moscú.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Советы, истории и гиды: новые знакомства, испанский язык и Москва.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                cat === 'Todos'
                  ? 'bg-brand-red/15 border-brand-red/30 text-brand-red'
                  : 'bg-dark-surface2 border-dark-border text-gray-400'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="glass-card rounded-2xl p-6 hover:border-brand-red/30 transition-colors group"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <CalendarDays size={12} />
                  {post.date}
                </span>
              </div>
              <h2 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-brand-red transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-brand-red text-sm font-medium hover:text-brand-gold transition-colors"
              >
                Leer artículo · Читать <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>

        <p className="text-gray-600 text-xs text-center mt-10 flex items-center justify-center gap-1.5">
          <Tag size={12} /> Próximamente: más guías de español, cultura latina y eventos en Moscú.
        </p>
      </div>
    </div>
  )
}
