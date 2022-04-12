import { useMemo } from 'react';
import { TypographyProps } from './Typography.props';
import { Container } from './Typography.style';

const Typography: React.FC<TypographyProps> = (props) => {
  const { component, children, ...typographyProps } = props;

  const Component = useMemo(
    () => (component ? Container.withComponent(component) : Container),
    [component]
  );

  return <Container {...typographyProps}>{children}</Container>;
};

Typography.defaultProps = {
  variant: 'body',
  color: 'text',
  component: 'p',
};

Typography.displayName = 'Typography';

export default Typography;
