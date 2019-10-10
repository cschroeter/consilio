import React from 'react'

interface Props {
  onClick: () => void
  size?: string
}

export const Button: React.FC<Props> = (props) => {
  return <button onClick={props.onClick}>Hello World!</button>
}
