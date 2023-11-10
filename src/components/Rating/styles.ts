import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 32px;
`

export const LabelComponent = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;

interface SpanProps {
  valueSelected: string;
}
export const Span = styled.span<SpanProps>`

${({valueSelected}) => 
  valueSelected === "1" && css`
     &[data-value="1"] {
        color: orange;
    }
  `}

  ${({valueSelected}) => 
  valueSelected === "2" && css`
     &[data-value="1"], 
     &[data-value="2"] {
        color: orange;
    }
  `}

  ${({valueSelected}) => 
  valueSelected === "3" && css`
     &[data-value="1"], 
     &[data-value="2"],
     &[data-value="3"] {
        color: orange;
    }
  `}

  ${({valueSelected}) => 
  valueSelected === "4" && css`
     &[data-value="1"], 
     &[data-value="2"],
     &[data-value="3"],
     &[data-value="4"] {
        color: orange;
    }
  `}

  ${({valueSelected, theme}) => 
  valueSelected === "5" && css`
     &[data-value="1"], 
     &[data-value="2"],
     &[data-value="3"],
     &[data-value="4"],
     &[data-value="5"] {
        color: ${theme.orange};
    }
  `}
`;