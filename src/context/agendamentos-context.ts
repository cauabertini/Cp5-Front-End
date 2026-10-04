import { createContext } from 'react'
import type { NovoTicket, Ticket } from '../types/ticket'

export interface AgendamentosContextValue {
  tickets: Ticket[]
  adicionarTicket: (novo: NovoTicket) => void
  removerTicket: (id: string) => void
}

export const AgendamentosContext = createContext<AgendamentosContextValue | null>(null)
