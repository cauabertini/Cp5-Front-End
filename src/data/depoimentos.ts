export interface Depoimento {
  id: number
  cliente: string
  carro: string
  cor: string
  texto: string
}

export const DEPOIMENTOS: Depoimento[] = [
  {
    id: 1,
    cliente: 'Marina Duarte',
    carro: 'Hatch vermelho',
    cor: '#d63a3a',
    texto: 'Cheguei com o carro coberto de barro da estrada e saí com ele parecendo zero. Atendimento rápido.',
  },
  {
    id: 2,
    cliente: 'Rafael Nogueira',
    carro: 'Sedã prata',
    cor: '#aab4bb',
    texto: 'Agendei pelo site, cheguei na hora e não peguei fila. A lavagem completa vale cada centavo.',
  },
  {
    id: 3,
    cliente: 'Camila Prado',
    carro: 'SUV azul',
    cor: '#2f6fd1',
    texto: 'O interior ficou impecável, sem cheiro de produto. Já virou minha parada de toda semana.',
  },
]
