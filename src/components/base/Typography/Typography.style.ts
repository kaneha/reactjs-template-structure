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
  color: ${({ color, disabled }) => getTypoColor(color || 'text', disabled)};
  margin: 0;
`;
