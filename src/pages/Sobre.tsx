import { INTEGRANTES } from '../data/integrantes'

function iniciais(nome: string) {
  return nome
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export default function Sobre() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold text-mar md:text-5xl">Sobre</h1>
      <p className="mt-2 max-w-xl">
        Projeto do Checkpoint 5 de Front-End Design Engineering, turma 1TDSPI, FIAP. Conheça o grupo.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INTEGRANTES.map((i) => (
          <li key={`${i.nome}-${i.rm}`}>
            <figure className="flex items-center gap-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-mar/10">
              {i.foto ? (
                <img src={i.foto} alt={`Foto de ${i.nome}`} className="size-24 rounded-full object-cover" />
              ) : (
                <div
                  role="img"
                  aria-label={`Foto de ${i.nome} (ainda não adicionada)`}
                  className="flex size-24 shrink-0 items-center justify-center rounded-full bg-jato font-display text-3xl font-extrabold text-white"
                >
                  {iniciais(i.nome)}
                </div>
              )}
              <figcaption>
                <span className="block font-display text-xl font-extrabold text-mar">{i.nome}</span>
                <span className="text-sm">RM {i.rm}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
