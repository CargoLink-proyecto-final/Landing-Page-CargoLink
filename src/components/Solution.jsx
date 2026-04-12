import useScrollReveal from '../hooks/useScrollReveal'

export default function Solution() {
  const ref = useScrollReveal()

  return (
    <section className="solution" id="solucion" ref={ref}>
      <div className="container">
        <div className="section-label reveal">La solución</div>
        <h2 className="section-title reveal reveal-delay-1">
          CargoLink conecta oferta y<br />demanda de transporte
        </h2>
        <p className="section-desc reveal reveal-delay-2">
          Una plataforma digital que vincula transportistas con capacidad disponible
          y usuarios que necesitan enviar mercadería, optimizando cada viaje.
        </p>

        <div className="solution-features">
          <div className="sol-card reveal reveal-delay-1">
            <span className="icon">{'\u{1F4CD}'}</span>
            <h3>Publicación de rutas y cargas</h3>
            <p>Transportistas publican sus rutas disponibles. Usuarios y empresas publican sus cargas con origen, destino, tipo y peso.</p>
          </div>
          <div className="sol-card reveal reveal-delay-2">
            <span className="icon">{'\u{1F517}'}</span>
            <h3>Matching inteligente</h3>
            <p>El sistema filtra automáticamente rutas disponibles con cargas compatibles según ubicación, capacidad y tiempos.</p>
          </div>
          <div className="sol-card reveal reveal-delay-3">
            <span className="icon">{'\u{1F4E6}'}</span>
            <h3>Gestión de envíos</h3>
            <p>Seguimiento completo del estado de cada transporte: pendiente, en curso y finalizado, con notificaciones en tiempo real.</p>
          </div>
          <div className="sol-card reveal reveal-delay-4">
            <span className="icon">{'\u2705'}</span>
            <h3>Validación de identidad</h3>
            <p>Verificación de choferes mediante DNI y controles asociados a AFIP/ARCA para garantizar la confiabilidad.</p>
          </div>
          <div className="sol-card reveal reveal-delay-5">
            <span className="icon">{'\u2B50'}</span>
            <h3>Sistema de valoraciones</h3>
            <p>Calificaciones y comentarios entre transportistas y usuarios para construir confianza en la plataforma.</p>
          </div>
          <div className="sol-card reveal reveal-delay-6">
            <span className="icon">{'\u{1F4CA}'}</span>
            <h3>Métricas y dashboard</h3>
            <p>Paneles de análisis con indicadores de rendimiento para que empresas y administradores tomen mejores decisiones.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
