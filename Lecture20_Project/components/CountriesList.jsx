import { useEffect, useState } from 'react';
import countriesData from '../countriesData'
import CountryCard from './CountryCard';
import CountriesListShimmer from './CountriesListShimmer';

const CountriesList = ({query}) => {
  // console.log(countriesData);

  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  },[]);

  return (
    <>
    {loading ? (<CountriesListShimmer/>) : (<div className="countries-container">
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
  </div>)}
  </>
  )
}

export default CountriesList;