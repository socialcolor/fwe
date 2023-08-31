import * as S from './style'
import Title from '../title'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { PriceLists } from '../../const'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/swiper.css';
import Modal from '../modal';


export default function Prices(): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    const onModalhandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        evt.preventDefault();
        setShowModal(!showModal);
    }

    return (
        <section id={'price'}>
            <Title as='h3'>Наши Тарифы</Title>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={window.innerWidth >= 768 ? false : true}
                pagination={true}
                breakpoints={{
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                        centeredSlides: true,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                        }
                    },
                    768: {
                        centeredSlides: true,
                        slidesPerView: 2,
                        initialSlide: 1,
                        spaceBetween: 0,
                        navigation: false,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                        },
                    }
                }}
            >
                {PriceLists.map(slide => (
                    <SwiperSlide key={slide.name}>
                        <S.Price>
                            <S.Header>
                                <S.PriceIcon src={slide.iconUrl} />
                                <S.Title>{slide.name}</S.Title>
                            </S.Header>
                            <S.Body>
                                <S.PriceList>
                                    {slide.tarifs.map(tarif => (
                                        <S.PriceItem key={String(tarif.duration) + String(tarif.price)}>{tarif.duration} мин - {tarif.price} руб.</S.PriceItem>
                                    ))}
                                </S.PriceList>
                                <S.Button onClick={onModalhandler}>записаться на урок</S.Button>
                            </S.Body>
                        </S.Price>
                    </SwiperSlide>
                ))}
            </Swiper>
            {showModal && createPortal(<Modal onClose={onModalhandler}></Modal>, document.body)}
        </section>
    )
}
