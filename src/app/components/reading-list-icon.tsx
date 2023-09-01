'use client'

import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { IconStarsFilled } from '@tabler/icons-react'

export default function ReadingListIcon (): JSX.Element | null {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      isIconOnly
      className="fixed top-12 right-0 m-2 z-10"
    >
      <IconStarsFilled />
    </Button>
  )
}
