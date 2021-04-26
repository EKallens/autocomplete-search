import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CountryContext = React.createContext(null);

const CountryProvider = (props) => {

    const [country, setCountry] = useState();
    const [countryInfo, setCountryInfo] = useState();

    useEffect(() => {

        const getCountryByName = async() => {
            try {
                if(country){
                    const resp = await axios.get(`https://restcountries.eu/rest/v2/name/${ country }`);
                    setCountryInfo(resp.data[0]);
                }
            } catch (error) {
                console.log(error);
            }
        }

        getCountryByName();

    }, [country]);

    return (
        <CountryContext.Provider value={{ country, countryInfo, setCountry }}>
            {props.children}
        </CountryContext.Provider>
    )

}

export default CountryProvider;