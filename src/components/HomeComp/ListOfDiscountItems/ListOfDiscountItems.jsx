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
} from './ListOfDiscountItems.styled';
import { ProductCard } from 'components/helpers/ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCreative,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const ListOfDiscountItems = () => {
  return (
    <CardContainerSection>
      <SectionTitleWrap>
        <SectionTitle>Discounts</SectionTitle>
        <Link to="" style={{ textDecoration: 'none' }}>
          <SectionSubTitle>See all</SectionSubTitle>
        </Link>
      </SectionTitleWrap>
      <CardContainer>
        <ViewportBox $version={'desktop'}>
          <Swiper
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            // spaceBetween={30}
            slidesPerView={3}
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
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
        <ViewportBox $version={'tablet'}>
          <Swiper
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            // spaceBetween={30}
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
        <ViewportBox $version={'mobile'}>
          <Swiper
            modules={[
              Navigation,
              Mousewheel,
              Keyboard,
              Autoplay,
              EffectCreative,
            ]}
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
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
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
        <Pagination>
          <BtnPagination className="swiper-btn-prev">
            <MdKeyboardArrowLeft size={30} className="buttonSlide" />
          </BtnPagination>
          <BtnPagination className="swiper-btn-next">
            <MdKeyboardArrowRight size={30} className="buttonSlide" />
          </BtnPagination>
        </Pagination>
      </CardContainer>
    </CardContainerSection>
  );
};
