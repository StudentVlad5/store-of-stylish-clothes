// export const BASE_URL = 'http://localhost:3030/api';
// export const BASE_URL_IMG =
//   'https://res.cloudinary.com/dfqhj2far/image/upload/v1711870092/quillis_users/';
export const BASE_URL =
  'https://store-of-stylish-clothes-backend.vercel.app/api';
export const BASE_URL_IMG =
  'https://res.cloudinary.com/dfqhj2far/image/upload/v1711870092/quillis_users/';

export const language = [
  { value: 'ua', option: 'Ua' },
  { value: 'en', option: 'En' },
  { value: 'de', option: 'De' },
  { value: 'ru', option: 'Ru' },
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
  accessories: {
    ua: 'Аксесуари',
    ru: 'Аксессуары',
    en: 'Accessories',
    de: 'Zubehör',
  },
  clothing: { ua: 'Одяг', ru: 'Одежда', en: 'Clothing', de: 'Kleidung' },
  Hoodies_Sweatshirts: {
    ua: 'Світшоти, толстовки',
    ru: 'Свитшоты, толстовки',
    en: 'Sweatshirts, hoodies',
    de: 'Sweatshirts, Kapuzenpullover',
  },
  giftCard:{ua: 'Подарункові картки', ru: 'Подарочные карт', en: 'Gift cards', de:'Geschenkkarten'}
};
