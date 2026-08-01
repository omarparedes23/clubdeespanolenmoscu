import { ImageResponse } from 'next/og'

export const alt = 'Spanish Club Moscow — Club de Español en Moscú'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0A0A0F',
          backgroundImage: 'linear-gradient(135deg, #0A0A0F 0%, #1A0A1E 50%, #0A0A0F 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 120,
            height: 8,
            backgroundColor: '#E63946',
            borderRadius: 4,
            marginBottom: 48,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, color: '#F0F0F0', lineHeight: 1.1 }}>
            Spanish Club
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 700,
              color: '#E63946',
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Moscow
          </div>
          <div style={{ display: 'flex', fontSize: 32, color: '#8A8A9A' }}>
            Club de Español en Moscú · Клуб испанского языка
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {['🎉 Viernes gratis', '📍 Casa Agave', '🌎 Comunidad Latino-Rusa'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                padding: '12px 24px',
                borderRadius: 999,
                backgroundColor: 'rgba(241,196,15,0.12)',
                color: '#F1C40F',
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
