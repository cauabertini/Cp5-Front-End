import type { Depoimento } from '../data/depoimentos'
import CarIllustration from './CarIllustration'

export default function DepoimentoCard({ depoimento }: { depoimento: Depoimento }) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-mar/10">
      <div className="bg-jato/10 px-6 pt-6">
        <CarIllustration
          cor={depoimento.cor}
          titulo={`${depoimento.carro} depois da lavagem`}
          className="h-auto w-full"
        />
      </div>
      <blockquote className="flex-1 px-6 pt-5 text-base leading-relaxed">
        <p>“{depoimento.texto}”</p>
      </blockquote>
      <figcaption className="px-6 pb-6 pt-4">
        <span className="block font-display text-lg font-extrabold text-mar">{depoimento.cliente}</span>
        <span className="text-sm text-asfalto/70">{depoimento.carro}</span>
      </figcaption>
    </figure>
  )
}
