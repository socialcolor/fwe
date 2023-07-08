import * as S from './style'
import Title from '../title/title'
import { PriceLists } from '../../const'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/swiper.css';


export default function Prices(): JSX.Element {


    return (
        <div id={'price'}>
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
                        pagination: false
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
                                <S.Button>записаться на урок</S.Button>
                            </S.Body>
                        </S.Price>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
