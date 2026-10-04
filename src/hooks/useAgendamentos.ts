import { useContext } from 'react'
import { AgendamentosContext } from '../context/agendamentos-context'

export function useAgendamentos() {
  const contexto = useContext(AgendamentosContext)
  if (!contexto) {
    throw new Error('useAgendamentos deve ser usado dentro de <AgendamentosProvider>')
  }
  return contexto
}
