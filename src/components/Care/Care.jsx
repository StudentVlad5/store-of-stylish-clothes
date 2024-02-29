import React, { useState, useEffect } from 'react';
import { getCareList } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { Search } from './Search/Search';
import {
  CareContainer,
  CareSection,
  ListItem,
  TitleHeading,
  List,
  CareSpanTitle,
  CareSpan,
  CareLi,
  CareUl,
  ListContainer,
  CareSpanName,
  CareSpanValue,
  CareContainerWrapper,
} from './Care.styled';

import { ReactComponent as Category } from 'images/svg/care/category.svg';
import { ReactComponent as Family } from 'images/svg/care/family.svg';
import { ReactComponent as Ideal_light } from 'images/svg/care/ideal_light.svg';
import { ReactComponent as Latin_name } from 'images/svg/care/latin_name.svg';
import { ReactComponent as Origin } from 'images/svg/care/origin.svg';
import { ReactComponent as Temp_max } from 'images/svg/care/temp_max.svg';
import { ReactComponent as Temp_min } from 'images/svg/care/temp_min.svg';
import { ReactComponent as Tolereted_light } from 'images/svg/care/tolereted_light.svg';
import { ReactComponent as Use } from 'images/svg/care/use.svg';
import { ReactComponent as Watering } from 'images/svg/care/watering.svg';

export const Care = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [plant, setPlant] = useState(false);
  const [, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let arraOfNames = [];
  if (products) {
    products.map(item => {
      arraOfNames.push(...item.common);
    });
  }
  let uniqArr = Array.from(new Set(arraOfNames.map(item => item.trim())));

  const handleChoicePlant = e => {
    e.preventDefault;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    let plantForSearch = [];
    plantForSearch = products?.map(item => {
      for (let i = 0; i < item.common?.length; i++) {
        if (item.common[i] === e.currentTarget.innerText) {
          plantForSearch.push(item);
        }
      }
      setPlant(plantForSearch);
    });
  };

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await getCareList(`/care`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <CareSection>
      <CareContainer>
        <CareContainerWrapper>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ListContainer>
            {products &&
              alphabet.map(item => (
                <List key={item}>
                  <ListItem>{item.toUpperCase()}</ListItem>
                  {arraOfNames &&
                    uniqArr.map((it, index) => {
                      if (
                        it?.slice(0, 1).toLowerCase() === item &&
                        it?.includes(searchQuery)
                      )
                        return (
                          <TitleHeading
                            style={{ cursor: 'pointer' }}
                            key={index}
                            onClick={e => handleChoicePlant(e)}
                          >
                            {it}
                          </TitleHeading>
                        );
                    })}
                </List>
              ))}
          </ListContainer>
          {isLoading ? onLoading() : onLoaded()}
        </CareContainerWrapper>
        <CareContainerWrapper>
          {plant && (
            <ListContainer>
              {plant.map(plant => (
                <CareUl key={plant.id}>
                  <CareLi>
                    <CareSpanName>names: </CareSpanName>
                    <CareSpanValue>{plant.common.join(', ')}</CareSpanValue>
                  </CareLi>
                  <CareLi>
                    <Category />
                    <div>
                      <CareSpanTitle>Category: </CareSpanTitle>
                      <CareSpan>{plant.category}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Family />
                    <div>
                      <CareSpanTitle>Family: </CareSpanTitle>
                      <CareSpan>{plant.family}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Latin_name />
                    <div>
                      <CareSpanTitle>Latin name: </CareSpanTitle>
                      <CareSpan>{plant.latin}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Origin />
                    <div>
                      <CareSpanTitle>Origin: </CareSpanTitle>
                      <CareSpan>{plant.origin}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Ideal_light />
                    <div>
                      <CareSpanTitle>Ideal light: </CareSpanTitle>
                      <CareSpan>{plant.ideallight}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Tolereted_light />
                    <div>
                      <CareSpanTitle>Tolerated light: </CareSpanTitle>
                      <CareSpan>{plant.toleratedlight}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Watering />
                    <div>
                      <CareSpanTitle>Watering: </CareSpanTitle>
                      <CareSpan>{plant.watering}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Temp_max />
                    <div>
                      <CareSpanTitle>Temp max °C: </CareSpanTitle>
                      <CareSpan>{plant.tempmax.celsius}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Temp_min />
                    <div>
                      <CareSpanTitle>Temp min °C: </CareSpanTitle>
                      <CareSpan>{plant.tempmin.celsius}</CareSpan>
                    </div>
                  </CareLi>
                  <CareLi>
                    <Use />
                    <div>
                      <CareSpanTitle>Use: </CareSpanTitle>
                      <CareSpan>{plant.use.join(', ')}</CareSpan>
                    </div>
                  </CareLi>
                </CareUl>
              ))}
            </ListContainer>
          )}
        </CareContainerWrapper>
      </CareContainer>
    </CareSection>
  );
};
