import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NewsData from '../pages/NewsData';

const NewsItemN = () => {
    const location = useLocation();
  const newsId = location.pathname.split('/').pop();
  const index = parseInt(newsId) - 1; // Adjust the index
  const thisNews = NewsData[index];
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  if (!thisNews) {
    return <div>News item not found</div>;
  }

    return (
        <div className=''>
      <div className='container pt-5'>
        <div className="row _pt-4 _bg-dark">
          <div className="col-xs-12 mb-4">
            <h1>{thisNews.title}</h1>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: thisNews.body }} />
            {/* Back button to navigate back */}
            <button className='btn btn-secondary' onClick={handleGoBack}>Back</button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default NewsItemN;
