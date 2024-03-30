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
} from './ListOfRatesItems.styled';
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
import { fetchData } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { SectionWrapper } from 'components/baseStyles/CommonStyle.styled';

export const ListOfRatesItems = () => {
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);
  const [listOfDiscountItems, setListOfDiscountItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/shop/${selectedLanguage}/rate`);
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
      <SectionWrapper>
        {isLoading ? onLoading() : onLoaded()}
        <SectionTitleWrap>
          <SectionTitle>Rates</SectionTitle>
          <Link to="" style={{ textDecoration: 'none' }}>
            <SectionSubTitle>See all</SectionSubTitle>
          </Link>
        </SectionTitleWrap>
        <CardContainer>
          <ViewportBox $version={'desktop'}>
            <Swiper
              key={listOfDiscountItems}
              className="swiperUpdate"
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
              observer={true}
              observeParents={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
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
                      />
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </ViewportBox>
          <ViewportBox $version={'tablet'}>
            <Swiper
              key={listOfDiscountItems}
              modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
              // spaceBetween={30}
              slidesPerView={2}
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
              observer={true}
              observeParents={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
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
                      />
                    </Link>
                  </SwiperSlide>
                ))}
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
      </SectionWrapper>
    </CardContainerSection>
  );
};
