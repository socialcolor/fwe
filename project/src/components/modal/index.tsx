import {ReactNode, useLayoutEffect } from 'react';
import * as S from './style';
import React from 'react';
import { createPortal } from 'react-dom';

type ModalType = {
    onClose: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void,
    children?: string | ReactNode,
}
export default function Modal({ onClose, children }: ModalType): JSX.Element {
    useLayoutEffect(() => {
        const root = document.body;
        if (root) root.style.overflow = 'hidden'
        return () => {
            root.style.overflow = 'initial'
        }
    })
    return createPortal(<React.Fragment>
        <S.Modal>
            <S.Wrapper>
                <S.Close onClick={onClose}>X</S.Close>
                {children}
            </S.Wrapper>
            <S.Overlay onClick={onClose} />
        </S.Modal>
    </React.Fragment>, document.body)
}
