import * as S from './style';
import Title from '../title/title';
import { TeachersList } from '../../const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/swiper.css';

export default function Teachers(): JSX.Element {
    return (
        <S.Teachers id={'teachers'}>
            <Title as={'h3'}>наши преподаватели</Title>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 2500,
                }
                  }
                loop={true}
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
