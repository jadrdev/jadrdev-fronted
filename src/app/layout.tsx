import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import "../styles/prim.nord.css";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Joshua A. Díaz Robayna" />
      <meta name="author" content="Joshua A. Díaz Robayna" />
      <meta name="keywords" content="Joshua A. Díaz Robayna" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      <meta name="generator" content="NextJS" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jadrdev" />
      <meta name="twitter:creator" content="@jadrdev" />
      <meta name="twitter:title" content="Joshua A. Díaz Robayna" />
      <meta name="twitter:description" content="Joshua A. Díaz Robayna" />
      <meta name="twitter:image" content="https://jadr.dev/img/avatar.webp" />
      <meta property="og:title" content="Joshua A. Díaz Robayna" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jadr.dev" />
      <meta property="og:image" content="https://jadr.dev/img/avatar.webp" />
      <meta property="og:description" content="Joshua A. Díaz Robayna" />
      <meta property="og:site_name" content="Joshua A. Díaz Robayna" />
      <meta property="og:locale" content="es_ES" />
      <meta property="article:author" content="https://jadr.dev" />
      <meta property="article:publisher" content="https://jadr.dev" />
      <meta property="article:tag" content="Joshua A. Díaz Robayna" />

  
      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
