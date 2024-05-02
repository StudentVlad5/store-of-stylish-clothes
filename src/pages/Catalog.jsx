import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from 'utils/SEO';
import { Catalog } from '../components/Catalog/Catalog';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';

const CatalogPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, [location]);

  return (
    <>
      <SEO
        title="Shop"
        description_ua="Найкращий магазин найкращого одягу та взуття, аксесуарів тощо в Європі. Відомі бренди, найкраща якість, швидка доставка. Ви будете задоволені продуктом і обслуговуванням. Від першого продажу до повного масштабу та все між ними. Почніть сьогодні! Швидко та легко. Все, що вам потрібно. Запобігання шахрайству. Безпечний кошик для покупок."
        keywords_ua="quillis, Quillis, Quil, quil, магазин, найкраще, одяг, взуття, аксесуари, бренд, якість, доставка, швидко, задоволений, товари, послуга, Дивовижно, Оголошення, Угода, Виклик, Порівняйте, Легко, Поспішайте, Поліпшення, Представляємо, Магія, Зараз, Пропозиція, Швидкий, Чудовий, Революційний, Сенсаційний, Приголомшливий, Раптово, Розшук, Випадковий, Одяг, Офіційний, Одяг, Спортивний одяг, Верхній одяг, Одяг для активного відпочинку, Одяг для сну, Купальники, Етнічний, Одяг, Для вагітних, Бізнес, Уніформа, Вечірній одяг , Вінтажний одяг, Дизайнер, Етикетка, Аксесуари, Взуття, Робочий одяг, Рюкзаки, Пояси, сумки, Наплічні сумки, Кепки, панські, Шкарпетки, Ремені, Шкарпетки, окуляри, рукавички, наклейки, гаманці, Зимові шапки, шарфи, шапки, Шарфи, рукавички, Верхній одяг, Поло, Футболки, Боді, Нижня білизна, Худі, світшоти, светри, Куртки, Сорочки, Толстовка, толстовки, Штани, Спортивні костюми, Топи, сукні, спідниці, костюми, Шорти, літні комплекти, купальники, кросівки, Кеди , Зимове взуття"
        description="The best store of the best clothes and shoes, accessories, etc in Europe. Famous brands, best quality, fast delivery. You will be satisfied with the product and service. From first sale to full scale, and everything in between. Get started today! Quick & Easy. Everything You Need. Fraud Prevention. Secure Shopping Cart."
        keywords="quillis, Quillis, Quil, quil, store, best, clothes, shoes, accessories, brand, quality, delivery, fast, satisfied, goods, service, Amazing, Announcing, Bargain, Challenge, Compare, Easy, Hurry, Improvement, Introducing, Magic, Now, Offer, Quick, Remarkable, Revolutionary, Sensational, Startling, Suddenly, Wanted, Casual, Wear, Formal, Attire,  Sportswear, Outerwear, Activewear, Sleepwear, Swimwear,  Ethnic, Clothing, Maternity, Business, Uniform, Evening Wear, Vintage Clothing,  Designer, Label, Accessories, Footwear, Workwear, Backpacks, Belt, bags, Shoulder bags, Caps, gentlemen, Socks, Belts, Socks, glasses, gloves, stickers, wallets, Winter hats, scarves, hats, Scarves, gloves, Outerwear, Polos, T-shirts, Body,Underwear, Hoodies, sweatshirts, sweaters, Jackets, Shirts, Sweatshirt, hoodies, Pants, Tracksuits, Tops, dresses, skirts, suits, Shorts, summer sets, swimwear, sneakers, Sneakers, Winter shoes"
      />
      <Catalog />
    </>
  );
};

export default CatalogPage;
