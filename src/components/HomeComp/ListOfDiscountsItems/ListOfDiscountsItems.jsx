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
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/effect-creative';
import { ReactComponent as MdKeyboardArrowLeft } from 'images/svg/arrow-left-3099.svg';
import { ReactComponent as MdKeyboardArrowRight } from 'images/svg/arrow-right-3098.svg';
import { Link } from 'react-router-dom';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { fetchData } from 'services/APIservice';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { SectionWrapper } from 'components/baseStyles/CommonStyle.styled';
import { useTranslation } from 'react-i18next';

export const ListOfDiscountsItems = () => {
  const { t } = useTranslation();
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);
  const [listOfDiscountItems, setListOfDiscountItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      <SectionWrapper style={{ paddingBottom: '20px' }}>
        {isLoading ? onLoading() : onLoaded()}
        <SectionTitleWrap>
          <SectionTitle>{t('Discounts')}</SectionTitle>
          <Link to="/discounts" style={{ textDecoration: 'none' }}>
            <SectionSubTitle style={{ textDecoration: 'underline' }}>
              {t('See all')}
            </SectionSubTitle>
          </Link>
        </SectionTitleWrap>
        <SectionTitleWrap>
          <SectionSubTitle>
            {t('Have a look on huge discounts!')}
          </SectionSubTitle>
        </SectionTitleWrap>
        <CardContainer>
          <ViewportBox $version={'desktop'}>
            <Swiper
              key={listOfDiscountItems}
              modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
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
              breakpoints={{
                // when window width is >= 375
                425: {
                  slidesPerView: 1,
                },
                // when window width is >= 768
                700: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 1440
                1440: {
                  slidesPerView: 4,
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
      </SectionWrapper>
    </CardContainerSection>
  );
};
