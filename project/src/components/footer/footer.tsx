import Copyright from '../copyright/copyright';
import { MenuFooter } from '../../const';
import * as S from './style';

export default function Footer(): JSX.Element {
    return (
        <S.Footer>
            <S.Wrapper>
                <S.Logo />
                <S.Nav>
                    <S.Caption>Карта сайта</S.Caption>
                    <S.NavList>
                        {Object.values(MenuFooter).map((item) => (<S.NavLink key={item.name} to={item.link} >{item.name}</S.NavLink>))}
                    </S.NavList>
                </S.Nav>
                <S.Contacts>
                    <S.ContactsCaption>Контакты</S.ContactsCaption>
                    <S.Text>
                        <S.NavLink to={'mailto:bonjour@frenchwithemilie.ru'}>Написать на Email</S.NavLink>
                    </S.Text>
                    <S.Text>ИП Леонович Э.В.</S.Text>
                    <S.Text>ОГРНИП 323246800115786</S.Text>
                    <S.Text>ИНН 246312003224</S.Text>
                </S.Contacts>
            </S.Wrapper>
            <Copyright />
        </S.Footer>
    )
}
