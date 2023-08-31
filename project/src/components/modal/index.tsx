import { ReactElement } from 'react';
import * as S from './style';
type  ModalType = {
    onClose: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children?: string | JSX.Element | JSX.Element[] | ReactElement | ReactElement[],
}
export default function Modal ({onClose, children}: ModalType):JSX.Element {
    return (
        <S.Modal>
            <S.Wrapper>
                <S.Close onClick={onClose}>Close</S.Close>
                {children}
            </S.Wrapper>
        </S.Modal>
    )
}
