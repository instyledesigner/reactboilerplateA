import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaHelmet = ({ metaTitle, metaDescription }) => {
  return (
    <Helmet>
        <meta name="title" content={`IHW || Infinite Horizon Web || ${metaTitle}`} />
        <meta name="description" content={`IHW || Infinite Horizon Web || ${metaDescription}`} />
    </Helmet>
  );
};

export default MetaHelmet
