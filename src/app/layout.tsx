import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import "../styles/prim.nord.css";
import avatar from '../../../src/img/avatar.webp';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | JadrDev - Joshua A. Díaz Robayna',
    default: 'JadrDev - Software Mobile & Frontend Developer ', // a default is required when creating a template
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://jadrdev.com',
    siteName: 'JadrDev',
    title: 'JadrDev - Software Mobile & Frontend Developer',
    images: [
      {
        url: 'https://www.jadrdev.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.c4c85032.webp',
        width: 1200,
        height: 630,
        alt: 'JadrDev - Software Mobile & Frontend Developer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JadrDev - Software Mobile & Frontend Developer",
    description: "Software Mobile & Frontend Developer",
    creator: "@jadrdev",
    images: [
      {
        url: "https://www.jadrdev.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.c4c85032.webp",
        width: 1200,
        height: 630,
        alt: "JadrDev - Software Mobile & Frontend Developer",
      },
    ],
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
