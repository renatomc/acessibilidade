import styled from "styled-components";

export const InputComponent = styled.input`
  border-radius: 10px;
  border: solid 1px rgba(0, 8, 38, 0.16);
  padding: 8px;
  box-sizing: border-box;
  height: 48px;

  &:hover, &:focus {
    border: solid 1px ${({ theme }) => theme["blue-300"]};
  } 
`;

export const LabelComponent = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;