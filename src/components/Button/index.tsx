import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonComponent } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return(
    <ButtonComponent {...rest}>
      {children}
    </ButtonComponent>
  )
}