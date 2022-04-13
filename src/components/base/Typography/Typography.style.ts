import styled from 'styled-components';
import { theme } from 'utils/theme';

import { TypographyStyleProps, TypographyColor } from './Typography.props';

const getTypoColor = (color: TypographyColor, disabled?: boolean) => {
  if (disabled) {
    return theme.palette.text.disabled;
  }
  if (color === 'text') {
    return theme.palette.text.primary;
  }
  return theme.palette[color].main;
};

export const Container = styled.p<TypographyStyleProps>`
  margin: 0;
  padding: 0;
  color: ${({ color, disabled }) => getTypoColor(color || 'text', disabled)};
  ${({ fontWeight }) => {
    if (fontWeight) {
      return `
      font-weight: ${fontWeight};
      `;
    }
  }}
  ${({ numOfLine }) => {
    if (Number(numOfLine) > -1) {
      return `
      display: -webkit-box;
      -webkit-line-clamp: ${numOfLine};
      -webkit-box-orient: vertical;  
      overflow: hidden;
      `;
    }
  }}
`;
