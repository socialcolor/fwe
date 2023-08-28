import * as S from './style';
import { ReviewsList } from '../../const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/swiper.css';

export default function Reviews(): JSX.Element {
    return (
        <S.Reviews className={'reviews'}>
            <S.Title as={'h3'}>Что говорят наши ученики</S.Title>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                slidesPerView={'auto'}
                loop={true}
            >
                {ReviewsList.map(slide => (
                    <SwiperSlide key={slide.name}>
                        <S.Review>
                            <S.Circle src={slide.img} />
                            <S.Name>{slide.name}</S.Name>
                            <S.Caption>{slide.title}</S.Caption>
                        </S.Review>
                    </SwiperSlide>
                )
                )}
            </Swiper >
        </S.Reviews>
    )
}
