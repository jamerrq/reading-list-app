// app/components/ThemeSwitcher.tsx
'use client'

import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconBrightnessDown, IconMoon } from '@tabler/icons-react'

export default function ThemeSwitcher (): JSX.Element | null {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      isIconOnly
      onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}
      className="fixed top-0 right-0 m-2 z-10"
    >
      {theme === 'dark' ? <IconMoon /> : <IconBrightnessDown />}
    </Button>
  )
}
