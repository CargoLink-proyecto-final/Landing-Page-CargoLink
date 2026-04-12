import useScrollReveal from '../hooks/useScrollReveal'

export default function Survey() {
  const ref = useScrollReveal()

  return (
    <section className="survey" id="encuestas" ref={ref}>
      <div className="container survey-inner">
        <div className="section-label reveal">Tu opinión importa</div>
        <h2 className="section-title reveal reveal-delay-1">
          Ayudanos a construir la<br />plataforma que necesitás
        </h2>
        <p className="section-desc reveal reveal-delay-2">
          Estamos desarrollando CargoLink como proyecto final universitario
          y necesitamos conocer las necesidades reales del sector.
          Completá una breve encuesta y colaborá con el desarrollo.
        </p>

        <div className="survey-cards">
          <div className="survey-card reveal reveal-delay-3">
            <span className="icon">{'\u{1F69B}'}</span>
            <h3>Soy Transportista</h3>
            <p>Si sos chofer o tenés una flota de transporte, tu experiencia es clave para diseñar las herramientas que realmente necesitás.</p>
            <a href="https://forms.gle/transportista" target="_blank" rel="noopener" className="btn-survey btn-survey-amber">
              Completar encuesta →
            </a>
          </div>
          <div className="survey-card reveal reveal-delay-4">
            <span className="icon">{'\u{1F3ED}'}</span>
            <h3>Genero Cargas</h3>
            <p>Si sos particular o empresa que necesita enviar mercadería, contanos cómo podemos simplificar tu logística.</p>
            <a href="https://forms.gle/generador" target="_blank" rel="noopener" className="btn-survey btn-survey-teal">
              Completar encuesta →
            </a>
          </div>
        </div>

        <p className="survey-note reveal reveal-delay-5">
          Las encuestas son anónimas y toman menos de 5 minutos.
          Tu aporte es fundamental para el desarrollo del proyecto.
        </p>
      </div>
    </section>
  )
}
