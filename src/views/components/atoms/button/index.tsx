import React from "react"
import styles from "./button.module.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}
      className={`${className || ""} ${styles["button"]}`}>
      {children}
    </button>
  )
}

export default Button
