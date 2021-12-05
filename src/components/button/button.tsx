import React, { ReactNode } from 'react'
import { ButtonContainer } from 'components/button/style'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'block'
  rounded?: boolean
  children: ReactNode
}
export const Button = ({
  variant = 'primary',
  rounded = false,
  size = 'block',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      disabled={disabled}
      variant={variant}
      rounded={rounded}
      size={size}
      {...props}
    >
      {children}
    </ButtonContainer>
  )
}
