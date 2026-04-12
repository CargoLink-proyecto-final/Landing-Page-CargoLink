import useScrollReveal from '../hooks/useScrollReveal'

const members = [
  { initials: 'SB', name: 'Simón Barrale', role: 'Dev y QA' },
  { initials: 'MF', name: 'Manuel Frias', role: 'Project Manager y Dev' },
  { initials: 'VM', name: 'Vicente Monzo', role: 'Scrum Master y QA' },
]

export default function Team() {
  const ref = useScrollReveal()

  return (
    <section className="team" id="equipo" ref={ref}>
      <div className="container">
        <div className="team-header">
          <div>
            <div className="section-label reveal">El equipo</div>
            <h2 className="section-title reveal reveal-delay-1">
              Quiénes somos
            </h2>
          </div>
          <div className="team-context reveal reveal-delay-2">
            <p>
              CargoLink es un proyecto final de carrera universitaria.
              Nuestro objetivo es aplicar tecnología para resolver un
              problema real del sector logístico argentino.
            </p>
          </div>
        </div>

        <div className="team-grid">
          {members.map((m, i) => (
            <div className={`team-card reveal reveal-delay-${i + 1}`} key={i}>
              <div className="team-avatar">{m.initials}</div>
              <h3>{m.name}</h3>
              <div className="role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
