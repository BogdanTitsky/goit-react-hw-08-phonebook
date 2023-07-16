import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 8px;

  &.active {
    color: tomato;
  }
`;
