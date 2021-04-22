import React, { useState, useEffect } from 'react';
import AutoComplete from './AutoComplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const Searcher = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async() => {
            try {
                const resp = await axios.get('https://restcountries.eu/rest/v2/all');
                setCountries(resp.data);
            } catch (error) {
                console.log(error);
            }
        }

        getCountries();

    }, [setCountries]);

    console.log(countries);

    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <h2>Search Country</h2>
                    <p>Searching countries by name</p>
                    <div className="d-flex justify-content-center">
                        <div className="search-bar-container">
                            <AutoComplete data={countries} />
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="search-bar-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searcher
