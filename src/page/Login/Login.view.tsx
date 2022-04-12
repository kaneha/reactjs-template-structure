import { LoginProps } from './Login.props';
import { Container } from './Login.style';

const Login: React.FC<LoginProps> = (props) => {
  const {
    children,
    ...LoginProps
  } = props;

  return <Container {...LoginProps}>{children}</Container>
};

Login.defaultProps = {

}

Login.displayName = 'Login';

export default Login;