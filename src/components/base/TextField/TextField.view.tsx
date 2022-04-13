import { useState } from 'react';
import { FocusEvent } from 'react';
import { TextFieldProps } from './TextField.props';
import { Container, Input, InputWrapper } from './TextField.style';

const TextField: React.FC<TextFieldProps> = (props) => {
  const { className, disabled, onFocus, onBlur, color, ...textFieldProps } =
    props;

  const [isFocus, setFocus] = useState(false);

  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <Container className={className}>
      <InputWrapper isFocus={isFocus} color={color || 'primary'}>
        <Input
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          disabled={disabled}
          {...textFieldProps}
        />
      </InputWrapper>
    </Container>
  );
};

TextField.defaultProps = {};

TextField.displayName = 'TextField';

export default TextField;
