import { HTMLAttributes } from 'react';
import { ITheme } from 'types/theme';

export interface TypographyStyleProps {
  color?: TypographyColor;
  variant?: TypographyVariant;
  disabled?: boolean;
}

export interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    TypographyStyleProps {
  component?: Component;
  numOfLine?: number;
  color?: TypographyColor;
}

type Component =
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a'
  | 'caption';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'label'
  | 'caption'
  | 'overline';

export type TypographyColor =
  | 'text'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'warning'
  | 'success'
  | 'error';
