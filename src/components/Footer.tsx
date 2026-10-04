export default function Footer() {
  return (
    <footer className="bg-asfalto text-espuma/80">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold text-espuma">Espuma Lava-Rápido</p>
          <p className="mt-1">Seu carro limpo, sem perder o dia.</p>
        </div>
        <address className="not-italic">
          <p className="font-semibold text-espuma">Endereço</p>
          <p>Av. Paulista, 1106 – São Paulo, SP</p>
          <p>(11) 4000-1234</p>
        </address>
        <div>
          <p className="font-semibold text-espuma">Horário</p>
          <p>Segunda a sábado, 8h às 19h</p>
          <p>Domingo, 8h às 14h</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Espuma Lava-Rápido. Projeto acadêmico FIAP.
      </p>
    </footer>
  )
}
