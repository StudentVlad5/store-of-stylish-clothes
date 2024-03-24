import React, { useContext, useEffect, useState } from 'react';
import {
  CardContainer,
  CardContainerSection,
  ViewportBox,
  Pagination,
  BtnPagination,
  SectionTitle,
  SectionTitleWrap,
  SectionSubTitle,
} from '../ListOfRatesItems/ListOfRatesItems.styled';
import { ProductCard } from 'components/helpers/ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
  EffectCreative,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { fetchData } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

export const ListOfDiscountsItems = () => {
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);
  const [listOfDiscountItems, setListOfDiscountItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/shop/${selectedLanguage}/discount`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setListOfDiscountItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [selectedLanguage]);

  return (
    <CardContainerSection>
      {isLoading ? onLoading() : onLoaded()}
      <SectionTitleWrap>
        <SectionTitle>Discounts</SectionTitle>
        <Link to="" style={{ textDecoration: 'none' }}>
          <SectionSubTitle>See all</SectionSubTitle>
        </Link>
      </SectionTitleWrap>
      <SectionTitleWrap>
        <SectionSubTitle>Have a look on huge discounts!</SectionSubTitle>
      </SectionTitleWrap>
      <CardContainer>
        <ViewportBox $version={'desktop'}>
          <Swiper
            key={listOfDiscountItems}
            modules={[
              Navigation,
              Mousewheel,
              Keyboard,
              EffectCoverflow,
              Autoplay,
            ]}
            // spaceBetween={30}
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
            grabCursor={true}
            centeredSlides={true}
            speed={800}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {listOfDiscountItems &&
              listOfDiscountItems.length > 0 &&
              listOfDiscountItems.map(it => (
                <SwiperSlide key={it.article}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`shop/byid/${it.article}`}
                  >
                    <ProductCard
                      item={it}
                      selectedCurrency={selectedCurrency}
                      status={true}
                    />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </ViewportBox>
        <ViewportBox $version={'tablet'}>
          <Swiper
            key={listOfDiscountItems}
            modules={[
              Navigation,
              Mousewheel,
              Keyboard,
              EffectCoverflow,
              Autoplay,
            ]}
            // spaceBetween={30}
            slidesPerView={2}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            keyboard={true}
            loop={true}
            loopPreventsSliding={true}
            loopedslides={1}
            grabCursor={true}
            centeredSlides={true}
            speed={800}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {listOfDiscountItems &&
              listOfDiscountItems.length > 0 &&
              listOfDiscountItems.map(it => (
                <SwiperSlide key={it.article}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`shop/byid/${it.article}`}
                  >
                    <ProductCard
                      item={it}
                      selectedCurrency={selectedCurrency}
                      status={true}
                    />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </ViewportBox>
        <ViewportBox $version={'mobile'}>
          <Swiper
            key={listOfDiscountItems}
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
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            keyboard={true}
            loop={true}
            loopPreventsSliding={true}
            loopedslides={1}
            grabCursor={true}
            centeredSlides={true}
            speed={800}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
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
            {listOfDiscountItems &&
              listOfDiscountItems.length > 0 &&
              listOfDiscountItems.map(it => (
                <SwiperSlide key={it.article}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`shop/byid/${it.article}`}
                  >
                    <ProductCard
                      item={it}
                      selectedCurrency={selectedCurrency}
                      status={true}
                    />
                  </Link>
                </SwiperSlide>
              ))}
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
