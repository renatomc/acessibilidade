import { Dispatch, SetStateAction } from "react";
import { FormGroup } from "../FormGroup";
import { Container, LabelComponent, Span } from "./styles";

interface RatingProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>
}

export function Rating({ label, value, setValue }: RatingProps) {
  return (
    <FormGroup>
      <LabelComponent>{label}</LabelComponent>
      <Container>
        <Span valueSelected={value} data-value="1" onClick={() => setValue("1")} tabIndex="0" className="rate fa fa-star" />
        <Span valueSelected={value} data-value="2" onClick={() => setValue("2")} tabIndex="0" className="rate fa fa-star" />
        <Span valueSelected={value} data-value="3" onClick={() => setValue("3")} tabIndex="0" className="rate fa fa-star" />
        <Span valueSelected={value} data-value="4" onClick={() => setValue("4")} tabIndex="0" className="rate fa fa-star" />
        <Span valueSelected={value} data-value="5" onClick={() => setValue("5")} tabIndex="0" className="rate fa fa-star" />
      </Container>
    </FormGroup>
  )
}