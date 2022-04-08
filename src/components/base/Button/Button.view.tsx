import { ButtonProps } from './Button.props';
import { ButtonBase } from './Button.style';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...buttonProps } = props;

  return <ButtonBase {...buttonProps}>{children}</ButtonBase>;
};

Button.defaultProps = {
  variant: 'contained',
  shape: 'square',
  size: 'sm',
  color: 'default',
};

export default Button;
