import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adaan International Trading Company',
  description: 'Adaan International Trading Company',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
