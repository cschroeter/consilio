import React, { useEffect, useState } from 'react'

export const App = () => {
  const [isActive, setIsActive] = useState(false)
  const [dynamicComponent, setDynamicComponent] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const load = async () => {
      const { WallOfText } = await import('@consilio/library')
      setDynamicComponent(<WallOfText />)
    }
    isActive ? load() : undefined
  }, [isActive])

  return (
    <div>
      <label>
        Load Button
        <input
          type="checkbox"
          style={{ display: 'block' }}
          checked={isActive}
          onChange={() => setIsActive(true)}
        />
      </label>
      {dynamicComponent}
    </div>
  )
}
