import {  InputHTMLAttributes } from "react";
import { InputComponent, LabelComponent } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return(
    <>
      <LabelComponent>{label}</LabelComponent>
      <InputComponent {...rest } />
    </>
  )
}