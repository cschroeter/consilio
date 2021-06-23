import React, { useEffect, useState } from 'react'
import { Button } from './Button'

export const View = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [dynamicComponent, setDynamicComponent] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const load = async () => {
      const { WallOfText } = await import('@consilio/library-two')
      setDynamicComponent(<WallOfText />)
    }
    isEnabled ? load() : undefined
  }, [isEnabled])

  return (
    <div>
      <Button onClick={() => setIsEnabled(true)}>Load Component</Button>
      {dynamicComponent}
    </div>
  )
}
