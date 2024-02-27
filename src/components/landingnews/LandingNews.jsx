import React from 'react';
import { Link } from 'react-router-dom';
import NewsData from '../../pages/NewsData';

const LandingNews = () => {
  const latest3PressReleases = NewsData.slice(0, 3);

  return (
    <div className='pt-4'>
      <p className='text-uppercase'><strong>Recent press releases</strong></p>
      {latest3PressReleases.map((newsitem) => (
        <div key={newsitem.id}>
          <p>
            <strong>
              <Link to={`/investors/news/${newsitem.id}`}>
                {newsitem.title}
              </Link>
            </strong>
          </p>
        </div>
      ))}
      <p>
        <Link to='/investors/news'>Read more</Link>
      </p>
    </div>
  );
};

export default LandingNews;
