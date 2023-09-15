import * as S from './style';
import Navigation from '../navigation/navigation';
import Modal from '../modal';
import { useState } from 'react';
import Callback from '../callback/callback';

export default function Header({ background = true }: { background?: boolean }): JSX.Element {
  const [showCallBackModal, setShowCallBackModal] = useState(false);
  const [showQuestionkModal, setShowQuestionkModal] = useState(false);

  const onCallbackHandler = (evt: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    evt.preventDefault();
    setShowCallBackModal(!showCallBackModal)
  }
  const onQuestionHandler = (evt: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    evt.preventDefault();
    setShowQuestionkModal(!showQuestionkModal)
  }

  if (background) {
    return (
      <S.Header $background={background}>
        <Navigation />
        <S.HeaderLogo />
        <S.Title>Онлайн-школа французского языка</S.Title>
        <S.Description>Персональные и групповые занятия для взрослых и детей</S.Description>
        <S.ButtonWrapper>
          <S.Button onClick={onCallbackHandler}>Записаться на урок</S.Button>
          <S.Button onClick={onQuestionHandler}>Узнать подробнее</S.Button>
        </S.ButtonWrapper>
        {showCallBackModal && <Modal onClose={onCallbackHandler}><Callback /></Modal>}
        {showQuestionkModal && <Modal onClose={onQuestionHandler}><Callback question /></Modal>}
      </S.Header>
    )
  }

  return (
    <S.Header $background={background}>
      <Navigation />
    </S.Header>
  )
}
