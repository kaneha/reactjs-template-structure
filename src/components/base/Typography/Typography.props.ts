import { HTMLAttributes } from 'react';

export interface TypographyStyleProps {
  color?: TypographyColor;
  variant?: TypographyVariant;
  disabled?: boolean;
  fontWeight?: TypographyFontWeight;
  numOfLine?: number;
}

export interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    TypographyStyleProps {
  component?: Component;
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

export type TypographyFontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold';
