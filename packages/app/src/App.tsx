import React from 'react'
import { Button } from '@consilio/library'

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button onClick={() => console.log('Button has been clicked')} />
    </div>
  )
}
