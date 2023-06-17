import styled from 'styled-components'
import Title from './title'

const StyledPrices = styled.ul`
    font-family: 'Inter', sans-serif;
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`
const StyledPrice = styled.li`
    width: 277px;
    height: 377px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-content: center;
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: 16px;
    margin: auto;
    overflow: hidden;
`
const StyledHeader = styled.div`
    width: 277px;
    min-height: 110px;
    padding: 21px 19px 15px 19px;
    background-color: ${({theme}) => theme.colors.khakiSecondary};
    text-align: center;
    border-bottom: 1px solid ${({theme}) => theme.colors.black};
`
const StyledPriceIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
`
const StyledTitle = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${({theme}) => theme.colors.khaki};
    margin: 0;
    margin-top: 14px;
`
const StyledBody = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
`
const StyledPriceList = styled.ul`
    margin: auto;
    padding: 0;
`
const StyledPriceItem = styled.li`
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: ${({theme}) => theme.colors.khaki};
    margin: 0;
`
const StyledButton = styled.button`
    outline: 0;
    border: 0;
    margin: 0;
    padding: 18px 14px;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.khaki};
    
    &:active {
        opacity: 0.7;
    }
`
export default function Prices ():JSX.Element {
    return (
        <>
        <Title as='h3'>Наши Тарифы</Title>
        <StyledPrices>
            <StyledPrice> 
                <StyledHeader>
                    <StyledPriceIcon src='./img/person.svg'/>
                    <StyledTitle>Индивидуальные уроки</StyledTitle>
                </StyledHeader>
                <StyledBody>
                    <StyledPriceList>
                        <StyledPriceItem>30 мин - 1000 руб.</StyledPriceItem>
                        <StyledPriceItem>45 мин - 1300 руб.</StyledPriceItem>
                        <StyledPriceItem>60 мин - 1800 руб.</StyledPriceItem>
                    </StyledPriceList>
                    <StyledButton>записаться на урок</StyledButton>
                </StyledBody>
            </StyledPrice>
        </StyledPrices>
        </>
    )
}
