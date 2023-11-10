import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 256px;
  height: 48px;
  border-radius: 10px;
  padding: 0;
  background-color: ${({ theme }) => theme["magenta-300"]};
  color: ${({ theme }) => theme["white"]};
  box-shadow: none;
  outline: none;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px 0 ${({ theme }) => theme["text-300"]};
    border: 2px solid  ${({ theme }) => theme["magenta-500"]};
  }
`;