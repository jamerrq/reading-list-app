import './globals.css'

import { Inter } from 'next/font/google'

import ThemeSwitcher from '@/app/components/theme-switcher'
import { Providers } from '@/app/providers'
import ReadingList from '@/app/components/reading-list'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reading List App',
  description: 'A simple reading list app built with Next.js and Tailwind CSS.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Providers>
          <ThemeSwitcher />
          <ReadingList />
          {children}
        </Providers>
      </body>

    </html>
  )
}
