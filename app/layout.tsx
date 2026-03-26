import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'BMX Colombia',
  description: 'Portal oficial del BMX en Colombia',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#0D0D0D] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
