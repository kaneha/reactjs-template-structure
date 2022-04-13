import { TypographyProps } from './Typography.props';
import { Container } from './Typography.style';

const Typography: React.FC<TypographyProps> = (props) => {
  const { component, children, variant, ...typographyProps } = props;

  const Component = (() => {
    if (component) {
      if (variant) {
        switch (variant) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
          case 'label':
          case 'caption':
            return Container.withComponent(variant);
          case 'body':
            return Container.withComponent('p');
          case 'overline':
            return Container.withComponent('span');
          default:
            return Container;
        }
      } else {
        return Container.withComponent('p');
      }
    } else {
      return Container;
    }
  })();

  return (
    <Component variant={variant} {...typographyProps}>
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  variant: 'body',
  color: 'text',
  component: 'p',
};

Typography.displayName = 'Typography';

export default Typography;
