import * as S from './style';
import Title from '../title';
import { TeachersList } from '../../const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/swiper.css';

export default function Teachers(): JSX.Element {
    const TeacherLengh:number = TeachersList.length < 3 ? TeachersList.length : 3;
    return (
        <S.Teachers id={'teachers'}>
            <Title as={'h3'}>наши преподаватели</Title>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{clickable: true}}
                autoplay={{delay: 2500}}
                loop={true}
                slidesPerView={'auto'}
                breakpoints={{
                    320: {
                        slidesPerView: 'auto'
                    },
                    768: {
                        slidesPerView: TeacherLengh,
                        spaceBetween: 0,
                    }
                }}
            >
                {TeachersList.map(slide => (
                    <SwiperSlide key={slide.name}>
                        <S.Teacher>
                            <S.Circle src={slide.img} />
                            <S.Name>{slide.name}</S.Name>
                            <S.Caption>{slide.title}</S.Caption>
                        </S.Teacher>
                    </SwiperSlide>
                )
                )}
            </Swiper >
        </S.Teachers>
    )
}
