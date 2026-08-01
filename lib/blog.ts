export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  body: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'donde-jugar-quiz-espanol-moscu',
    title: '¿Dónde jugar Quiz en español en Moscú? (y ver Moscow City)',
    excerpt:
      'Tu próximo amigo extranjero te espera. Guía para encontrar quiz en español, practicar el idioma y conocer gente nueva mientras ves Moscow City.',
    date: '10.06.2026',
    category: 'Vida social',
    body: [
      'Si estás aprendiendo español y vives en Moscú, jugar al quiz en español es una de las formas más divertidas de practicar: preguntas sobre música, cine, cultura y humor latino, todo en equipo y sin presión académica.',
      'En Spanish Club Moscow organizamos noches de quiz donde mezclamos la competencia sana con el afterwork: equipos mixtos de latinos y rusos, preguntas en español y esa energía que solo aparece cuando alguien grita la respuesta correcta desde la otra punta de la mesa.',
      'El truco está en los equipos: cada mesa mezcla niveles, así que los que llevan más tiempo ayudan a los que empiezan. Ganas vocabulario, sí, pero sobre todo ganas planes y amigos.',
      '¿Y lo de ver Moscow City? Varios bares y rooftop de la ciudad combinan el quiz con vistas a los rascacielos. La mejor forma de enterarte de las fechas es seguir nuestro canal de Telegram: cambiamos de ubicación cada vez para probar sitios nuevos.',
      'Tu próximo amigo extranjero (o ruso que quiere practicar) te espera en una mesa de quiz.',
    ],
  },
  {
    slug: 'conocer-gente-nueva-moscu',
    title: '¿Cómo conocer gente nueva en Moscú sin sentirte incómodo?',
    excerpt:
      'Advertencia: este artículo puede causar nuevos amigos, más planes y menos sofá. Estrategias reales para socializar en Moscú en un ambiente relajado.',
    date: '21.05.2026',
    category: 'Vida social',
    body: [
      'Llegar a Moscú o simplemente querer ampliar tu círculo puede sentirse abrumador, sobre todo si no hablas ruso fluido (o si el ruso es tu idioma y el español te da miedo). La buena noticia: no necesitas ser extrovertido, solo necesitas el contexto adecuado.',
      'El contexto adecuado es un evento con una dinámica clara: un language exchange, un juego de mesa, una clase, una mesa compartida. Cuando hay actividad, la conversación fluye sola y nadie siente la presión de "romper el hielo" a propósito.',
      'Tres consejos que funcionan de verdad: llega a la hora (no tarde), pregunta más de lo que cuentas de ti, y vuelve. Ser habitual es lo que convierte a un conocido en amigo — en el club, la gente que repite cada viernes es la que construye su círculo más rápido.',
      'Advertencia del editor: este artículo puede causar nuevos amigos, más planes y menos sofá. Sigue nuestro canal para conocer la próxima reunión.',
    ],
  },
  {
    slug: 'donde-jugar-mafia-espanol-moscu',
    title: '¿Dónde jugar Mafia en español en Moscú?',
    excerpt:
      'Así fue mi primer juego de Mafia en español en Moscú: una experiencia que todos deberían vivir al menos una vez en la vida.',
    date: '21.05.2026',
    category: 'Vida social',
    body: [
      'El Mafia es el juego perfecto para practicar español: poca regla, mucha conversación y una tensión que obliga a hablar, acusar y defenderte. No necesitas un nivel alto — necesitas querer jugar.',
      'En nuestras reuniones explicamos las reglas en dos idiomas y el primer turno siempre es de prueba. Después, cada partida se convierte en un mini juicio donde te olvidas de que estás "practicando" porque estás demasiado ocupado intentando descubrir al mafioso.',
      'Mi primer juego terminó conmigo acusando a mi mejor amigo por error. Nos reímos, y al final ganó el pueblo gracias a que dos rusas que no hablaban español fluido convencieron a todos con su lógica. Ese momento resume lo que es el club: gente que cruza idiomas para pasarla bien.',
      '¿Dónde se juega? En los viernes del club y en las fiestas especiales. Sumate a una partida al menos una vez en la vida — no te vas a arrepentir.',
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
