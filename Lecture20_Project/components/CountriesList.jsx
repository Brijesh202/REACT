import { useState } from 'react';
import countriesData from '../countriesData'
import CountryCard from './CountryCard';

const CountriesList = ({query}) => {
  // console.log(countriesData);
  return (
    <>
    <div className="countries-container">
    {
      countriesData.filter((country) => country.name.toLocaleLowerCase().includes(query)).map((country) => {
      console.log(country);
      return (
        <CountryCard 
          key={country.name}
          name={country.name} 
          flag={country.flags.svg} 
          population={country.population.toLocaleString('en-IN')} 
          region={country.region} 
          capital={country.capital}
        />
      )
    })}
  </div>
  </>
  )
}

export default CountriesList;