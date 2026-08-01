import type { Event } from '@/types'

// Update this when the custom domain is bought — single source of truth for SEO/GEO.
export const SITE_URL = 'https://clubdeespanolenmoscu.vercel.app'
export const SITE_NAME = 'Spanish Club Moscow'

export function toJsonLd(data: unknown): string {
  // Escape "<" so admin-entered event text (title/description) can't break out of the <script> tag.
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: 'Club de Español en Moscú',
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description:
      'Comunidad de intercambio cultural latino-ruso en Moscú. Reuniones gratuitas los viernes en Casa Agave y fiestas especiales.',
    sameAs: ['https://t.me/clubdeespanolenmoscu', 'https://instagram.com/clubdeespanolenmoscu'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Moscow',
      addressCountry: 'RU',
    },
  }
}

export function buildEventJsonLd(event: Event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location_name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Moscow',
        addressCountry: 'RU',
      },
    },
    ...(event.image_url ? { image: [event.image_url] } : {}),
    organizer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: event.price,
      priceCurrency: 'RUB',
      url: event.telegram_bot_link ?? SITE_URL,
      availability: 'https://schema.org/InStock',
    },
  }
}
