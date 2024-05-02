import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { Gifts } from 'components/Gifts/Gifts';

const GiftsPage = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);
  return (
    <>
      <SEO
        title="Gifts"
        description_ua="Шукаєте ідеальний подарунок? Подарункові картки нашого інтернет-магазину — ідеальне рішення! Порадуйте своїх друзів і близьких розкішшю вибору за допомогою наших універсальних подарункових карток. Незалежно від того, чи їм подобається модний одяг, стильне взуття чи модні аксесуари , вони знайдуть те, що їм подобається, у нашій великій колекції. Завдяки різноманітним номіналам ви можете подарувати нескінченні можливості для покупок. Придбайте зараз і скрасьте чийсь день подарунком стилю! Вітайте нових співробітників, дякуйте клієнтам або відзначайте зусилля вашої команди за допомогою нашої універсальної подарункової картки. Поширюйте радість і вдячність без зусиль!"
      />
      <Gifts />
    </>
  );
};

export default GiftsPage;
