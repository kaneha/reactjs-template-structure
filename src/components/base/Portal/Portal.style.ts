import styled from 'styled-components';
import { theme } from 'utils/theme';

export const Container = styled.div`
  display: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${theme.zIndex.modal};
`;
