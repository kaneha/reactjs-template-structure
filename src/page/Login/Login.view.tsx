import { LoginProps } from './Login.props';
import { Container } from './Login.style';

const Login: React.FC<LoginProps> = (props) => {
  return <Container>Login Page</Container>;
};

Login.defaultProps = {};

Login.displayName = 'Login';

export default Login;
