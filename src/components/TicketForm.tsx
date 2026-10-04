import { useState, type ChangeEvent, type FormEvent } from 'react'
import { OPCOES_LAVAGEM } from '../data/lavagens'
import { useAgendamentos } from '../hooks/useAgendamentos'
import type { TipoLavagem } from '../types/ticket'

interface Campos {
  cliente: string
  modelo: string
  placa: string
  tipo: TipoLavagem
}

type Erros = Partial<Record<keyof Campos, string>>

const INICIAL: Campos = { cliente: '', modelo: '', placa: '', tipo: 'simples' }
// Padrão antigo (ABC-1234) e Mercosul (ABC1D23)
const REGEX_PLACA = /^[A-Z]{3}-?\d[A-Z0-9]\d{2}$/

const inputClasses =
  'mt-1 w-full rounded-xl border border-mar/25 bg-white px-4 py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-jato aria-invalid:border-red-600'

function validar(c: Campos): Erros {
  const erros: Erros = {}
  if (c.cliente.trim().length < 2) erros.cliente = 'Informe o nome do cliente.'
  if (c.modelo.trim().length < 2) erros.modelo = 'Informe o modelo do carro.'
  if (!REGEX_PLACA.test(c.placa)) erros.placa = 'Placa inválida. Use o formato ABC1D23 ou ABC-1234.'
  return erros
}

export default function TicketForm() {
  const { adicionarTicket } = useAgendamentos()
  const [campos, setCampos] = useState<Campos>(INICIAL)
  const [erros, setErros] = useState<Erros>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setCampos((atual) => ({
      ...atual,
      [name]: name === 'placa' ? value.toUpperCase() : value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const novosErros = validar(campos)
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) return

    adicionarTicket({
      cliente: campos.cliente.trim(),
      modelo: campos.modelo.trim(),
      placa: campos.placa,
      tipo: campos.tipo,
    })
    setCampos(INICIAL)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-mar/10">
      <div>
        <label htmlFor="cliente" className="font-semibold">
          Nome do cliente
        </label>
        <input
          id="cliente"
          name="cliente"
          type="text"
          autoComplete="name"
          value={campos.cliente}
          onChange={handleChange}
          aria-invalid={!!erros.cliente}
          aria-describedby={erros.cliente ? 'erro-cliente' : undefined}
          className={inputClasses}
        />
        {erros.cliente && (
          <p id="erro-cliente" className="mt-1 text-sm text-red-700">
            {erros.cliente}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="modelo" className="font-semibold">
          Modelo
        </label>
        <input
          id="modelo"
          name="modelo"
          type="text"
          placeholder="Ex.: Onix, Corolla"
          value={campos.modelo}
          onChange={handleChange}
          aria-invalid={!!erros.modelo}
          aria-describedby={erros.modelo ? 'erro-modelo' : undefined}
          className={inputClasses}
        />
        {erros.modelo && (
          <p id="erro-modelo" className="mt-1 text-sm text-red-700">
            {erros.modelo}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="placa" className="font-semibold">
          Placa
        </label>
        <input
          id="placa"
          name="placa"
          type="text"
          maxLength={8}
          placeholder="ABC1D23"
          value={campos.placa}
          onChange={handleChange}
          aria-invalid={!!erros.placa}
          aria-describedby={erros.placa ? 'erro-placa' : undefined}
          className={`${inputClasses} uppercase`}
        />
        {erros.placa && (
          <p id="erro-placa" className="mt-1 text-sm text-red-700">
            {erros.placa}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="tipo" className="font-semibold">
          Tipo de lavagem
        </label>
        <select id="tipo" name="tipo" value={campos.tipo} onChange={handleChange} className={inputClasses}>
          {OPCOES_LAVAGEM.map((o) => (
            <option key={o.valor} value={o.valor}>
              {o.nome}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-mar px-6 py-3 font-display text-lg font-extrabold text-espuma transition-colors hover:bg-jato hover:text-asfalto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mar"
      >
        Criar tíquete
      </button>
    </form>
  )
}
