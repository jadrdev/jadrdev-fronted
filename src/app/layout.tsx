import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import "../styles/prim.nord.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JadrDev - El Blog de Joshua A. Díaz Robayna',
  description: 'El Blog de Joshua A. Díaz Robayna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
