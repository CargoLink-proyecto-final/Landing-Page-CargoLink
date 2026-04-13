import { WifiOff, RouteOff, Unplug, TrendingDown } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Problem() {
  const ref = useScrollReveal()

  return (
    <section className="problem" id="problema" ref={ref}>
      <div className="container">
        <div className="section-label reveal">El problema</div>
        <h2 className="section-title reveal reveal-delay-1">
          Un sistema logístico que<br />pierde eficiencia cada día
        </h2>
        <p className="section-desc reveal reveal-delay-2">
          El transporte de cargas en Argentina enfrenta desafíos estructurales que
          impactan directamente en los costos y la sustentabilidad del sector.
        </p>

        <div className="problem-grid">
          <div className="problem-visual reveal">
            <div className="problem-stat-big">
              <div className="unit">Hasta un</div>
              <div className="num">54%</div>
              <div className="desc">
                de los camiones en Argentina realizan sus viajes de retorno
                completamente vacíos, generando pérdidas millonarias al sector.
              </div>
            </div>
            <div className="problem-divider"></div>
            <div className="problem-stat-small">
              <div className="icon"><WifiOff size={24} /></div>
              <div className="text">
                <strong>Sin herramientas digitales centralizadas</strong>,
                transportistas y empresas coordinan envíos de forma manual,
                con baja visibilidad de oportunidades.
              </div>
            </div>
          </div>

          <div className="problem-cards">
            <div className="problem-card reveal reveal-delay-1">
              <div className="icon"><RouteOff size={24} /></div>
              <div>
                <h3>Viajes en vacío</h3>
                <p>Los camiones viajan cargados en un sentido pero regresan sin mercadería, desperdiciando combustible, tiempo y capacidad.</p>
              </div>
            </div>
            <div className="problem-card reveal reveal-delay-2">
              <div className="icon"><Unplug size={24} /></div>
              <div>
                <h3>Gestión desconectada</h3>
                <p>No existe una plataforma centralizada que permita coordinar envíos de manera eficiente entre transportistas y generadores de carga.</p>
              </div>
            </div>
            <div className="problem-card reveal reveal-delay-3">
              <div className="icon"><TrendingDown size={24} /></div>
              <div>
                <h3>Costos operativos elevados</h3>
                <p>La falta de integración genera problemas de organización, baja visibilidad y mayores costos para todos los actores de la cadena.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
