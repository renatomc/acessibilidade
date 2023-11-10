import {  TextareaHTMLAttributes } from "react";
import { TextAreaComponent, LabelComponent } from "./styled";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextArea({ label, ...rest }: TextAreaProps) {
  return(
    <>
      <LabelComponent>{label}</LabelComponent>
      <TextAreaComponent {...rest} />
    </>
  )
}