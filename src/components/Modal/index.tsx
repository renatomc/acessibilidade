import { Dispatch, ReactNode, SetStateAction } from "react"
import { CloseModal, Container, ModalContainer, ModalHeader } from "./styles"

interface ModalProps {
  children: ReactNode,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
export function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  return (

    <Container isOpen={isOpen}>
      <ModalContainer>
        <ModalHeader>
          <CloseModal onClick={() => setIsOpen(false)}>
            X
          </CloseModal>
        </ModalHeader>
        {children}
      </ModalContainer>
    </Container>
  )
}