import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { getPostBySlug, posts } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Spanish Club Moscow`,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors mb-8"
        >
          <ArrowLeft size={15} />
          Volver al blog · Назад в блог
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-gray-500 text-xs">
            <CalendarDays size={12} />
            {post.date}
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
          {post.title}
        </h1>

        <div className="space-y-5">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-gray-400 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border">
          <p className="text-gray-500 text-sm mb-3">¿Te gustó? Únete a la comunidad · Присоединяйся</p>
          <a
            href="https://t.me/clubdeespanolenmoscu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm inline-flex"
          >
            Unirse al canal de Telegram
          </a>
        </div>
      </div>
    </div>
  )
}
