import React from 'react'
import './CountriesListShimmer.css'

const CountriesListShimmer = () => {
  return (
    <div className='countries-container'>
        {
          Array.from({length: 10}).map((el,index) => {
            return <div key={index} className="country-card shimmer-card"></div>
          })
        }
    </div>
  )
}

export default CountriesListShimmer