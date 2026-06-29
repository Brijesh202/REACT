import React, { useEffect, useState } from 'react'
import countriesData from '../countriesData';
import './CountryDetail.css'
import { Link, useParams } from 'react-router';

const CountryDetail = () => {
    // const countryName = new URLSearchParams(location.search).get('name');

    const params = useParams()
    console.log(params)
    const countryName = params.country

    console.log(countryName);
    
    const [countryData, setCountryData] = useState({});

    useEffect(() => {
        const country = countriesData.find((c) => {
            return c.name === countryName
        });

        if(!country.borders){
            country.borders = []
        }
         const borderCountries = country.borders.map((borderCode) => {
            const borderCountry = countriesData.find((a) => {
                return a.alpha3Code === borderCode
            });
            return borderCountry ? borderCountry.name : borderCode;
        });


        console.log(country);
        setCountryData({
            name: country.name,
            flag: country.flags.svg,
            nativeName: country.nativeName,
            population: country.population.toLocaleString('en-IN'),
            region: country.region,
            subregion: country.subregion,
            capital: country.capital,
            topLevelDomain: country.topLevelDomain,
            currency: (country.currencies).map((currency) => currency.name).join(', '),
            language:(country.languages).map((language) => language.name).join(', '),
            borders: borderCountries
        })


       
        
    },[countryName])

  return (
    <main>
        <div className="country-details-container">
            <span className="back-button" onClick={() => history.back()}><i className="fa-solid fa-arrow-left-long"></i>&nbsp; &nbsp; Back</span>

        <div className="country-details">
            <img src={countryData.flag} alt={`${countryData.name} flag`}/>
            <div className="details-text-container">
                <h1>{countryData.name}</h1>
                <div className="details-text">
                    <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
                    <p><b>Population: {countryData.population}</b><span className="population"></span></p>
                    <p><b>Region: {countryData.region}</b><span className="region"></span></p>
                    <p><b>Sub Region: {countryData.subregion}</b><span className="sub-region"></span></p>
                    <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
                    <p><b>Top Level Domain: {countryData.topLevelDomain}</b><span className="top-level-domain"></span></p>
                    <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
                    <p><b>Language: {countryData.language}</b><span className="language"></span></p>
                </div>

                {(countryData?.borders?.length ?? 0) > 0 && <div className="border-countries">
                    <b>Border Countries: </b> &nbsp; 
                    {
                        countryData.borders?.map((border) => <Link key={border} to={`/country/${border}`}>{border}</Link>)
                    }
                </div>}
            </div>
        </div>
        </div>
    </main>
  )
}


export default CountryDetail;