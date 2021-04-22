import React, { useRef, useState, useEffect, useMemo } from 'react'
import AutoCompleteItem from './AutoCompleteItem';

const AutoComplete = ({ data }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [cursor, setCursor] = useState(-1);

    const searchContainerRef = useRef(null);
    const searchResultRef = useRef(null);

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        };

    }, []);

    const suggestions = useMemo( () => {
        if(!search){
            return data;
        }

        return data.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);

    const handleClickOutside = event => {

        if(
            searchContainerRef.current &&
            !searchContainerRef.current.contains(event.target)
        ){
            hideSuggestion();
        }

    }

    const showSuggestion = () => setIsVisible(true);
    const hideSuggestion = () => setIsVisible(false);

    return (
        <div className="test" ref={searchContainerRef}>
            <input
                type="text"
                name="search"
                className="search-bar"
                autoComplete="off"
                onClick={showSuggestion}
                onChange={e => setSearch(e.target.value)}
            />

            <div className="search-result">
            {
                isVisible &&
                    <ul className="list-group" ref={searchResultRef}>
                        {
                            suggestions.map( item => (
                                <AutoCompleteItem key={item.alpha2Code} {...item} />
                            ))
                        }
                    </ul>
            }
            </div>
        </div>
    )
}

export default AutoComplete
