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
        <S.Reviews id={'review'} className={'reviews'}>
            <S.Title as={'h3'}>Что говорят наши ученики</S.Title>
            <S.Wrapper>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={true}
                    pagination={{
                        clickable: true
                    }}
                    slidesPerView={'auto'}
                    loop={true}
                    className='swiperTeacher'
                >
                    {ReviewsList.map(slide => (
                        <SwiperSlide key={slide.name}>
                            <S.Review>
                                <S.ReviewWrapper>
                                    <S.Circle src={slide.img} />
                                    <S.Name>{slide.name}</S.Name>
                                </S.ReviewWrapper>
                                <S.Caption>{slide.text}</S.Caption>
                            </S.Review>
                        </SwiperSlide>
                    )
                    )}
                </Swiper >
            </S.Wrapper>
        </S.Reviews>
    )
}
