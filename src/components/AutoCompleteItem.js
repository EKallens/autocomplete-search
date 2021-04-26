import React from 'react';

const AutoCompleteItem = ({ name, capital, region, flag, onSelectItem }) => {
    return (
        <li className="list-group-item" onClick={onSelectItem}>
            <div className="row">
                <div className="col text-left">
                    <p className="mb-0 font-weight-bold line-height-1">
                        {name}{" "}
                        <img src={flag} alt="" style={{ width: '30px' }}/>
                    </p>
                    <p className="mb-0 badge alert-primary">{ region }</p>
                    <p className="mb-0 badge alert-secondary ms-2">{capital}</p>
                </div>
            </div>
        </li>
    )
}

export default AutoCompleteItem;