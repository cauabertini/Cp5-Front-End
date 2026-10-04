import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import Agendamentos from '../pages/Agendamentos'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Sobre from '../pages/Sobre'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'agendamentos', element: <Agendamentos /> },
      { path: 'sobre', element: <Sobre /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
