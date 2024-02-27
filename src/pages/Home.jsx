import React from 'react'
import MetaHelmet from '../components/metahelmet/MetaHelmet'
import LandingNews from '../components/landingnews/LandingNews'

const Home = () => {
  return (
    <div>
      <MetaHelmet metaTitle='Home' metaDescription='meta description home page' />
      Home


      <LandingNews />
    </div>
  )
}

export default Home