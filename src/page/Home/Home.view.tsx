import { HomeProps } from './Home.props';
import { Container } from './Home.style';

const Home: React.FC<ButtonProps> = (props) => {
  const {
    className
  } = props;

  return <Container className={className}></Container>
};

export default Home;