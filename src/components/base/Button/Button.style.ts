import styled from 'styled-components';
import { theme } from 'utils/theme';

import { ButtonStyleProps, ButtonSize, ButtonColor } from './Button.props';

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    default:
    case 'small':
      return 'padding: 3px 9px;';
    case 'medium':
      return 'padding: 5px 15px;';
    case 'large':
      return 'padding: 7px 21px;';
  }
};

const getBackgroundColor = (color: ButtonColor, disabled?: boolean) => {
  if (disabled) return theme.palette.action.disabledBackground;
  return theme.palette[color].main;
};

export const ButtonBase = styled.button<ButtonStyleProps>`
  ${({ size }) => getButtonSize(size || 'medium')}
  outline: none;
  color: ${({ variant, color, disabled }) =>
    variant === 'outlined'
      ? getBackgroundColor(color || 'primary', disabled)
      : 'white'};
  background-color: ${({ variant, color, disabled }) =>
    variant === 'contained'
      ? getBackgroundColor(color || 'primary', disabled)
      : 'transparent'};
  border-radius: ${({ shape }) => (shape === 'square' ? '8px' : '16px')};
  border: 1px solid
    ${({ color, disabled, variant }) =>
      disabled && variant !== 'outlined'
        ? 'transparent'
        : getBackgroundColor(color || 'primary', disabled)};
  cursor: pointer;
  min-width: 64px;
  min-height: 42px;
  text-transform: uppercase;
  font-weight: bold;
`;
