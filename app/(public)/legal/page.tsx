import type { Metadata } from 'next'
import { Scale, FileText, ShieldCheck, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Información Legal',
  description:
    'Datos del emprendedor individual detrás de Spanish Club Moscow: NIF, OGRNIP, términos y condiciones, política de confidencialidad y consentimiento de datos. • Правовая информация клуба испанского языка в Москве.',
  openGraph: {
    title: 'Información Legal | Spanish Club Moscow',
    description: 'Términos y condiciones, privacidad y datos del emprendedor individual.',
  },
}

const requisitos = [
  { label: 'Emprendedor Individual', value: 'Mármol Guachamín Jorge Santiago', ru: 'Индивидуальный предприниматель' },
  { label: 'NIF (Número de Identificación Fiscal)', value: '972717776015', ru: 'ИНН' },
  { label: 'OGRNIP (Registro Estatal Principal)', value: '326774600184600', ru: 'ОГРНИП' },
  { label: 'Cuenta corriente', value: '40802810420000937924', ru: 'Расчётный счёт' },
  { label: 'Banco', value: 'ООО "Banco Tochka"', ru: 'Банк' },
  { label: 'BIC del banco', value: '044525104', ru: 'БИК' },
  { label: 'Cuenta corresponsal', value: '30101810745374525104', ru: 'Корр. счёт' },
]

export default function LegalPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red text-sm font-medium mb-6">
            <Scale size={14} />
            Documentos legales · Юридические документы
          </span>
          <h1 className="section-title text-4xl md:text-5xl mb-4">
            Información <span className="gradient-text">Legal</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-balance">
            Datos oficiales del emprendedor individual responsable del club.
          </p>
        </div>

        {/* Requisitos del emprendedor */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-10">
          <h2 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
            <FileText size={18} className="text-brand-red" />
            Emprendedor Individual · ИП
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Responsable de Spanish Club Moscow · Ответственное лицо клуба
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {requisitos.map((r) => (
              <div key={r.label} className="border-b border-dark-border pb-3">
                <p className="text-gray-500 text-xs mb-1">
                  {r.label} · {r.ru}
                </p>
                <p className="text-white font-medium font-mono text-sm">{r.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secciones */}
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <FileText size={17} className="text-brand-gold" />
              Términos y Condiciones (Oferta Pública)
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              El presente documento regula las condiciones de acceso y participación en los eventos
              de Spanish Club Moscow. La asistencia a los eventos implica la aceptación de estas
              condiciones. Los eventos gratuitos solo requieren inscripción previa; los eventos de
              pago requieren abonar el precio publicado a través de los canales oficiales antes del
              evento.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <ShieldCheck size={17} className="text-brand-red" />
              Política de Confidencialidad
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tus datos personales (nombre, contacto e información de inscripción) se utilizan
              exclusivamente para la organización de los eventos, el envío de información relevante
              y la mejora de la comunidad. No vendemos ni compartimos tus datos con terceros, salvo
              lo exigido por la legislación rusa aplicable.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <Database size={17} className="text-brand-gold" />
              Consentimiento de Datos
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Al inscribirte en nuestros eventos o contactar con el club, consientes el tratamiento
              de tus datos personales según la Política de Confidencialidad. Puedes solicitar la
              rectificación o eliminación de tus datos en cualquier momento escribiéndonos a{' '}
              <a href="mailto:jastyn.rusia@vk.com" className="text-brand-red hover:underline">
                jastyn.rusia@vk.com
              </a>
              .
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-xs mt-10 text-center">
          Para consultas legales: +7 985 849-68-59 · jastyn.rusia@vk.com
        </p>
      </div>
    </div>
  )
}
