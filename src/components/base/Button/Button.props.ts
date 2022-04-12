import { ButtonHTMLAttributes } from 'react';
import { ITheme } from 'types/theme';

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  shape?: ButtonShape;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleProps {
  color?: ButtonColor;
  disabled?: boolean;
}

export type ButtonVariant = 'contained' | 'outlined';
type ButtonShape = 'rounded' | 'square';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'info' | 'warning' | 'error';
