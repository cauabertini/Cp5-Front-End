# Espuma Lava-Rápido

Checkpoint 5 – Front-End Design Engineering (1TDSPI) – FIAP
Roteamento de páginas e uso de contexto.

## Integrantes

| Nome | RM |
| ---- | -- |
| Caua | 000000 |
| Integrante 2 | 000000 |
| Integrante 3 | 000000 |

## Repositório

https://github.com/cauabertini/SEU-REPOSITORIO

## Tecnologias

React (Vite) · TypeScript · Tailwind CSS · react-router-dom · Context API (`useContext`)

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
  components/   Header, Footer, TicketForm, TicketCard, DepoimentoCard, CarIllustration
  context/      AgendamentosContext + Provider (tíquetes)
  hooks/        useAgendamentos
  layouts/      RootLayout (Header + Outlet + Footer)
  pages/        Home, Agendamentos, Sobre, NotFound
  routes/       router.tsx (createBrowserRouter)
  data/         depoimentos, lavagens, integrantes
  types/        Ticket
```

## Páginas

- `/` Home: apresentação e depoimentos.
- `/agendamentos` formulário (cliente, modelo, placa, tipo de lavagem) e tíquetes com exclusão.
- `/sobre` integrantes do grupo com RM e foto.

O cabeçalho usa o contexto para mostrar quantos carros aguardam lavagem.
