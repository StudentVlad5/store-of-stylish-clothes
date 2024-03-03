import React from 'react';
import {
  CardContainer,
  CardContainerSection,
  ViewportBox,
  Pagination,
  BtnPagination,
  SectionTitle,
  SectionTitleWrap,
  SectionSubTitle,
} from './ListOfNewItems.styled';
import { ProductCard } from 'components/helpers/ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const ListOfNewItems = () => {
  return (
    <CardContainerSection>
      <SectionTitleWrap>
        <SectionTitle>Novelty</SectionTitle>
        <Link to="" style={{ textDecoration: 'none' }}>
          <SectionSubTitle>See all</SectionSubTitle>
        </Link>
      </SectionTitleWrap>
      <SectionTitleWrap>
        <SectionSubTitle>Have a look on what’s new!</SectionSubTitle>
        <div> </div>
      </SectionTitleWrap>
      <CardContainer>
        <ViewportBox $version={'desktop'}>
          <Swiper
            modules={[
              Navigation,
              Mousewheel,
              Keyboard,
              EffectCoverflow,
              Autoplay,
            ]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            keyboard={true}
            loop={true}
            loopPreventsSliding={true}
            loopedslides={1}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // coverflowEffect={{
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 1,
            //   slideShadows: true,
            // }}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </ViewportBox>
        <ViewportBox $version={'tablet'}>
          <Swiper
            modules={[
              Navigation,
              Mousewheel,
              Keyboard,
              EffectCoverflow,
              Autoplay,
            ]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              prevEl: '.swiper-btn-prev',
              nextEl: '.swiper-btn-next',
            }}
            pagination={{ clickable: false }}
            keyboard={true}
            loop={true}
            loopPreventsSliding={true}
            loopedslides={1}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </ViewportBox>
        <ViewportBox $version={'mobile'}>
          <Swiper
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-btn-prev',
              nextEl: '.swiper-btn-next',
            }}
            pagination={{ clickable: true }}
            keyboard={true}
            loop={true}
            loopPreventsSliding={true}
            loopedslides={1}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </ViewportBox>
        <Pagination>
          <BtnPagination className="swiper-button-prev">
            <MdKeyboardArrowLeft size={30} className="buttonSlide" />
          </BtnPagination>
          <BtnPagination className="swiper-button-next">
            <MdKeyboardArrowRight size={30} className="buttonSlide" />
          </BtnPagination>
        </Pagination>
      </CardContainer>
    </CardContainerSection>
  );
};
