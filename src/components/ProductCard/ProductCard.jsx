import React, { useContext, useState, useEffect } from 'react'; //, useEffect
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { onSuccess } from 'components/helpers/Messages/NotifyMessages';
import { saveToStorage, getFromStorage } from 'services/localStorService';
import { addItemInBasket } from 'services/APIservice';
import { reloadValue } from 'redux/reload/selectors';
import { addReload } from 'redux/reload/slice';

import * as SC from './ProductCard.styled';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { ReactComponent as Car } from 'images/svg/shipping.svg';
import { ReactComponent as Done } from 'images/svg/done.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Open } from 'images/svg/open.svg';
import { ReactComponent as Cat } from 'images/svg/cat.svg';
import { ReactComponent as Evenodd } from 'images/svg/evenodd.svg';
import { ReactComponent as Oil } from 'images/svg/oil.svg';
import { ReactComponent as Sun } from 'images/svg/sun.svg';
import noImg from 'images/No-image-available.webp';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';

export const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    typeOfPlants,
    oldPrice,
    currentPrice,
    discount,
    currency,
    description,
    options,
    totalQuantity,
    images,
    light,
    petFriendly,
    hardToKill,
    waterDescribe,
    category,
  } = product;

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

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
    title: null,
    oldPrice: oldPrice ? oldPrice : currentPrice || 0,
    currentPrice: currentPrice ? currentPrice : oldPrice || 0,
    currency: currency ? currency : '$',
    total: totalQuantity || 0,
    quantity: 1,
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
      },
    };
    // dispatch(addToBasket(updatedProduct));
    const updateBackEndBasket = {
      _id: updatedProduct.userAnonimusID,
      optionData: [
        {
          ...product.optionData,
          quantity: product.optionData.quantity,
          currency: product.currency,
          name: product.name,
          _id: product.optionData._id,
          images: [...product.images],
        },
      ],
    };
    addItem(updateBackEndBasket);
    useCheck(
      options.map(it =>
        isChekedArray.push({ title: it.title, isActive: false }),
      ),
    );
    onSuccess('Added');
  };

  // get data from selected option
  const [optionData, setOptionData] = useState(init);

  let isChekedArray = [];
  if (options?.length !== 0) {
    options.map(it => isChekedArray.push({ title: it.title, isActive: false }));
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

    useCheck(prev => isChekedArray);
  };

  const getOptionData = e => {
    e.preventDefault();
    changeActiveStyleInput(e);
    const selectedOption = e.currentTarget.value;
    const selectedData = options.find(
      option => option.title === selectedOption,
    );
    selectedData.quantity = optionData.quantity;
    selectedData.title = selectedOption;
    setOptionData(selectedData);
  };

  //get selected value
  const [value, setValue] = useState(1);
  const quantity = useSelector(state => {
    const item = state?.basket?.basketItems?.find(
      item => item.optionData._id === optionData._id,
    );
    return item ? item.optionData.quantity : value;
  });

  //change images
  const [indxImg, setIndxImg] = useState(0);

  const slides = 6;
  const [indxSlideImg, setIndxSlideImg] = useState(0);
  const [slideImages, setSlideImg] = useState(images.slice(0, slides));

  const handleChangeImg = e => {
    const currentIndx = e.target.id;
    setIndxImg(currentIndx);
  };

  const handleScrollImg = e => {
    const type = e.target.dataset.controls;
    switch (type) {
      case 'up':
        setIndxSlideImg(prevState =>
          prevState - slides < 0 ? images.length - slides : prevState - slides,
        );
        setSlideImg(images.slice(0, slides));
        break;
      case 'down':
        setIndxSlideImg(prevState =>
          prevState + slides >= images.length ? 0 : prevState + slides,
        );
        setSlideImg(images.slice(images.length - slides, images.length));
        break;
      default:
        break;
    }
  };

  // open details for the info section
  const [showCareDetails, setCareShowDetails] = useState(false);
  const toggleCareDetails = () => setCareShowDetails(state => !state);
  const [showIncludedDetails, setShowIncludedDetails] = useState(false);
  const toggleIncludedDetails = () => setShowIncludedDetails(state => !state);

  return (
    <SC.ProductCardContainer>
      <SC.ProductCardSection>
        <SC.ProductNav>
          <SC.ProductNavList>
            <SC.ProductNavItem>
              <SC.ProductNavLink href="/catalog?perPage=12&page=1">
                Shop
              </SC.ProductNavLink>
            </SC.ProductNavItem>
            <SC.ProductNavItem>
              <SC.ProductNavLink
                href={`/catalog/${category}?perPage=12&page=1&`}
              >
                {category}
              </SC.ProductNavLink>
            </SC.ProductNavItem>
            {category === 'plants' ? (
              <>
                <SC.ProductNavItem>
                  <SC.ProductNavLink
                    href={`/catalog/plants?perPage=12&page=1&typeOfPlants=${typeOfPlants}`}
                    onClick={() =>
                      saveToStorage('filters', {
                        ...getFromStorage('filters'),
                        ['typeOfPlants']: [typeOfPlants],
                      })
                    }
                  >
                    {typeOfPlants}
                  </SC.ProductNavLink>
                </SC.ProductNavItem>
                <SC.ProductNavItem>
                  <SC.ProductNavLink href={`/catalog/byid/${_id}`} $primary>
                    {name}
                  </SC.ProductNavLink>
                </SC.ProductNavItem>
              </>
            ) : (
              <SC.ProductNavItem>
                <SC.ProductNavLink href={`/catalog/byid/${_id}`} $primary>
                  {name}
                </SC.ProductNavLink>
              </SC.ProductNavItem>
            )}
          </SC.ProductNavList>
        </SC.ProductNav>
        <SC.ProductContent>
          <SC.ProductGallery>
            <SC.ControlsList>
              {images.length > slides && indxSlideImg !== 0 && (
                <FiChevronUp
                  data-controls="up"
                  size={36}
                  onClick={e => {
                    handleScrollImg(e);
                  }}
                />
              )}
              {slideImages?.map((img, i) => {
                return (
                  <SC.ControlsItem
                    key={i}
                    onClick={e => {
                      handleChangeImg(e);
                    }}
                  >
                    <img
                      src={BASE_URL_IMG + img}
                      alt="Image"
                      loading="lazy"
                      id={i}
                    />
                  </SC.ControlsItem>
                );
              })}
              {images.length > slides &&
                indxSlideImg !== slideImages.length && (
                  <FiChevronDown
                    data-controls="down"
                    size={36}
                    onClick={e => {
                      handleScrollImg(e);
                    }}
                  />
                )}
            </SC.ControlsList>
            <SC.ProductImageWrapper>
              {images.length !== 0 ? (
                <SC.ProductImage
                  width={347}
                  height={600}
                  src={BASE_URL_IMG + images[indxImg]}
                  alt="Product image"
                  loading="lazy"
                />
              ) : (
                <SC.ProductImage
                  width={347}
                  height={600}
                  src={noImg}
                  alt="Default image"
                  loading="lazy"
                />
              )}
              <SC.DeliveryInfo>
                <SC.DeliveryInfoItem>
                  <Car width={32} height={32} />
                  <span>Free shipping</span>
                  <p>Get free standard shipping when you spend $150 or more.</p>
                </SC.DeliveryInfoItem>
                <SC.DeliveryInfoItem>
                  <Done width={32} height={32} />
                  <span>Guarantee</span>
                  <p>
                    If your plant dies withing 30 days, we’ll replace it for
                    free.
                  </p>
                </SC.DeliveryInfoItem>
              </SC.DeliveryInfo>
            </SC.ProductImageWrapper>
          </SC.ProductGallery>
          <SC.ProductInfo>
            <div>
              <SC.Heading>
                <SC.Name> {name}</SC.Name>
                {discount !== 0 ? (
                  <SC.Prices>
                    <SC.Discount>
                      {optionData.currentPrice}
                      {currency}
                    </SC.Discount>
                    <SC.Price>
                      {optionData.oldPrice}
                      {currency}
                    </SC.Price>
                  </SC.Prices>
                ) : (
                  <SC.Prices>
                    <SC.Discount>
                      {optionData.currentPrice}
                      {currency}
                    </SC.Discount>
                  </SC.Prices>
                )}
              </SC.Heading>
              <SC.Description>{description}</SC.Description>
            </div>
            {options.length !== 0 && (
              <SC.Options>
                <SC.ProductSubTitle>Option:</SC.ProductSubTitle>
                <SC.OptionsList>
                  {options.map((option, i) => {
                    return (
                      <SC.Option
                        key={i}
                        className={
                          check &&
                          check.find(it => it?.title === option.title)?.isActive
                            ? 'isActive isImportant real'
                            : 'notActive'
                        }
                      >
                        <input
                          type="radio"
                          id={option.title}
                          name="option"
                          aria-label={option.title}
                          disabled={0 == option.total}
                          onChange={e => getOptionData(e)}
                          value={option.title}
                          defaultChecked={optionData.title === option.title}
                        ></input>
                        <span>{option.title}</span>
                      </SC.Option>
                    );
                  })}
                </SC.OptionsList>
              </SC.Options>
            )}
            <SC.Options>
              <SC.ProductSubTitle>Quantity:</SC.ProductSubTitle>
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
            </SC.Options>
            {optionData.title ? (
              <SC.TextBtn
                type="button"
                aria-label="Add to card"
                disabled={optionData.quantity === 0}
                onClick={() => {
                  const productToAdd = {
                    _id,
                    name,
                    currency,
                    optionData,
                    quantity,
                    images,
                  };
                  addToBasketHandler(productToAdd);
                  setOptionData(init);
                }}
              >
                ADD to card
              </SC.TextBtn>
            ) : (
              <>
                <SC.TextBtn
                  type="button"
                  aria-label="Add to card"
                  disabled={true}
                >
                  ADD to card
                </SC.TextBtn>
              </>
            )}
            {category === 'plants' ? (
              <SC.InfoSection>
                <SC.Accord>
                  <SC.ProductSubTitle marginBottom="0">
                    Care and Maintenance
                  </SC.ProductSubTitle>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open description"
                    aria-expanded="false"
                    onClick={toggleCareDetails}
                  >
                    <Open />
                  </SC.IconBtn>
                </SC.Accord>
                {showCareDetails && (
                  <SC.AccordCareList>
                    <SC.AccordCareItem>
                      <Sun width={24} height={24} />
                      {light === 'bright and direct light' ? (
                        <span>
                          Put it in such a place where it is bright and the
                          sun`s rays penetrate directly to it
                        </span>
                      ) : (
                        <span>
                          Put it in a place where the sun`s rays pierce through
                          some cover, e.g. a curtain or a tree outside the
                          window
                        </span>
                      )}
                    </SC.AccordCareItem>
                    <SC.AccordCareItem>
                      <Oil width={24} height={24} />
                      <span>
                        {waterDescribe.charAt(0).toUpperCase() +
                          waterDescribe.slice(1)}
                      </span>
                    </SC.AccordCareItem>
                    <SC.AccordCareItem>
                      <Evenodd width={24} height={24} />
                      {hardToKill === 'easy to care' ? (
                        <span>
                          It tolerates home humidity well and you don`t have to
                          worry about it
                        </span>
                      ) : (
                        <span>
                          Sometimes you need to worry about it and check the
                          humidity in your home
                        </span>
                      )}
                    </SC.AccordCareItem>
                    <SC.AccordCareItem>
                      <Cat width={24} height={24} />
                      {petFriendly === 'not pet friendly' ? (
                        <span>
                          Keep away from pets - nibbling on leaves can harm pets
                        </span>
                      ) : (
                        <span>
                          You can keep it near pets - gnawing on the leaves
                          cannot harm pets
                        </span>
                      )}
                    </SC.AccordCareItem>
                  </SC.AccordCareList>
                )}
              </SC.InfoSection>
            ) : (
              <SC.InfoSection>
                <SC.Accord>
                  <SC.ProductSubTitle marginBottom="0">
                    Design
                  </SC.ProductSubTitle>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open description"
                    aria-expanded="false"
                    onClick={toggleCareDetails}
                  >
                    <Open />
                  </SC.IconBtn>
                </SC.Accord>
                {showCareDetails && (
                  <SC.AccordCareList>
                    <SC.AccordCareItem>
                      <span>
                        The gold standard of gifting, a Homeforest gift card is
                        a sure-fire way to make someone feel special, not to
                        mention stylish. Just choose any amount up to $200, send
                        by mail, and the recipient can redeem it for whatever he
                        or she wishes.
                      </span>
                    </SC.AccordCareItem>
                  </SC.AccordCareList>
                )}
              </SC.InfoSection>
            )}
            {category === 'plants' ? (
              <SC.InfoSection>
                <SC.Accord>
                  <SC.ProductSubTitle marginBottom="0">
                    What’s included
                  </SC.ProductSubTitle>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open description"
                    aria-expanded="false"
                    onClick={toggleIncludedDetails}
                  >
                    <Open />
                  </SC.IconBtn>
                </SC.Accord>
                {showIncludedDetails && (
                  <SC.AccordIncludedList>
                    <SC.AccordIncludedItem>
                      Healthy plant pre-potted with premium soil
                    </SC.AccordIncludedItem>
                    <SC.AccordIncludedItem>
                      Ecopots pot and saucer
                    </SC.AccordIncludedItem>
                    <SC.AccordIncludedItem>
                      All the tips and tricks for expert-level care
                    </SC.AccordIncludedItem>
                  </SC.AccordIncludedList>
                )}
              </SC.InfoSection>
            ) : (
              <SC.InfoSection>
                <SC.Accord>
                  <SC.ProductSubTitle marginBottom="0">
                    Details
                  </SC.ProductSubTitle>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open description"
                    aria-expanded="false"
                    onClick={toggleIncludedDetails}
                  >
                    <Open />
                  </SC.IconBtn>
                </SC.Accord>
                {showIncludedDetails && (
                  <SC.AccordCareList>
                    <SC.AccordCareItem>
                      <span>
                        This gift card will not expire. Redeemable at any
                        Homeforest freestanding store in Ukraine. It should be
                        presented at the time of purchase. May not be redeemed
                        for cash or replaced if lost or stolen, except where
                        required by law. Treat card like cash. Homeforest is not
                        responsible for unauthorized use of card. Use of this
                        card constitutes acceptance of these terms and
                        conditions.
                      </span>
                    </SC.AccordCareItem>
                  </SC.AccordCareList>
                )}
              </SC.InfoSection>
            )}
          </SC.ProductInfo>
        </SC.ProductContent>
      </SC.ProductCardSection>
    </SC.ProductCardContainer>
  );
};

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      oldPrice: PropTypes.number.isRequired,
      currentPrice: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          oldPrice: PropTypes.number,
          currentPrice: PropTypes.number,
          total: PropTypes.number,
        }),
      ),
      totalQuantity: PropTypes.number,
      typeOfPlants: PropTypes.string,
      light: PropTypes.string,
      petFriendly: PropTypes.string,
      maintenance: PropTypes.string,
      potSize: PropTypes.shape({
        size: PropTypes.number,
        unit: PropTypes.string,
        _id: PropTypes.string,
      }),
      hardToKill: PropTypes.string,
      rare: PropTypes.string,
      waterSchedule: PropTypes.string,
      waterDescribe: PropTypes.string,
      images: PropTypes.array,
      category: PropTypes.string,
    }),
  ),
};
