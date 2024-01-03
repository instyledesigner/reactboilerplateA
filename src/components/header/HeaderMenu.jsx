import React from 'react'
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li><Link to='/aboutus'>About Us</Link>
          <ul>
            <li><Link to='/aboutus/history'>History</Link></li>
            <li><Link to='/aboutus/bod'>BOD</Link></li>
          </ul>
        </li>
        
        <li><Link to='/investors'>Investors</Link>
          <ul>
            <li><Link to='/investors/news'>News</Link></li>
            <li><Link to='/investors/events'>Events</Link></li>
            <li><Link to='/investors/shareprice'>SharePrice</Link></li>
          </ul>
        </li>
        <li><Link to='/contactus'>Contact Us</Link>
          <ul>
            <li><Link to='/contactus/faq'>FAQ</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default HeaderMenu