import * as S from './style';
import Title from '../title';
import { PriceLists } from '../../const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/swiper.css';
import { PriceItem } from '../price-item';

export default function Prices(): JSX.Element {
    return (
        <S.PriceSection id={'price'}>
            <Title as='h3'>Наши Тарифы</Title>
            <Swiper className='swiperPrice'
                modules={[Navigation, Pagination]}
                navigation={true}
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
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                        },
                    }
                }}
            >
                {PriceLists.map(slide => (
                    <SwiperSlide>
                        <PriceItem name={slide.name} iconUrl={slide.iconUrl} tarifs={slide.tarifs} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.PriceSection>
    )
}
