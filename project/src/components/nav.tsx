import styled from "styled-components"
import { Menu } from '../const';
import { DeviceQuery } from "../styles/device-query";

type NavProps = {
    menu: boolean;
  }

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    padding: 22px 0 0 10px;

    @media ${DeviceQuery.mobile} {
        position: absolute;
        top: 69px;
        right: 21px;
        width: 213px;
        max-height: 0;
        border-radius: 10px;
        flex-direction: column;
        flex-wrap: nowrap;
        background-color: ${({theme}) => theme.colors.white};
        z-index: 2;
        padding: 0;
        overflow: hidden;
        transition: max-height .3s linear;

        &.open {
        max-height: 500px;
        }
    }

`
const StyledNavLink = styled.a`
    list-style-type: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 22px;
    line-height: 27px;
    margin-right: 19px;
    text-decoration: none;

    &:hover {
    text-decoration: underline;
    }
    &:active {
    text-decoration: underline;
    opacity: 0.6;
    }

    @media ${DeviceQuery.mobile} {
        width: 100%;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        margin: 0;
        padding: 3px 13px;
        color: ${({theme}) => theme.colors.khaki };
        border-bottom: 1px solid ${({theme}) => theme.colors.greyLight};

        &:first-child {
            padding-top: 6px;
        }
        &:last-child {
            border-bottom: none;
            padding-bottom: 6px;
        }
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
