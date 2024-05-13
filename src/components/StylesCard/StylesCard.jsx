import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { onSuccess, onInfo } from 'components/helpers/Messages/NotifyMessages';
import { reloadValue } from 'redux/reload/selectors';
import { addFavorite, removeFavorite } from 'redux/auth/operations';
import { getUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { addReload } from 'redux/reload/slice';
import theme from 'components/baseStyles/Variables.styled';
import * as SC from './StylesCard.styled';
import { fetchData } from '../../services/APIservice';
import { ReactComponent as Car } from 'images/svg/shipping.svg';
import { ReactComponent as Done } from 'images/svg/done.svg';
import { ReactComponent as Open } from 'images/svg/open.svg';

import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { selectCurrency, selectNewPrice } from 'services/selectCurrency';

export const StylesCard = ({
  item,
  selectedCurrency,
  addToBasket,
  selectedLanguage,
}) => {
  const {
    title,
    article,
    man_women_ua,
    man_women_ru,
    man_women_en,
    man_women_de,
    mainImage,
    images = '',
    list_of_articles,
    status,
  } = item[0];
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const routeParams = useParams();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [listOfStyles, setListOfStyles] = useState([]);
  const toggleIncludedDetails = it => {
    setShowIncludedDetails(state => !state);
    const element = document.getElementById(it);
    console.log('element', element);
    element.classList.toggle('active');
  };
  const [showIncludedDetails, setShowIncludedDetails] = useState(false);

  useEffect(() => {
    async function getData(it) {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/shop/byid/${it}`);
        setListOfStyles(prev => [...prev, ...data]);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    list_of_articles.map(it => getData(it));
  }, []);

  let man_women = man_women_ua;

  if (selectedLanguage === 'ru') {
    man_women = man_women_ru;
  }
  if (selectedLanguage === 'en') {
    man_women = man_women_en;
  }
  if (selectedLanguage === 'de') {
    man_women = man_women_de;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);
  const user = useSelector(getUser).favorites;
  let favorites;
  user ? (favorites = user.map(item => item)) : (favorites = []);

  useEffect(() => {
    let imageArray = [];
    if (images) {
      imageArray = images.split(',');
    }
    if (mainImage) {
      imageArray.unshift(mainImage);
    }
    setSlideImg(imageArray);
  }, [images, mainImage]);

  const [indxImg, setIndxImg] = useState(0);
  const [slideImages, setSlideImg] = useState([]);

  const handleChangeImg = index => {
    setIndxImg(index);
  };

  const handleScrollImg = direction => {
    if (direction === 'up') {
      setIndxImg(prevIdx =>
        prevIdx === 0 ? slideImages.length - 1 : prevIdx - 1,
      );
    } else if (direction === 'down') {
      setIndxImg(prevIdx =>
        prevIdx === slideImages.length - 1 ? 0 : prevIdx + 1,
      );
    }
  };

  useEffect(() => {
    const startIdx = indxImg;
    const endIdx =
      startIdx + 4 >= slideImages.length ? slideImages.length : startIdx + 4;
    setSlideImagesToShow(slideImages.slice(startIdx, endIdx));
  }, [indxImg, slideImages]);

  const [slideImagesToShow, setSlideImagesToShow] = useState([]);

  const toggleFavorite = async id => {
    let isInFavorite = false;
    favorites
      ? (isInFavorite = favorites.includes(id))
      : (isInFavorite = false);
    if (isInFavorite) {
      dispatch(removeFavorite(id));
      onSuccess(t('Ups, just remove from the favorite!'));
      return;
    }
    dispatch(addFavorite(id));
    onSuccess(t('Great, just add to the favorite!'));
  };

  const handleFavoriteBtnClick = id => e => {
    e.preventDefault();
    e.stopPropagation();
    if (routeParams.id === 'favorite') {
      dispatch(addReload(true));
    }
    !isLoggedIn ? onInfo(t('You must be logged!')) : toggleFavorite(id);
  };

  let setPrice = 0;

  listOfStyles.forEach(style => {
    setPrice += parseFloat(selectNewPrice(selectedCurrency, style));
  });

  return (
    <SC.ProductCardContainer>
      <SC.ProductCardSection>
        <SC.ProductNav>
          <SC.ProductNavList>
            <SC.ProductNavItem>
              <SC.ProductNavLink to={`/shop/?perPage=12&page=1`}>
                {t('Shop')}
              </SC.ProductNavLink>
            </SC.ProductNavItem>
          </SC.ProductNavList>
        </SC.ProductNav>
        <SC.ProductContent>
          <SC.ProductGallery>
            <SC.ControlsList>
              {slideImages.length > 4 && (
                <>
                  <SC.BtnProduct
                    type="button"
                    onClick={() => handleScrollImg('up')}
                  >
                    <SC.BtnArrow />
                  </SC.BtnProduct>

                  {slideImagesToShow.map((img, i) => (
                    <SC.ControlsItem key={i}>
                      <img
                        src={img}
                        alt={`Image ${i}`}
                        className={i === indxImg % 4 ? 'active' : ''}
                        onClick={() =>
                          handleChangeImg(indxImg - (indxImg % 5) + i)
                        }
                      />
                    </SC.ControlsItem>
                  ))}
                  <SC.BtnProduct
                    type="button"
                    onClick={() => handleScrollImg('down')}
                  >
                    <SC.BtnArrowDown />
                  </SC.BtnProduct>
                </>
              )}
              {slideImages.length <= 4 &&
                slideImages.map((img, i) => (
                  <SC.ControlsItem key={i}>
                    <img
                      src={img}
                      alt={`Image ${i}`}
                      className={i === indxImg ? 'active' : ''}
                      onClick={() => handleChangeImg(i)}
                    />
                  </SC.ControlsItem>
                ))}
            </SC.ControlsList>
            <SC.ProductImageWrapper>
              <SC.ProductImage
                width={347}
                height={600}
                src={slideImages[indxImg]}
                alt="Product image"
                loading="lazy"
              />

              <SC.DeliveryInfo>
                <SC.DeliveryInfoItem>
                  <Car width={32} height={32} />
                  <span>{t('Fast Shipping')}</span>
                  <p>{t('Enjoy fast shipping on all clothing orders.')}</p>
                </SC.DeliveryInfoItem>
                <SC.DeliveryInfoItem>
                  <Done width={32} height={32} />
                  <span>{t('Return Policy')}</span>
                  <p>
                    {t(
                      'If the clothing item doesn’t fit, you can return it within 14 days for a full refund.',
                    )}
                  </p>
                </SC.DeliveryInfoItem>
              </SC.DeliveryInfo>
            </SC.ProductImageWrapper>
          </SC.ProductGallery>

          <SC.ProductInfo>
            <div>
              <SC.StylesHeading>
                <SC.Name> Ready Style</SC.Name>
                <SC.BtnForFavorite onClick={handleFavoriteBtnClick(article)}>
                  {favorites.includes(article) ? (
                    <SC.IconFav size={30} fill={theme.colors.brown4} />
                  ) : (
                    <SC.IconFav size={30} color={theme.colors.beige} />
                  )}
                </SC.BtnForFavorite>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'space-between',
                    padding: '20px',
                    // alignItems: 'center',
                  }}
                >
                  <SC.StylesSetPriceBox>
                    <SC.StylesSetPrice>
                      {t('Price for a ready set')}: {setPrice.toFixed(2)}{' '}
                      {selectCurrency(selectedCurrency)}
                    </SC.StylesSetPrice>
                  </SC.StylesSetPriceBox>

                  {listOfStyles.map(it => {
                    let title = it.title_ua;
                    let description = it.description_ua;
                    if (selectedLanguage === 'ru') {
                      title = it.title_ru;
                      description = it.description_ru;
                    }
                    if (selectedLanguage === 'en') {
                      title = it.title_en;
                      description = it.description_en;
                    }
                    if (selectedLanguage === 'de') {
                      title = it.title_de;
                      description = it.description_de;
                    }

                    return (
                      <SC.StylesList
                        key={it.article}
                        style={{ marginBottom: '20px' }}
                      >
                        <li>
                          <SC.StylesImg src={it.mainImage} alt={title} />
                        </li>

                        <SC.StylesList2>
                          <li>
                            {t('Model name')}: {title}
                          </li>
                          <li>
                            {t('Price')}: {selectNewPrice(selectedCurrency, it)}{' '}
                            {selectCurrency(selectedCurrency)}
                          </li>

                          <li>
                            <SC.InfoSection>
                              <SC.Accord>
                                <SC.ProductSubTitle marginBottom="0">
                                  {t('Discription')}
                                </SC.ProductSubTitle>
                                <SC.IconBtn
                                  type="button"
                                  aria-label="switch to open description"
                                  aria-expanded="false"
                                  onClick={() =>
                                    toggleIncludedDetails(it.article)
                                  }
                                >
                                  {showIncludedDetails ? (
                                    <Open
                                      style={{ transform: 'rotate(180deg)' }}
                                    />
                                  ) : (
                                    <Open />
                                  )}
                                </SC.IconBtn>
                              </SC.Accord>
                              <SC.AccordCareList
                                className="showIncludedDetails description"
                                id={it.article}
                              >
                                <SC.StylesAccordCareItem>
                                  {description ? (
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: description,
                                      }}
                                    />
                                  ) : (
                                    <span>
                                      {t(
                                        'Wow. Sorry, we missed the product description',
                                      )}
                                    </span>
                                  )}
                                </SC.StylesAccordCareItem>
                              </SC.AccordCareList>
                            </SC.InfoSection>
                          </li>
                          <li>
                            <SC.StylesLink
                              style={{ textDecoration: 'none' }}
                              to={`/shop/byid/${it.article}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t('Choose your options...')}
                            </SC.StylesLink>
                          </li>
                        </SC.StylesList2>

                        {/* <li>
                          <img src={it.mainImage} alt={title} />
                        </li>
                        <li style={{ padding: '20px 0', fontWeight: 'bold' }}>
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={`/shop/byid/${it.article}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t('Choose your options...')}
                          </Link>
                        </li> */}
                      </SC.StylesList>
                    );
                  })}
                </div>
              </SC.StylesHeading>
            </div>
          </SC.ProductInfo>
        </SC.ProductContent>
      </SC.ProductCardSection>
    </SC.ProductCardContainer>
  );
};

StylesCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      article: PropTypes.string,
      category: PropTypes.string,
      description: PropTypes.string,
      title: PropTypes.string,
      discount_euro: PropTypes.string,
      discount_ua: PropTypes.string,
      discount_usd: PropTypes.string,
      images: PropTypes.string,
      mainImage: PropTypes.string,
      man_women: PropTypes.string,
      newPrice_euro: PropTypes.string,
      newPrice_ua: PropTypes.string,
      newPrice_usd: PropTypes.string,
      oldPrice_euro: PropTypes.string,
      oldPrice_ua: PropTypes.string,
      oldPrice_usd: PropTypes.string,
      price_euro: PropTypes.string,
      price_ua: PropTypes.string,
      price_usd: PropTypes.string,
      product: PropTypes.string,
      rate: PropTypes.string,
      sizes: PropTypes.string,
      status: PropTypes.string,
      size_chart: PropTypes.string,
    }),
  ),
};
