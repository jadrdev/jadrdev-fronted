import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import "../styles/prim.nord.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JadrDev - El Blog de Joshua A. Díaz Robayna',
  description: 'El Blog de Joshua A. Díaz Robayna',
  authors: [
    {
      name: 'Joshua A. Díaz Robayna',
      url: 'https://jadrdev.com',
    },
  ],
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://jadrdev.com',
    title: 'JadrDev - El Blog de Joshua A. Díaz Robayna',
    description: 'El Blog de Joshua A. Díaz Robayna',
    images: [
      {
        url: 'https://jadrdev.com/img/avatar.webp',
        width: 800,
        height: 600,
        alt: 'JadrDev - El Blog de Joshua A. Díaz Robayna',
      },
    ],
  },
  twitter: {
    site: '@jadrdev',
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
