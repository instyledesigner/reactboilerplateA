import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PRData from '../../pages/NewsData'

const NewsItem = () => {

  const location = useLocation();
  const newsId = location.pathname.split('/').pop(); // Extract last segment of the URL
  const index = parseInt(newsId);
  const thisNews = PRData[index];
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // This will take the user back to the previous page
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
            {/* Other properties like author, date, etc. if present in your data */}
            <button className='btn btn-secondary' onClick={handleGoBack}>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem