import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MetaHelmet from '../components/metahelmet/MetaHelmet';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import NewsData from '../pages/NewsData';

const News = () => {
  const itemsPerPage = 5;
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting the 'year' parameter from the query string
  const searchParams = new URLSearchParams(location.search);
  const selectedYear = searchParams.get('year') || 'All';

  // Sample data
  const allYears = ['All', '2024', '2023', '2022', '2021', '2020', '2019']; // Replace with your actual years
  const filteredItems = selectedYear === 'All'
    ? NewsData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : NewsData.filter((item) => 
      new Date(item.date).getFullYear().toString() === selectedYear && item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    setItemsToShow(itemsPerPage);
  }, [selectedYear, searchTerm]);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemsPerPage);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <MetaHelmet metaTitle='News' metaDescription='meta description news page' />
      <Breadcrumb />
      <div>
        <div>
          {/* Input field for searching */}
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* Button to clear search */}
          <button onClick={handleClearSearch}>Clear</button>
          {/* Mapping through years and creating tabs with Link */}
          {allYears.map((year) => (
            <Link
              key={year}
              to={`/investors/news?year=${year}`}
              className={`me-2 mb-2 btn btn-${year === selectedYear ? 'info' : 'dark'}`}
            >
              {year}
            </Link>
          ))}
        </div>
        <div>
          {filteredItems.slice(0, itemsToShow).map((item) => (
            <div key={item.id} className='border-bottom mb-5'>
              <h3>{item.title}</h3>
              <p>Date: {item.date}</p>
              <p>{item.body}</p>
              {/* Link to the news item detail page using the item's id */}
              <Link to={`/investors/news/${item.id}`}>Read More</Link>
            </div>
          ))}
          {filteredItems.length > itemsToShow && (
            <button
              className='btn btn-primary'
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
