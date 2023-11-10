import styled from "styled-components";

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContainer = styled.div`
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseModal = styled.button`
  background: unset;
  border: none;
  outline: none;
  color: ${({ theme }) => theme["magenta-300"]};
  cursor: pointer;
`;