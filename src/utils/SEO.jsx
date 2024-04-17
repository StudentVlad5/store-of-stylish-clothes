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
      <title>{title}</title>
      <meta lang="en" name="description" content={description} />
      {description_ua && (
        <meta lang="uk-UA" name="description" content={description_ua} />
      )}
      <meta lang="en" name="keywords" content={keywords} />
      {keywords_ua && (
        <meta lang="uk-UA" name="keywords" content={keywords_ua} />
      )}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
