import styled from "styled-components"
import { Menu } from '../const';
import { DeviceQuery } from "../styles/device-query";

type NavProps = {
    menu: boolean;
  }


const StyledNav = styled.nav`
    width: 213px;
    position: absolute;
    top: 69px;
    right: 21px;
    z-index: 2;
    max-height: 0;
    padding: 0;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    overflow: hidden;
    transition: max-height .3s linear;

    &.open {
    max-height: 500px;
    }

    @media ${DeviceQuery.tablet} {
        top: 101px;
    }

`
const StyledNavLink = styled.a`
    width: 100%;
    margin: 0;
    padding: 3px 13px;
    list-style-type: none;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.khaki };
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.greyLight};
    
    &:first-child {
        padding-top: 6px;
    }

    &:last-child {
        border-bottom: none;
        padding-bottom: 6px;
    }
    
    &:hover {
    text-decoration: underline;
    }

    &:active {
    text-decoration: underline;
    opacity: 0.6;
    }
 `

export default function Nav({menu}:NavProps): JSX.Element {
    console.log(menu)
    return (
        <StyledNav className={menu ? 'open' : ''}>
            {Object.values(Menu).map((item) => (
                <StyledNavLink key={item.name} href={item.link} >{item.name}</StyledNavLink>
            ))}
        </StyledNav>
    )
}
