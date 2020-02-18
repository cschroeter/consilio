import React from 'react'

interface Props {
  size?: string
}

export const Button: React.FC<Props> = (props) => {
  const handleClick = () => {
    debugger
    console.log('clicked')
  }
  return (
    <button
      style={{ backgroundColor: 'red', padding: '0.5rem 1rem', border: 0, fontSize: '1rem' }}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}
