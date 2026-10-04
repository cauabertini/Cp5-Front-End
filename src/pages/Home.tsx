import { Link } from 'react-router-dom'
import CarIllustration from '../components/CarIllustration'
import DepoimentoCard from '../components/DepoimentoCard'
import { DEPOIMENTOS } from '../data/depoimentos'
import { OPCOES_LAVAGEM } from '../data/lavagens'

export default function Home() {
  return (
    <>
      <section className="bg-linear-to-b from-jato/25 to-espuma">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-mar md:text-7xl">
              Chegou sujo.
              <br />
              Sai brilhando.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Lavagem rápida, produtos que respeitam a pintura e agendamento online para você não perder tempo na fila.
            </p>
            <Link
              to="/agendamentos"
              className="mt-8 inline-block rounded-full bg-cera px-8 py-4 font-display text-lg font-extrabold text-asfalto transition-colors hover:bg-mar hover:text-espuma focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mar"
            >
              Agendar lavagem
            </Link>
          </div>
          <CarIllustration cor="#12a5b8" titulo="Carro azul cercado de bolhas de sabão" className="h-auto w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="servicos">
        <h2 id="servicos" className="font-display text-3xl font-extrabold text-mar">
          Escolha o nível de cuidado
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {OPCOES_LAVAGEM.map((o) => (
            <li key={o.valor} className="rounded-2xl bg-mar p-6 text-espuma">
              <h3 className="font-display text-xl font-extrabold text-cera">{o.nome}</h3>
              <p className="mt-2 leading-relaxed text-espuma/85">{o.descricao}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-16" aria-labelledby="depoimentos">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="depoimentos" className="font-display text-3xl font-extrabold text-mar">
            Quem lavou aqui, recomenda
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d) => (
              <DepoimentoCard key={d.id} depoimento={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
