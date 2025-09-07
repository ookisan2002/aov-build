
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './components/RootLayout'
import Home from './pages/Home'
import Tuong from './pages/Tuong'
import KhacChe from './pages/KhacChe'
import TrangBi from './pages/TrangBi'
import KyNang from './pages/KyNang'
import PhuHieu from './pages/PhuHieu'
import PhuTro from './pages/PhuTro'
import BangNgoc from './pages/BangNgoc'
import ChinhSach from './pages/ChinhSach'
import LienHe from './pages/LienHe'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'tuong', element: <Tuong /> },
      { path: 'tuong/:name', element: <Tuong /> },
      { path: 'khac-che', element: <KhacChe /> },
      { path: 'trang-bi', element: <TrangBi /> },
      { path: 'ky-nang', element: <KyNang /> },
      { path: 'phu-hieu', element: <PhuHieu /> },
      { path: 'phu-tro', element: <PhuTro /> },
      { path: 'bang-ngoc', element: <BangNgoc /> },
      { path: 'chinh-sach-bao-mat', element: <ChinhSach /> },
      { path: 'lien-he', element: <LienHe /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
