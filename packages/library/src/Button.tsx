import React from 'react'

interface ButtonProps {
  size?: string
  children?: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <button
      style={{
        color: 'white',
        backgroundColor: 'blue',
        padding: '0.5rem 1rem',
        border: 0,
        fontSize: '1rem',
      }}
      onClick={handleClick}
    >
      {props.children}
    </button>
  )
}
