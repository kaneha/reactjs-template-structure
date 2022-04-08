import { ButtonHTMLAttributes } from 'react';
import { ITheme } from 'types/theme';

export interface ButtonStyleProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ButtonColor;
  shape?: ButtonShapes;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleProps {
  color?: ButtonColor;
}

type ButtonVariants = 'contained' | 'outlined';
type ButtonShapes = 'rounded' | 'square';
export type ButtonSizes = 'small' | 'medium' | 'large';
type ButtonColor = keyof ITheme['color'];
