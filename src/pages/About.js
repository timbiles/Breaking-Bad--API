import React from 'react';

import {Highlight} from '../styles/homeStyle'
import '../Components/About/About.css';

const About = () => {
    return (
        <div className='about'>
            <h2>Say my <Highlight>N</Highlight>ame</h2>
            <div className='about_cont'>

                <h3>Who</h3>
                <p>Hi, I'm Tim Biles. I am a developer in the Dallas, Fort Worth area in Texas. Breaking Bad is my favorite TV show. Check out my portfolio <a href="https://timbilestim.netlify.com/" target='blank'>here</a>!</p>
                <h3>What</h3>
                <p>The Breaking Bad API is a collection of information on the Vince Gilligan series. This site is designed to make it easy on the developer to see what HTTP requests are possible, and what information is available.</p>
                <ul>The following information is provided through this API...</ul>
                <li>Characters</li>
                <li>Episodes</li>
                <li>Quotes</li>
                <li>Deaths</li>
                <h3>Why</h3>
                <p>Breaking Bad is regarded as one of the greatest television series of all time, and with 16 Primetime Emmy Awards, it is worthy of it's own API. In my search, I was unable to find an API that contained the amount of information I wanted, so I created one.</p>
                <h3>Tech Stack</h3>
                <p>This project was build using Javascript, React, Node, Express, Massive, and Axios.</p>
                <h3>Issues</h3>
                <p>If you come across any errors, please contribute by creating an issue on <a href="https://github.com/" target='blank'>GitHub</a>! I will gladly correct them as soon as I can.</p>
                <h3>Contact</h3>
                <p>If you would like to talk about a project you are wanting to build, or just to connect, please head over to my portfolio and send me a message. I would love to chat with you about your idea!</p>
                <h3>Copyright</h3>
                <p>I do not own the rights to any material provided in this API. Breaking Bad was created by Vince Gilligan, and originally aired on AMC. The majority of this data collected was from a  <a href='https://en.wikipedia.org/wiki/Breaking_Bad' target='blank'>Wikipedia.com</a> and <a href='http://breakingbad.wikia.com/wiki/Breaking_Bad_Wiki' target='blank'>Wikia.com</a></p>
            </div>
                

        </div>
    );
};

export default About;
