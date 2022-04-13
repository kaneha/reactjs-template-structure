import { NotFoundProps } from './NotFound.props';
import { Container } from './NotFound.style';

const NotFound: React.FC<NotFoundProps> = (props) => {

  return <Container>NotFound Page</Container>
};

NotFound.defaultProps = {

}

NotFound.displayName = 'NotFound';

export default NotFound;