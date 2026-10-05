export interface Integrante {
  nome: string
  rm: string
  foto?: string 
}

export const INTEGRANTES: Integrante[] = [
  { nome: 'Cauã Bertini', rm: '570451', foto: '/integrantes/caua.jpg' },
  { nome: 'Lucas Costa', rm: '571016'},
  { nome: 'Henrique Soares', rm: '573618', foto: '/integrantes/henrique.jpg' },
  { nome: 'Lucas Fortunato', rm: '572860', foto: '/integrantes/fortunato.jpg'}
]
