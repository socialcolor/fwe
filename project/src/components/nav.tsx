import styled from 'styled-components';
import { Menu } from '../const';

const StyledNav = styled.nav`
  width: 100%;
  height: auto;
  `

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.default};
  font-size: 22px;
  line-height: 27px;
  text-transform: uppercase;
 `

export default function Nav(): JSX.Element {
  return (
    <StyledNav>
      {Object.values(Menu).map((item) => (
        <StyledLink key={item.name} href={item.link}>{item.name}</StyledLink>
      ))}
    </StyledNav>
  )
}
