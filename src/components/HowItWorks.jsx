import { useState, useCallback } from 'react'
import { Truck, Building2 } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const transportistaSteps = [
  { num: '01', title: 'Registrate y validá tu identidad', desc: 'Creá tu perfil de chofer y cargá tu documentación (DNI y datos del vehículo) para ser verificado.' },
  { num: '02', title: 'Publicá tus rutas', desc: 'Indicá origen, destino, capacidad disponible y fechas de tus viajes para que las cargas te encuentren.' },
  { num: '03', title: 'Recibí solicitudes o postulate', desc: 'Explorá cargas disponibles y postulate, o recibí solicitudes de usuarios que coinciden con tu ruta.' },
  { num: '04', title: 'Transportá y completá', desc: 'Gestioná el viaje, actualizá el estado del envío y recibí valoraciones de tus clientes.' },
]

const cargaSteps = [
  { num: '01', title: 'Creá tu cuenta', desc: 'Registrate como usuario particular o como empresa y completá tu perfil con los datos necesarios.' },
  { num: '02', title: 'Publicá tu carga', desc: 'Detallá tipo de mercadería, peso, origen, destino y fecha estimada de despacho para tu envío.' },
  { num: '03', title: 'Elegí tu transportista', desc: 'Revisá las postulaciones de choferes verificados, compará perfiles y aceptá al que mejor se ajuste.' },
  { num: '04', title: 'Seguí tu envío', desc: 'Monitoreá el estado de tu carga en tiempo real y calificá el servicio una vez finalizado.' },
]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('transportista')
  const ref = useScrollReveal()

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab)
    setTimeout(() => {
      const panel = document.getElementById(`panel-${tab}`)
      if (panel) {
        panel.querySelectorAll('.reveal').forEach((el) => {
          el.classList.remove('visible')
          requestAnimationFrame(() => el.classList.add('visible'))
        })
      }
    }, 0)
  }, [])

  const steps = activeTab === 'transportista' ? transportistaSteps : cargaSteps

  return (
    <section className="how-it-works" id="como-funciona" ref={ref}>
      <div className="container">
        <div className="section-label reveal">Cómo funciona</div>
        <h2 className="section-title reveal reveal-delay-1">
          Simple para ambas partes
        </h2>
        <p className="section-desc reveal reveal-delay-2">
          Ya seas transportista o necesites enviar mercadería,
          CargoLink simplifica todo el proceso.
        </p>

        <div className="how-tabs reveal reveal-delay-3">
          <button
            className={`how-tab${activeTab === 'transportista' ? ' active' : ''}`}
            onClick={() => handleTabClick('transportista')}
          >
            <Truck size={16} /> Transportista
          </button>
          <button
            className={`how-tab${activeTab === 'carga' ? ' active' : ''}`}
            onClick={() => handleTabClick('carga')}
          >
            <Building2 size={16} /> Generador de carga
          </button>
        </div>

        <div className="how-panel active" id={`panel-${activeTab}`}>
          <div className="steps">
            {steps.map((step, i) => (
              <div className={`step reveal reveal-delay-${i + 1}`} key={`${activeTab}-${step.num}`}>
                <div className="step-num">{step.num}</div>
                {i < steps.length - 1 && <div className="step-connector"></div>}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
