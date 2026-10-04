import type { TipoLavagem } from '../types/ticket'

export interface OpcaoLavagem {
  valor: TipoLavagem
  nome: string
  descricao: string
}

export const OPCOES_LAVAGEM: OpcaoLavagem[] = [
  { valor: 'simples', nome: 'Lavagem simples', descricao: 'Lavagem externa e secagem.' },
  { valor: 'completa', nome: 'Lavagem completa', descricao: 'Externa, interna e pretinho nos pneus.' },
  { valor: 'detalhada', nome: 'Lavagem detalhada', descricao: 'Completa, com cera e higienização.' },
]

export const nomeDaLavagem = (tipo: TipoLavagem) =>
  OPCOES_LAVAGEM.find((o) => o.valor === tipo)?.nome ?? tipo
