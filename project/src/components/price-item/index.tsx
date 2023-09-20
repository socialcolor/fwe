import { useState } from 'react';
import * as S from './style';
import Modal from '../modal';
import Callback from '../callback/callback';

type PriceItemType = {
    name: string,
    iconUrl: string,
    tarifs: {
        duration: number,
        price: number,
    }[]
};

export function PriceItem({name, iconUrl, tarifs}: PriceItemType): JSX.Element {
    const [showCallBackModal, setShowCallBackModal] = useState(false);
    
    const onCallbackHandler = (evt: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        evt.preventDefault();
        setShowCallBackModal(!showCallBackModal)
      }

    return (
            <S.Price>
                <S.Header>
                    <S.PriceIcon src={iconUrl} />
                    <S.Title>{name}</S.Title>
                </S.Header>
                <S.Body>
                    <S.PriceList>
                        {tarifs.map(tarif => (
                            <S.PriceItem key={String(tarif.duration) + String(tarif.price)}>{tarif.duration} мин - {tarif.price} руб.</S.PriceItem>
                        ))}
                    </S.PriceList>
                    <S.Button onClick={onCallbackHandler}>записаться на урок</S.Button>
                </S.Body>
                {showCallBackModal && <Modal onClose={onCallbackHandler}><Callback name={'Пробный урок'} price/></Modal>}
            </S.Price>
    )
}
