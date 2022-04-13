import { InputHTMLAttributes } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: TextFieldColor;
  startComp?: React.ReactNode;
  endComp?: React.ReactNode;
}

export type TextFieldColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warning'
  | 'error';
