import { useCallback, useMemo, useState, type ReactNode } from 'react'
import type { NovoTicket, Ticket } from '../types/ticket'
import { AgendamentosContext } from './agendamentos-context'

export function AgendamentosProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<Ticket[]>([])

  const adicionarTicket = useCallback((novo: NovoTicket) => {
    setTickets((atual) => [...atual, { ...novo, id: crypto.randomUUID() }])
  }, [])

  const removerTicket = useCallback((id: string) => {
    setTickets((atual) => atual.filter((t) => t.id !== id))
  }, [])

  const value = useMemo(
    () => ({ tickets, adicionarTicket, removerTicket }),
    [tickets, adicionarTicket, removerTicket],
  )

  return <AgendamentosContext.Provider value={value}>{children}</AgendamentosContext.Provider>
}
