import React from 'react';

import './Docs.css';

const Docs = () => {
    var example = (<div className='multi_line'>
        <p>{"{"}</p>
        <p>{'"id": 1,'}</p>
        <p>{'"name": "Walter White",'}</p>
        <p>{'"birthday": "09-07-1958",'}</p>
        <p>{'"occupation": "High School Chemistry Teacher, Meth King Pin",'}</p>        
        <p>{'"img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",'}</p>
        <p>{'"status": "Deceased",'}</p>        
        <p>{'"nickname": "Heisenberg"'}</p>        
        <p>{"}"}</p>
        
    </div>);
    return (
        <div className='documentation'>
            <nav></nav>
            <div className='docs_main'>
                <h2>Documentation</h2>
                <p>Welcome to the Breaking Bad API! This documentation should supply with you all the information you need to start making your HTTP requests. Look over this before you get started on your project, and don't forget about the ice trays!</p>
            <div>
                <h4>Base Url</h4>
                <p className='example'>/api/</p>
            </div>
            <div>
                <h3>Characters Endpoint</h3>
                <p>Endpoint to retrieve information from all characters.</p>
                <p className='example'>/api/characters</p>
                <p>Example request by character id. </p>
                <p className='example'>/api/characters/1</p>
                <div className='example code'>
                {example}
                </div>
                <p>Request a random character</p>
                <p className='example'>/api/character/random</p>
                <h3>Character - Query Parameters</h3>
                <h4>Limit & Offset</h4>
                <p className='example'>/api/characters?limit=10&offset=10</p>
                <h4>Name</h4>
                <p className='example'>/api/characters?name=Walter+White</p>
                <p>Notice the 'plus sign' between the first and last name represents a space. This query only works with the full name of a character. Double check your spelling!</p>
                
            </div>
            <div>
                <h3>Episode Endpoint</h3>
                <p className='example'>/api/episode</p>
            </div>
            <div>
                <h3>Quote Endpoint</h3>
                <p className='example'>/api/quotes</p>
            </div>
            </div>
        </div>
    );
};

export default Docs;