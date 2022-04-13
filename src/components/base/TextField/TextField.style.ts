import styled from 'styled-components';
import { theme } from 'utils/theme';

import { TextFieldProps, TextFieldColor } from './TextField.props';

export const Container = styled.div<TextFieldProps>``;

export const InputWrapper = styled.div<{
  isFocus: boolean;
  color: TextFieldColor;
}>`
  display: flex;
  width: fit-content;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  overflow: hidden;

  ${({ isFocus, color }) => {
    if (isFocus) {
      return `border-color: ${theme.palette[color].main};`;
    } else {
      return `
        &:hover {
            border-color: rgba(0, 0, 0, 0.87);
          }`;
    }
  }};
`;

export const Input = styled.input<TextFieldProps>`
  border: none;
  outline: none;
  padding: 6px 10px;
`;
