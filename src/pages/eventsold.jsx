import React, { useState } from 'react';
import MetaHelmet from '../components/metahelmet/MetaHelmet'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import EventsData from './EventsData';

const Events = () => {

  const allYears = Array.from(
    new Set(EventsData.map((singleYear) => new Date(singleYear.eventDate).getFullYear()))
  );
  const [selectedYear, setSelectedYear] = useState(allYears[0]);
  const filteredEvents = EventsData.filter(
    (currentYearEvents) => new Date(currentYearEvents.eventDate).getFullYear() === selectedYear
  );

  // Sort events by date in ascending order
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.eventDate);
    const dateB = new Date(b.eventDate);
    return dateA - dateB;
  });

  // Reverse the order to get descending order
  const reversedEvents = [...sortedEvents].reverse();

  // Categorize events into upcoming and past events
  const currentDate = new Date();
  const upcomingEvents = reversedEvents.filter((event) => new Date(event.eventDate) > currentDate);
  const pastEvents = reversedEvents.filter((event) => new Date(event.eventDate) <= currentDate);

  return (
    <div>
      <MetaHelmet metaTitle='Events' metaDescription='meta description events page' />
      <Breadcrumb />
      
      


      <div className=''>
      <InnerBanner pagetitle='Events' />
      <div className='container pt-5'>
        <div className='row _pt-4 _bg-dark'>
          <div className='col-xs-12 mb-4 '>
            <div>
              <div className='mb-5 event-tabs-wrapper d-flex justify-content-center'>
                {allYears.map((currentYear, id) => (
                  <button
                    key={id}
                    className={`btn btn-${currentYear === selectedYear ? 'info' : 'light'}`}
                    onClick={() => setSelectedYear(currentYear)}
                  >
                    {currentYear}
                  </button>
                ))}
              </div>

              {/* Upcoming Events */}
              {upcomingEvents.length > 0 && (
                <div className="mb-4">
                  <h4>Upcoming Events</h4>
                  {upcomingEvents.map((eventItem, id) => (
                    <div key={id} className='event-tabs-content-wrapper py-2 border-bottom'>
                      <div className='d-flex justify-content-between'>
                        <p className='eventtitle'>
                          <em>{eventItem.eventDate}</em>
                          <br />
                          <strong>{eventItem.eventName}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Past Events */}
              {pastEvents.length > 0 && (
                <div>
                  <h4>Past Events</h4>
                  {pastEvents.map((eventItem, id) => (
                    <div key={id} className='event-tabs-content-wrapper py-2 border-bottom'>
                      <div className='d-flex justify-content-between'>
                        <p className='eventtitle'>
                          <em>{eventItem.eventDate}</em>
                          <br />
                          <strong>{eventItem.eventName}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Events