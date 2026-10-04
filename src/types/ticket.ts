export type TipoLavagem = 'simples' | 'completa' | 'detalhada'

export interface Ticket {
  id: string
  cliente: string
  modelo: string
  placa: string
  tipo: TipoLavagem
}

export type NovoTicket = Omit<Ticket, 'id'>
