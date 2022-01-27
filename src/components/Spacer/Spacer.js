import styled from 'styled-components/macro';
import { onTablet } from '../../styles';

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;

  ${onTablet} {
    display: ${(p) => (p.desktopOnly ? 'none' : 'block')};
  }
`;

export default Spacer;
