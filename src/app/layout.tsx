import { Inter } from 'next/font/google'
import '../styles/globals.css'
import "../styles/prim.nord.css";
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "JadrDev - Software Mobile & Frontend Developer",
  description: "Bienvenido a JadrDev. Especialista en desarrollo móvil y frontend.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://jadrdev.com",
    siteName: "JadrDev",
    title: "JadrDev - Software Mobile & Frontend Developer",
    description: "Bienvenido a JadrDev. Especialista en desarrollo móvil y frontend.",
    images: [
      {
        url: "https://www.jadrdev.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.c4c85032.webp",
        width: 1200,
        height: 630,
        alt: "JadrDev - Software Mobile & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JadrDev - Software Mobile & Frontend Developer",
    description: "Especialista en desarrollo móvil y frontend.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <img src="https://tracker.metricool.com/c3po.jpg?hash=f012dff837caebea3512211f3e124f2e"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
