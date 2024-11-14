import { Inter } from 'next/font/google'
import '../styles/globals.css'
import "../styles/prim.nord.css";
import avatar from '../../../src/img/avatar.webp';
const inter = Inter({ subsets: ['latin'] })


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
