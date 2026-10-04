import TicketCard from '../components/TicketCard'
import TicketForm from '../components/TicketForm'
import { useAgendamentos } from '../hooks/useAgendamentos'

export default function Agendamentos() {
  const { tickets } = useAgendamentos()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold text-mar md:text-5xl">Agendamentos</h1>
      <p className="mt-2 max-w-xl">Preencha os dados do carro para gerar o tíquete de lavagem.</p>

      <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <section aria-labelledby="novo-ticket">
          <h2 id="novo-ticket" className="mb-4 font-display text-2xl font-extrabold text-mar">
            Novo tíquete
          </h2>
          <TicketForm />
        </section>

        <section aria-labelledby="fila">
          <h2 id="fila" className="mb-4 font-display text-2xl font-extrabold text-mar">
            Fila de lavagem
          </h2>
          {tickets.length === 0 ? (
            <p className="rounded-2xl border-2 border-dashed border-mar/25 p-8 text-center">
              Nenhum carro na fila. Crie o primeiro tíquete ao lado.
            </p>
          ) : (
            <ul className="space-y-4">
              {tickets.map((t) => (
                <li key={t.id}>
                  <TicketCard ticket={t} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
