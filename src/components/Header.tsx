import { NavLink } from 'react-router-dom'
import { useAgendamentos } from '../hooks/useAgendamentos'

const links = [
  { to: '/', label: 'Home' },
  { to: '/agendamentos', label: 'Agendamentos' },
  { to: '/sobre', label: 'Sobre' },
]

export default function Header() {
  const { tickets } = useAgendamentos()
  const total = tickets.length

  return (
    <header className="bg-mar text-espuma">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4">
        <NavLink to="/" className="font-display text-2xl font-extrabold tracking-tight">
          Espuma<span className="text-cera">.</span>
        </NavLink>

        <nav aria-label="Principal">
          <ul className="flex gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cera ${
                      isActive ? 'bg-espuma text-mar' : 'hover:bg-white/10'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 rounded-full bg-cera px-4 py-2 text-sm font-semibold text-asfalto"
        >
          <span className="font-display text-lg font-extrabold leading-none">{total}</span>
          {total === 1 ? 'carro aguardando' : 'carros aguardando'}
        </p>
      </div>
    </header>
  )
}
