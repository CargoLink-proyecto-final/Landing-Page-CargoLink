import useScrollReveal from '../hooks/useScrollReveal'

const features = [
  { icon: '\u{1F464}', title: 'Perfiles diferenciados', desc: 'Tres tipos de usuario: chofer, particular y empresa, cada uno con funcionalidades adaptadas a sus necesidades.' },
  { icon: '\u{1F6E3}\uFE0F', title: 'Gestión de rutas', desc: 'Los transportistas publican y administran sus rutas con origen, destino, capacidad y disponibilidad.' },
  { icon: '\u{1F4E6}', title: 'Publicación de cargas', desc: 'Usuarios y empresas detallan sus necesidades de envío: tipo de mercadería, peso, ubicación y fechas.' },
  { icon: '\u{1F3AF}', title: 'Matching automático', desc: 'Algoritmo que filtra rutas disponibles con cargas compatibles por ubicación, capacidad y tiempo.' },
  { icon: '\u{1F50D}', title: 'Seguimiento de envíos', desc: 'Visualización del estado de cada transporte en tiempo real: pendiente, en curso o finalizado.' },
  { icon: '\u{1F4C8}', title: 'Dashboard de métricas', desc: 'Indicadores de rendimiento y análisis operativo para la toma de decisiones estratégicas.' },
]

export default function Features() {
  const ref = useScrollReveal()

  return (
    <section className="features" id="funcionalidades" ref={ref}>
      <div className="container">
        <div className="section-label reveal">Funcionalidades</div>
        <h2 className="section-title reveal reveal-delay-1">
          Todo lo que necesitás<br />en una sola plataforma
        </h2>
        <p className="section-desc reveal reveal-delay-2">
          Diseñada para cubrir cada etapa del proceso logístico,
          desde el registro hasta el análisis de rendimiento.
        </p>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className={`feature-card reveal reveal-delay-${i + 1}`} key={i}>
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
