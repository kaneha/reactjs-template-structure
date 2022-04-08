import styled from 'styled-components';
import { theme } from 'utils/theme';

import { ButtonStyleProps, ButtonSizes } from './Button.props';

const getButtonSize = (size: ButtonSizes) => {
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

export const ButtonBase = styled.button<ButtonStyleProps>`
  ${({ size }) => getButtonSize(size || 'medium')}
  outline: none;
  color: ${({ variant }) =>
    variant === 'outlined' ? theme.color.primary : 'white'};
  background-color: ${({ variant }) =>
    variant === 'contained' ? theme.color.primary : 'transparent'};
  border-radius: ${({ shape }) => (shape === 'square' ? '8px' : '16px')};
  border: 1px solid ${({ color }) => theme.color[color || 'default']};
  cursor: pointer;
  min-width: 64px;
  min-height: 42px;
  text-transform: uppercase;
  font-weight: bold;
`;
