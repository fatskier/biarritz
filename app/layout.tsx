import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Book - A Story Worth Reading',
  description: 'Discover an unforgettable journey through the pages of my latest book. Available now for readers everywhere.',
  keywords: ['book', 'self-published', 'author', 'reading'],
  openGraph: {
    title: 'My Book - A Story Worth Reading',
    description: 'Discover an unforgettable journey through the pages of my latest book.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
