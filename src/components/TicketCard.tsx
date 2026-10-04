import { nomeDaLavagem } from '../data/lavagens'
import { useAgendamentos } from '../hooks/useAgendamentos'
import type { Ticket } from '../types/ticket'

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  const { removerTicket } = useAgendamentos()

  return (
    <article className="flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-mar/10">
      <div className="flex w-28 flex-col items-center justify-center bg-cera px-3 py-4 text-center">
        <span className="font-display text-xl font-extrabold tracking-wider text-asfalto">{ticket.placa}</span>
      </div>
      <div className="flex flex-1 items-center justify-between gap-4 border-l-2 border-dashed border-mar/30 p-4">
        <div>
          <h3 className="font-display text-lg font-extrabold text-mar">{ticket.cliente}</h3>
          <p className="text-sm">{ticket.modelo}</p>
          <p className="text-sm text-asfalto/70">{nomeDaLavagem(ticket.tipo)}</p>
        </div>
        <button
          type="button"
          onClick={() => removerTicket(ticket.id)}
          aria-label={`Excluir tíquete de ${ticket.cliente}, placa ${ticket.placa}`}
          className="rounded-full border border-red-700 px-4 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          Excluir
        </button>
      </div>
    </article>
  )
}
