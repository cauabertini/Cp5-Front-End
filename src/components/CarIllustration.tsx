interface Props {
  cor: string
  titulo: string
  className?: string
}

export default function CarIllustration({ cor, titulo, className }: Props) {
  return (
    <svg viewBox="0 0 320 160" role="img" aria-label={titulo} className={className}>
      <ellipse cx="160" cy="138" rx="130" ry="8" fill="#0a3a47" opacity="0.15" />
      <path
        d="M30 112 L38 88 Q44 76 60 74 L98 70 L120 46 Q126 40 136 40 L196 40 Q208 40 216 48 L240 72 L272 78 Q290 82 292 98 L294 112 Z"
        fill={cor}
      />
      <path d="M126 50 L108 72 L160 72 L160 50 Z" fill="#dff3f6" />
      <path d="M170 50 L170 72 L228 72 L208 52 Q204 50 198 50 Z" fill="#dff3f6" />
      <path d="M30 112 H294 V118 Q294 124 288 124 H36 Q30 124 30 118 Z" fill="#1d2a30" />
      <circle cx="90" cy="120" r="20" fill="#1d2a30" />
      <circle cx="90" cy="120" r="9" fill="#cfd8dc" />
      <circle cx="234" cy="120" r="20" fill="#1d2a30" />
      <circle cx="234" cy="120" r="9" fill="#cfd8dc" />
      <g fill="#ffffff" stroke="#12a5b8" strokeWidth="1.5" opacity="0.95">
        <circle cx="70" cy="34" r="9" />
        <circle cx="96" cy="20" r="5" />
        <circle cx="250" cy="30" r="11" />
        <circle cx="280" cy="52" r="6" />
        <circle cx="178" cy="22" r="7" />
      </g>
      <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7">
        <path d="M150 90 L200 90" />
        <path d="M58 94 L84 94" />
      </g>
    </svg>
  )
}
