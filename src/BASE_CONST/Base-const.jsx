// export const BASE_URL = 'http://localhost:3030/api';
// export const BASE_URL_IMG = 'http://localhost:3030/uploads/';
export const BASE_URL =
  'https://store-of-stylish-clothes-backend.vercel.app/api';
export const BASE_URL_IMG =
  '//store-of-stylish-clothes-backend.vercel.app/uploads/';

export const language = [
  { value: 'ua', option: 'UA' },
  { value: 'en', option: 'EN' },
  { value: 'de', option: 'DE' },
  { value: 'ru', option: 'RU' },
];

export const currency = [
  { value: 'ua', option: '₴', name: 'Гривні' },
  { value: 'euro', option: '€', name: 'Евро' },
  { value: 'usd', option: '$', name: 'Доларів США' },
];

export const homeProductLinks = {
  man: { ua: 'Чоловічі', ru: 'Мужская', en: "Men's", de: 'Herren' },
  woman: { ua: 'Жіночі', ru: 'Женские', en: "Women's", de: 'Damen' },
  jacets: { ua: 'Жакети', ru: 'Жакеты', en: 'Jackets', de: 'Jacken' },
  pants: { ua: 'Штани', ru: 'Брюки', en: 'Pants', de: 'Hosen' },
  footwear: { ua: 'Взуття', ru: 'Обувь', en: 'Shoes', de: 'Schuhe' },
  Hoodies_Sweatshirts: {
    ua: 'Світшоти, толстовки',
    ru: 'Свитшоты, толстовки',
    en: 'Sweatshirts, hoodies',
    de: 'Sweatshirts, Kapuzenpullover',
  },
};
