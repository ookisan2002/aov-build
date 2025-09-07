
import { Outlet, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function RootLayout() {
  const [open, setOpen] = useState(false)
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <a href='#content' className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-black focus:px-3 focus:py-2 focus:text-white'>Bỏ qua nội dung</a>
      <header className='sticky top-0 z-40 w-full border-b border-black/10 bg-white/80 backdrop-blur'>
        <div className='mx-auto max-w-7xl px-4 py-3 sm:py-4'>
          <div className='flex items-center justify-between gap-4'>
            <NavLink to='/' className='flex items-center gap-2'>
              <div className='h-8 w-8 rounded-lg bg-black text-white grid place-items-center font-black'>A</div>
              <span className='text-lg sm:text-xl font-black tracking-tight'>AOV-BUILDS</span>
            </NavLink>
            <nav className='hidden md:flex items-center gap-2'>
              {navs.map(n => (
                <NavLink key={n.to} to={n.to} className={({isActive}) => 'px-3 py-2 rounded-lg text-sm font-medium transition ' + (isActive ? 'text-white bg-black/90' : 'text-black/80 hover:text-black hover:bg-black/5')}>
                  {n.label}
                </NavLink>
              ))}
            </nav>
            <button onClick={() => setOpen(v=>!v)} className='inline-flex md:hidden items-center gap-2 rounded-xl border border-black/10 px-3 py-2 text-sm font-medium hover:bg-black/5'>
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4 6H20M4 12H20M4 18H20' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/></svg>
              Menu
            </button>
          </div>
          {open && (
            <div className='mt-3 grid gap-2 md:hidden'>
              {navs.map(n => (
                <NavLink key={n.to} to={n.to} className='rounded-lg px-3 py-2 text-sm hover:bg-black/5' onClick={()=>setOpen(false)}>{n.label}</NavLink>
              ))}
            </div>
          )}
        </div>
      </header>
      <main id='content' className='mx-auto max-w-7xl px-4 py-8 sm:py-10'>
        <Outlet />
      </main>
      <footer className='border-t border-black/10 bg-white'>
        <div className='mx-auto max-w-7xl px-4 py-10'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='col-span-2'>
              <div className='flex items-center gap-2'>
                <div className='h-8 w-8 rounded-lg bg-black text-white grid place-items-center font-black'>A</div>
                <span className='text-lg font-black'>AOV-BUILDS</span>
              </div>
              <p className='mt-3 max-w-md text-sm text-gray-600'>
                Trang thông tin về game Liên Quân mobile, hướng dẫn cách chơi và build tướng trên PC & thiết bị di động.
              </p>
            </div>
            <div>
              <h4 className='text-sm font-semibold'>THÔNG TIN</h4>
              <ul className='mt-3 space-y-2 text-sm'>
                <li><NavLink to='/chinh-sach-bao-mat' className='hover:underline'>Chính Sách Bảo Mật</NavLink></li>
                <li><NavLink to='/lien-he' className='hover:underline'>Liên Hệ Quảng Cáo</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className='text-sm font-semibold'>CHIA SẺ CÙNG BẠN BÈ</h4>
              <div className='mt-3 flex gap-3'>
                <a aria-label='Facebook' href='#' className='rounded-full border border-black/10 p-2 hover:bg-black/5'>
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M13 10h3V7h-3V6a1 1 0 0 1 1-1h2V2h-2a4 4 0 0 0-4 4v1H8v3h2v8h3v-8z'/></svg>
                </a>
                <a aria-label='Telegram' href='#' className='rounded-full border border-black/10 p-2 hover:bg-black/5'>
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M9.04 15.314l-.376 5.296c.54 0 .773-.232 1.05-.51l2.525-2.416 5.235 3.838c.96.53 1.64.253 1.9-.887l3.44-16.12.001-.002c.305-1.423-.513-1.98-1.447-1.63L1.73 9.43C.346 9.965.357 10.77 1.485 11.12l5.25 1.64 12.2-7.705c.575-.376 1.1-.168.67.208'/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className='mt-8 border-t border-black/10 pt-6 text-xs text-gray-500'>
            © 2025 – UI skeleton demo (no copyrighted assets).
          </div>
        </div>
      </footer>
    </div>
  )
}

const navs = [
  { to: '/', label: 'Trang chủ' },
  { to: '/tuong', label: 'Build Tướng' },
  { to: '/khac-che', label: 'Khắc Chế' },
  { to: '/trang-bi', label: 'Trang Bị' },
  { to: '/ky-nang', label: 'Kỹ Năng' },
  { to: '/phu-hieu', label: 'Phù hiệu' },
  { to: '/phu-tro', label: 'Phụ Trợ' },
  { to: '/bang-ngoc', label: 'Bảng Ngọc' },
]
