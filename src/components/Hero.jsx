import { Truck } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-truck"><Truck size={96} strokeWidth={1} /></div>
        <div className="container hero-content">
          <div className="hero-tag anim-fade-up">Plataforma logística</div>
          <h1 className="anim-fade-up anim-delay-1">
            Conectamos <em>cargas</em> con transportistas en Argentina
          </h1>
          <p className="hero-desc anim-fade-up anim-delay-2">
            CargoLink es la plataforma que reduce los viajes en vacío,
            optimiza la logística y conecta a quienes necesitan enviar
            mercadería con quienes tienen capacidad de transporte disponible.
          </p>
          <div className="hero-actions anim-fade-up anim-delay-3">
            <a href="#encuestas" className="btn btn-primary">Completar encuesta →</a>
            <a href="#solucion" className="btn btn-outline">Conocer más</a>
          </div>
        </div>
        <div className="hero-road"></div>
      </section>

      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item anim-fade-up anim-delay-3">
              <div className="stat-num">40%</div>
              <div className="stat-label">de los camiones vuelven vacíos</div>
            </div>
            <div className="stat-item anim-fade-up anim-delay-4">
              <div className="stat-num">3</div>
              <div className="stat-label">perfiles de usuario diferenciados</div>
            </div>
            <div className="stat-item anim-fade-up anim-delay-5">
              <div className="stat-num">100%</div>
              <div className="stat-label">digital y centralizado</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
