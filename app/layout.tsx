import Navbar from './components/nav-bar';
import type { Metadata } from 'next'
import { inter } from '@/app/ui/fonts';
import './globals.scss'

export const metadata: Metadata = {
  title: 'Commerce Website',
  description: 'Created by JakobDev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
