import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import "../styles/prim.nord.css";
import { NextSeo } from 'next-seo';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | JadrDev - Joshua A. Díaz Robayna',
    default: 'JadrDev - Software Mobile & Frontend Developer ', // a default is required when creating a template
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
    
    

      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
