import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Send, Instagram, MapPin, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con Spanish Club Moscow. Teléfono +7 985 849-68-59, email jastyn.rusia@vk.com, Telegram e Instagram. Escríbenos con toda confianza. • Свяжитесь с клубом испанского языка в Москве.',
  openGraph: {
    title: 'Contacto | Spanish Club Moscow',
    description: '¿Preguntas sobre el club? Escribe con toda confianza.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-medium mb-6">
            <MessageCircle size={14} />
            Escríbenos · Напишите нам
          </span>
          <h1 className="section-title text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Contacto</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
            ¿Preguntas sobre el club, los eventos o cómo unirte? Escribe con toda confianza.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Вопросы о клубе, мероприятиях или о том, как присоединиться? Пишите смело.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <a
            href="tel:+79858496859"
            className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-brand-red/40 transition-colors group"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-red/15 border border-brand-red/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/25 transition-colors">
              <Phone size={19} className="text-brand-red" />
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Teléfono · Телефон</p>
              <p className="text-brand-red font-medium">+7 985 849-68-59</p>
              <p className="text-gray-500 text-sm mt-1">WhatsApp / Telegram</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:jastyn.rusia@vk.com"
            className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-brand-red/40 transition-colors group"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/25 transition-colors">
              <Mail size={19} className="text-brand-gold" />
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Email</p>
              <p className="text-brand-gold font-medium break-all">jastyn.rusia@vk.com</p>
              <p className="text-gray-500 text-sm mt-1">Soporte del club · Поддержка клуба</p>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/clubdeespanolenmoscu"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-sky-400/40 transition-colors group"
          >
            <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/25 transition-colors">
              <Send size={19} className="text-sky-400" />
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Telegram</p>
              <p className="text-sky-400 font-medium">@clubdeespanolenmoscu</p>
              <p className="text-gray-500 text-sm mt-1">Avisos, fotos y próximos eventos</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/clubdeespanolenmoscu"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-pink-400/40 transition-colors group"
          >
            <div className="w-11 h-11 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/25 transition-colors">
              <Instagram size={19} className="text-pink-400" />
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Instagram</p>
              <p className="text-pink-400 font-medium">@clubdeespanolenmoscu</p>
              <p className="text-gray-500 text-sm mt-1">Momentos de la comunidad</p>
            </div>
          </a>
        </div>

        {/* Where */}
        <div className="mt-12">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-dark-surface2 border border-dark-border flex items-center justify-center flex-shrink-0">
                <MapPin size={19} className="text-brand-red" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold mb-2">¿Dónde nos encontramos?</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-1">
                  En verano nos reunimos los viernes a las 19:00 en el{' '}
                  <span className="text-white font-medium">Parque Gorki</span> (metro Frunzenskaya),
                  en la estatua del buzo. El resto del año, en{' '}
                  <span className="text-white font-medium">Casa Agave</span>.
                </p>
                <p className="text-gray-500 text-sm">
                  Летом по пятницам в 19:00 встречаемся в парке Горького (м. Фрунзенская), у статуи
                  водолаза. В остальное время года — в Casa Agave.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/events"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            Ver próximos eventos
          </Link>
        </div>
      </div>
    </div>
  )
}
