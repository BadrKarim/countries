import React from 'react';

const Card = ({country}) => {
    return (
        <li className='card'>
            <img src={country.flag.svg} 
            alt={"drapeau" + country.transtations.fra.common} />
            <div className="infos">
                <h2>Nom du Pays</h2>
            </div>
        </li>
    );
};

export default Card;