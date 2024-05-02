import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export function SEO({
  title,
  description,
  description_ua,
  keywords,
  keywords_ua,
}) {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{title}</title>
      {description_ua && (
        <meta lang="uk-UA" name="description" content={description_ua} />
      )}
      {keywords_ua && (
        <meta lang="uk-UA" name="keywords" content={keywords_ua} />
      )}
      <meta lang="en" name="description" content={description} />
      <meta lang="en" name="keywords" content={keywords} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
