import React from 'react';

import './Docs.css';

const Docs = () => {
    return (
        <div className='documentation'>
            <nav></nav>
            <div className='docs_main'>
                <h2>Documentation</h2>
                <p>Welcome to the Breaking Bad API! This documentation should supply with you all the information you need to start making your HTTP requests. Look over this before you get started on your project, and don't forget about the ice trays!</p>
            <div>
                <h4>Base Url</h4>
                <p>http://localhost:3001/api/</p>
            </div>
            <div>
                <h4>Characters Endpoint</h4>
                <p>http://localhost:3001/api/characters</p>
                <p>Example request by character id. </p>
                <p>http://localhost:3001/api/characters/1</p>
                <div className='example'>

                <span>{`{"id":1,"name":"Walter White","birthday":"09-07-1958","occupation":"High School Chemistry Teacher, Meth King Pin","img":"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg","status":"Deceased?","nickname":"Heisenberg"}`}</span>
                </div>
                
            </div>
            <div>
                <h4>Episode Endpoint</h4>
                <p>http://localhost:3001/api/episode</p>
            </div>
            <div>
                <h4>Quote Endpoint</h4>
                <p>http://localhost:3001/api/quotes</p>
            </div>
            </div>
        </div>
    );
};

export default Docs;