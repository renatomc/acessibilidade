import { ReactNode } from "react";
import { Container } from "./styles";

interface FromGroupProps {
  children: ReactNode
}

export function FormGroup({ children }: FromGroupProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}