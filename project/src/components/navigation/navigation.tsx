import * as S from './style';
import Nav from '../nav/nav';
import { useState } from 'react';
import { AppRoute } from '../../const';

export default function Navigation(): JSX.Element {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const toggleMenuMode = () =>toggleMenu(!isMenuOpen);

  return (
    <S.Nvigation>
      <S.Wrpper>
        <S.LogoLink to={AppRoute.Root}/>
        <Nav menu={isMenuOpen}/>
        <S.Burger className={isMenuOpen ? 'open' : ''} onClick={toggleMenuMode}>
          <span className='bar-top'></span>
          <span className='bar-mid'></span>
          <span className='bar-bot'></span>
        </S.Burger>
      </S.Wrpper>
    </S.Nvigation>
  )
}
