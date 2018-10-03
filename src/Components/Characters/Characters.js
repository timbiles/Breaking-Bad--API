import React from 'react';

import './Characters.css'

const Characters = (props) => {
    const {person} = props
    return (
        <div className='character'>
            <img src={person.img} alt={person.name}/>
            <p>
            {person.name}
            </p>
        </div>
    );
};

export default Characters;