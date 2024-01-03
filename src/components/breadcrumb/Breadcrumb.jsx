import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
    <div>
          
    <nav aria-label="breadcrumb">
      <ol>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li className={`text-uppercase text-decoration-none m-0 p-0 breadcrumb-item ${isLast ? 'active' : ''}`} key={name}>
              {isLast ? (
                name
              ) : (
                <Link className='me-2 text-decoration-none' to={routeTo}><span>{name}</span></Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    </div>
    </div>
  );
};

export default Breadcrumb;