import * as S from './style';
import { Menu } from '../../const';

type NavProps = {
    menu: boolean;
  }

export default function Nav({menu}:NavProps): JSX.Element {
    return (
        <S.Nav className={menu ? 'open' : ''}>
            {Object.values(Menu).map((item) => (
                <S.NavLink key={item.name} to={item.link}>{item.name}</S.NavLink>
            ))}
        </S.Nav>
    )
}
