import { createPortal } from 'react-dom';
import { PortalProps } from './Portal.props';
import { Container } from './Portal.style';

const root = document.getElementById('root') as HTMLElement;

const Portal: React.FC<PortalProps> = (props) => {
  const { children, open, ...portalProps } = props;

  return open
    ? createPortal(<Container {...portalProps}>{children}</Container>, root)
    : null;
};

Portal.defaultProps = {};

Portal.displayName = 'Portal';

export default Portal;
