import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { onSuccess, onInfo } from 'components/helpers/Messages/NotifyMessages';
import { getFromStorage } from 'services/localStorService';
import { addItemInBasket } from 'services/APIservice';
import { reloadValue } from 'redux/reload/selectors';
import { addFavorite, removeFavorite } from 'redux/auth/operations';
import { getUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { addReload } from 'redux/reload/slice';
import theme from 'components/baseStyles/Variables.styled';
import * as SC from './ProductCard.styled';

import { ReactComponent as Car } from 'images/svg/shipping.svg';
import { ReactComponent as Done } from 'images/svg/done.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Open } from 'images/svg/open.svg';
import { ReactComponent as Cat } from 'images/svg/cat.svg';
import { ReactComponent as Evenodd } from 'images/svg/evenodd.svg';
import { ReactComponent as Oil } from 'images/svg/oil.svg';
import { ReactComponent as Sun } from 'images/svg/sun.svg';
import {
  selectCurrency,
  selectNewPrice,
  selectOldPrice,
} from 'services/selectCurrency';
import uuid4 from 'uuid4';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const ProductCard = ({ item, selectedCurrency, addToBasket }) => {
  const {
    article,
    category,
    description,
    title,
    discount_euro,
    discount_ua,
    discount_usd,
    images,
    mainImage,
    man_women,
    newPrice_euro,
    newPrice_ua,
    newPrice_usd,
    oldPrice_euro,
    oldPrice_ua,
    oldPrice_usd,
    price_euro,
    price_ua,
    price_usd,
    product,
    rate,
    sizes,
    status,
    size_chart,
  } = item[0];
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const routeParams = useParams();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  let imageArray = [];

  useEffect(() => {
    setOptionData(prev => ({
      ...prev,
      oldPrice: selectOldPrice(selectedCurrency, item[0]),
      newPrice: selectNewPrice(selectedCurrency, item[0]),
      rate: rate,
    }));
  }, [selectedCurrency, item[0]]);

  const _id = uuid4();
  let options = [];
  if (sizes) {
    options = sizes.split(',');
  }

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);
  const user = useSelector(getUser).favorites;
  let favorites;
  user ? (favorites = user.map(item => item)) : (favorites = []);

  async function addItem(state) {
    setIsLoading(true);
    try {
      const { data } = await addItemInBasket(`/basket`, state);
      if (!data) {
        return onFetchError(t('Whoops, something went wrong'));
      }
    } catch (error) {
      setError(error);
    } finally {
      reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
      setIsLoading(false);
    }
  }

  const init = {
    title: title,
    article: article,
    oldPrice: selectOldPrice(selectedCurrency, item[0]),
    newPrice: selectNewPrice(selectedCurrency, item[0]),
    status: status ? status : '',
    rate: rate ? rate : '',
    currency: selectedCurrency,
    total: 100,
    quantity: 1,
    options: '',
    _id,
  };

  const [userAnonimusID] = useState(
    getFromStorage('userAnonimusID')
      ? getFromStorage('userAnonimusID')
      : 'none',
  );

  const addToBasketHandler = product => {
    const updatedProduct = {
      ...product,
      userAnonimusID,
      optionData: {
        ...product.optionData,
        quantity: product.optionData.quantity,
        _id: product.optionData._id,
        article: article,
      },
    };

    // dispatch(addToBasket(updatedProduct));
    const updateBackEndBasket = {
      _id: updatedProduct.userAnonimusID,
      optionData: [
        {
          ...product.optionData,
          _id: product.optionData._id,
          // optionData,
          quantity: product.optionData.quantity,
          currency: selectCurrency(selectedCurrency),
          // name: product.name,
          images: product.images,
          title,
          mainImage,
          size: optionData.options,
        },
      ],
    };
    addItem(updateBackEndBasket);
    document
      .querySelectorAll('.checkOptions')
      .forEach(v => (v.checked = false));
    useCheck(isChekedArray);
    onSuccess(t('Added'));
  };

  // get data from selected option
  const [optionData, setOptionData] = useState(init);

  let isChekedArray = [];
  if (options?.length !== 0) {
    options.map(it => isChekedArray.push({ title: it, isActive: false }));
  }
  const [check, useCheck] = useState(isChekedArray);

  const changeActiveStyleInput = e => {
    isChekedArray.map(it => {
      if (it.title === e.target.value) {
        it.isActive = true;
      } else {
        it.isActive = false;
      }
    });
    useCheck(isChekedArray);
  };

  const getOptionData = e => {
    e.preventDefault();
    changeActiveStyleInput(e);
    const selectedOption = e.currentTarget.value;

    let selectedData = {};
    selectedData.options = [];
    selectedData.options = options.find(option => option === selectedOption);
    selectedData.quantity = optionData.quantity;
    setOptionData(prev => ({ ...prev, ...selectedData }));
  };

  //get selected value
  const [value, setValue] = useState(1);
  const quantity = useSelector(state => {
    const item = state?.basket?.basketItems?.find(
      item => item.optionData._id === optionData._id,
    );
    return item ? item.optionData.quantity : value;
  });

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

  // open details for the info section
  const [showCareDetails, setCareShowDetails] = useState(false);
  const toggleCareDetails = () => setCareShowDetails(state => !state);
  const [showIncludedDetails, setShowIncludedDetails] = useState(false);
  const toggleIncludedDetails = () => setShowIncludedDetails(state => !state);

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
            <SC.ProductNavItem>
              <SC.ProductNavLink
                to={`/shop?minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=&category=${category}`}
              >
                {category}
              </SC.ProductNavLink>
            </SC.ProductNavItem>
            <SC.ProductNavItem>{title}</SC.ProductNavItem>
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
              <SC.Heading>
                <SC.Name> {title}</SC.Name>
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
                  }}
                >
                  {discount_ua !== 0 ? (
                    <SC.Prices>
                      <SC.Discount
                        style={{ width: '100%', textAlign: 'center' }}
                      >
                        Price: {optionData.newPrice}
                        {selectCurrency(selectedCurrency)}
                      </SC.Discount>
                      <SC.Price style={{ textAlign: 'right' }}>
                        {optionData.oldPrice}
                        {selectCurrency(selectedCurrency)}
                      </SC.Price>
                    </SC.Prices>
                  ) : (
                    <SC.Prices>
                      <SC.Discount>
                        {optionData.newPrice}
                        {selectedCurrency}
                      </SC.Discount>
                    </SC.Prices>
                  )}
                  <SC.Prices>
                    <SC.Discount style={{ width: '100%', textAlign: 'right' }}>
                      {t('Rate')}: {optionData.rate}
                      {/* Status: {optionData.status} */}
                    </SC.Discount>
                  </SC.Prices>
                </div>
              </SC.Heading>
              <SC.Description
                dangerouslySetInnerHTML={{ __html: description }}
              ></SC.Description>
            </div>
            {options?.length !== 0 && (
              <SC.Options>
                <SC.ProductSubTitle>{t('Option')}:</SC.ProductSubTitle>
                <SC.OptionsList>
                  {options.map((option, i) => {
                    return (
                      <SC.Option
                        key={i}
                        className={
                          check &&
                          check.find(it => it?.title === option)?.isActive
                            ? 'isActive isImportant real'
                            : 'notActive'
                        }
                      >
                        <input
                          className="checkOptions"
                          type="radio"
                          id={option}
                          name="option"
                          aria-label={option}
                          // disabled={0 == option}
                          onChange={e => getOptionData(e)}
                          value={option}
                          defaultChecked={optionData.title === option}
                        ></input>
                        <span>{option}</span>
                      </SC.Option>
                    );
                  })}
                </SC.OptionsList>
              </SC.Options>
            )}
            <SC.Options>
              <SC.ProductSubTitle>{t('Quantity')}:</SC.ProductSubTitle>
              <SC.Quantity>
                <SC.IconBtn
                  type="button"
                  aria-label="minus"
                  onClick={() => {
                    setOptionData(prevState => ({
                      ...prevState,
                      quantity: prevState.quantity - 1,
                    }));
                  }}
                  disabled={optionData.quantity <= 0}
                >
                  <Minus />
                </SC.IconBtn>
                <span>{optionData.quantity}</span>
                <SC.IconBtn
                  type="button"
                  aria-label="plus"
                  onClick={() => {
                    setOptionData(prevState => ({
                      ...prevState,
                      quantity: prevState.quantity + 1,
                    }));
                  }}
                  disabled={optionData.quantity >= optionData.total}
                >
                  <Plus />
                </SC.IconBtn>
              </SC.Quantity>
              <SC.Quantity style={{ marginTop: '10px', padding: '6px' }}>
                <span>
                  {(optionData?.newPrice * optionData?.quantity).toFixed(2) +
                    ' '}
                  {selectCurrency(selectedCurrency)}
                </span>
              </SC.Quantity>
            </SC.Options>
            {optionData.title ? (
              <SC.TextBtn
                type="button"
                aria-label="Add to card"
                disabled={
                  +optionData?.quantity <= 0 ||
                  optionData?.options == '' ||
                  optionData?.options == undefined
                }
                onClick={() => {
                  const productToAdd = {
                    _id,
                    title,
                    currency: selectedCurrency,
                    optionData,
                    quantity,
                    images,
                  };
                  addToBasketHandler(productToAdd);
                  setOptionData(init);
                }}
              >
                {t('ADD to cart')}
              </SC.TextBtn>
            ) : (
              <>
                <SC.TextBtn
                  type="button"
                  aria-label="Add to card"
                  disabled={true}
                >
                  {t('ADD to cart')}
                </SC.TextBtn>
              </>
            )}
            <SC.InfoSection>
              <SC.Accord>
                <SC.ProductSubTitle marginBottom="0">
                  {t('Details')}
                </SC.ProductSubTitle>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open description"
                  aria-expanded="false"
                  onClick={toggleIncludedDetails}
                >
                  {showIncludedDetails ? (
                    <Open style={{ transform: 'rotate(180deg)' }} />
                  ) : (
                    <Open />
                  )}
                </SC.IconBtn>
              </SC.Accord>
              {showIncludedDetails && (
                <SC.AccordCareList>
                  <SC.AccordCareItem>
                    {size_chart ? (
                      <span dangerouslySetInnerHTML={{ __html: size_chart }} />
                    ) : (
                      <span>
                        {t(
                          'The size of the product is universal or we have not added a size chart to the product. Oops... Please familiarize yourself with the description of the characteristics.',
                        )}
                      </span>
                    )}
                  </SC.AccordCareItem>
                </SC.AccordCareList>
              )}
            </SC.InfoSection>
          </SC.ProductInfo>
        </SC.ProductContent>
      </SC.ProductCardSection>
    </SC.ProductCardContainer>
  );
};

ProductCard.propTypes = {
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
