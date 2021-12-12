import { lighten } from 'polished';
import styled from 'styled-components';

type NavLinkContainerProps = {
  isActive: boolean;
};

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
