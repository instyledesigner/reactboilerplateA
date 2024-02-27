import React, { useEffect, useState } from 'react'
import MetaHelmet from '../components/metahelmet/MetaHelmet'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import axios from 'axios'

const bodBaseURL = "https://jsonplaceholder.typicode.com/users";

const BOD = () => {

  const [bodItems, setBodItems] = useState([]);

  useEffect(() => {
    axios.get(bodBaseURL).then((somenewvarname) => {
      setBodItems(somenewvarname.data);
    });
  }, [])

  return (
    <div>
      <MetaHelmet metaTitle='BOD' metaDescription='meta description bod page' />
      <Breadcrumb />
      
      <div>
        <div>
          {bodItems.map((bodItem) => (
            <p key={bodItem.id}>
              {bodItem.name}
            </p>
          ))}
        </div>
      </div>

    </div>
  )
}

export default BOD