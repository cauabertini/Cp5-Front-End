import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AgendamentosProvider } from './context/AgendamentosProvider'
import { router } from './routes/router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgendamentosProvider>
      <RouterProvider router={router} />
    </AgendamentosProvider>
  </StrictMode>,
)
