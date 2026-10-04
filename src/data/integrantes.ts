export interface Integrante {
  nome: string
  rm: string
  foto?: string 
}

export const INTEGRANTES: Integrante[] = [
  { nome: 'Cauã Bertini', rm: '570451', foto: '/integrantes/caua.jpg' },
  { nome: 'Integrante 2', rm: '000000', foto: '/integrantes/lucas.jpg' },
  { nome: 'Integrante 3', rm: '000000', foto: '/integrantes/henrique.jpg' },
  { nome: 'Integrante 4', rm: '572860', foto: '/integrantes/fortunato.jpg'}
]
