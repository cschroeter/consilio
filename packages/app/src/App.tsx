import React from 'react'
import { Button } from '@consilio/library'

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This a demo app</p>
      <Button onClick={() => console.log('blub asdfasd asdffasdf')} />
    </div>
  )
}
