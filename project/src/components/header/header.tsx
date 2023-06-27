import * as S from './style';
import Navigation from '../navigation/navigation';

export default function Header(): JSX.Element {
  return (
    <S.Header>
      <Navigation />
      <S.HeaderLogo/>
      <S.Title>Онлайн-школа французского языка</S.Title>
      <S.Description>Персональные и групповые занятия для взрослых и детей</S.Description>
    </S.Header>
  )
}
