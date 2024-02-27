import React, { useState } from 'react'
import QuarterlyReportsData from './QuarterlyReportsData'

const QuarterlyReports = () => {

  const uniqueYears = Array.from(
    new Set(QuarterlyReportsData.map((qritem) => qritem.qryear))
  );

  // const uniqueYears = ['2023','2022','2021'] this is also one very simple but manualy way

  const [selectedYear, setSelectedYear] = useState(uniqueYears[0]);

  const filteredReports = QuarterlyReportsData.filter(
    (qritem) => qritem.qryear === selectedYear
  );

  return (
    <div className=''>
      <div className='container pt-5'>
        <div className='row _pt-4 _bg-dark'>
          <div className='col-xs-12 mb-4 '>
            <div>
              
              <div className='mb-5 qr-tabs-wrapper d-flex justify-content-center'>
                {uniqueYears.map((year) => (
                  <button
                    key={year}
                    className={`btn btn-${year === selectedYear ? 'info' : 'light'}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>

              {filteredReports.map((qritem, id) => (
                <div key={id} className='qr-tabs-content-wrapper py-2 border-bottom'>
                  <div className=' d-flex justify-content-between'>
                    <p className='qrtitle'>
                      <strong>{qritem.qrtitle}</strong> - <em>{qritem.qryear}</em> 
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuarterlyReports
