import React from 'react';
import MetaHelmet from '../components/metahelmet/MetaHelmet';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const AboutUs = () => {

  return (
    <div>
      <MetaHelmet metaTitle='About Us' metaDescription='meta description about page' />
      <Breadcrumb />
      AboutUs      
    </div>
  );
}

export default AboutUs;
