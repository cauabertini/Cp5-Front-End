import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="font-display text-5xl font-extrabold text-mar">Página não encontrada</h1>
      <p className="mt-4">O endereço que você acessou não existe.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-cera px-8 py-3 font-display font-extrabold text-asfalto">
        Voltar para a Home
      </Link>
    </div>
  )
}
