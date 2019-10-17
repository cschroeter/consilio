import React from 'react'

interface Props {
  onClick: () => void
  size?: string
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      style={{ backgroundColor: 'lightblue', padding: '0.5rem 1rem', border: 0, fontSize: '1rem' }}
      onClick={props.onClick}
    >
      Hello World!
    </button>
  )
}
