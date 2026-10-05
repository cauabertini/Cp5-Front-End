export interface Integrante {
  nome: string
  rm: string
  foto?: string 
}

export const INTEGRANTES: Integrante[] = [
  { nome: 'Cauã Bertini', rm: '570451', foto: '/integrantes/caua.jpg' },
  { nome: 'Lucas Costa', rm: '571016'},
  { nome: 'Integrante 3', rm: '000000', foto: '/integrantes/henrique.jpg' },
  { nome: 'Lucas Fortunato', rm: '572860', foto: '/integrantes/fortunato.jpg'}
]
