// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { BookmarksProvider } from './context/bookmarks'

export function Providers ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <NextThemesProvider attribute='class' defaultTheme='dark'>
      <NextUIProvider>
        <BookmarksProvider>
          {children}
        </BookmarksProvider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
