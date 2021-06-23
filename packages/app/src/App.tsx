import React, { useEffect, useState } from 'react'

export const App = () => {
  const [isActive, setIsActive] = useState(false)
  const [button, setButton] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const load = async () => {
      const { Button } = await import('@consilio/library')
      setButton(<Button>Hello World</Button>)
    }
    isActive ? load() : undefined
  }, [isActive])

  return (
    <div>
      <label>
        Load Button
        <input
          name="isGoing"
          type="checkbox"
          style={{ display: 'block' }}
          checked={isActive}
          onChange={() => setIsActive(true)}
        />
      </label>
      {button}
    </div>
  )
}
