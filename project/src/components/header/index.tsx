import * as S from './style';
import Navigation from '../navigation/navigation';


export default function Header({ background = true }: { background?: boolean }): JSX.Element {

  if (background) {
    return (
      <S.Header $background={background}>
        <Navigation />
        <S.HeaderLogo />
        <S.Title>Онлайн-школа французского языка</S.Title>
        <S.Description>Персональные и групповые занятия для взрослых и детей</S.Description>
        <S.ButtonWrapper>
          <S.Button>Записаться на урок</S.Button>
          <S.Button>Узнать подробнее</S.Button>
        </S.ButtonWrapper>
      </S.Header>
    )
  }

  return (
    <S.Header $background={background}>
      <Navigation />
    </S.Header>
  )
}
