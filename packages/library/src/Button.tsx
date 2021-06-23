import React from 'react'

interface ButtonProps {
  size?: string
  onClick: () => void
  children?: React.ReactNode
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        color: 'white',
        backgroundColor: 'blue',
        padding: '0.5rem 1rem',
        border: 0,
        fontSize: '1rem',
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
