import React from 'react';
import FunkyHeader from '../../FunkyText/FunkyHeader';
import Ft from '../../FunkyText/FunkyText';

function WeatherApp()  {
    const goalsData = [
        'the user can see the weather in his current location',
        'the user can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather',
        'the user can push a button to toggle between Fahrenheit and Celsius.',
        ];
    const goals = 'The objective in this challenge from freeCodeCamp was to create a webpage that can display the current weather.';
    const functionality1 = 'You can get the weather in your current location by clicking the thermometer icon. Alternatively you can get the weather for any location:';
    const functionalityList = [
        'Click the globe icon to expand the map',
        'Click on the map to pick the location (after clicking on the map a popup with the coordinates appears on the map)',
        'Click on the thermometer'
    ];
    const functionality2 = 'By default the units that are used to display the temperature are Celsius. To change the units from Celsius to Fahrenheit and via versa just click on C/F icon next to the displayed temperature.';
    const approach1 = "I choose not to use HTML5 native geolocation navigator.geolocation.getCurrentPosition(showPosition)in order to get rid of the pop-up that asks the user to allow the website to access his location, instead I used the https://geoip-db.com/ as a workaround to get the users location. For the weather forecast the openweathermap API was used. To 'GET' the data from the external APIs I used jQuery's $.ajax() method.";
    const approach2 = "One problem that I encountered was Cross-Origin Resource Sharing (CORS). While the application worked as intended on my desktop when hosted on codepen.io the request to the openweathermap API was violating the CORS policy, as a workaround the cors-anywhere.herokuapp.com API was used.";
    const finale = "There's data on the web that's just waiting to be used. Most of the data-rich applications we use get the data from 3rd party websites. They actually fetch this data using APIs. The project depends on two different APIs (geoip-db & openweathermap) to get the users location and the current weather. This gave me the opportunity to practice my asynchronous requests with jQuery to fetch data from external sources, parse the data and display it in a meaningful way.";

    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Goals:"><FunkyHeader text="Goals:"/></h3>
                <p className="prj-pg-details-p" aria-label={goals}>
                    <Ft>The objective in this challenge from 
                    <a href="https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/show-the-local-weather/" 
                        target="_blank" rel="noopener noreferrer"> freeCodeCamp
                    </a> was to create a webpage that can display the current weather.</Ft>
                </p>
                <strong aria-label="Additional requirements:"><Ft>Additional requirements:</Ft></strong>
                <ul className="check-list">
                {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item" aria-label={listItem}><Ft>{listItem}</Ft></li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Functionality:"><FunkyHeader text='Functionality:'/></h3>                
                <p className="prj-pg-details-p" aria-label={functionality1}>
                    <Ft>{functionality1}</Ft>
                </p>
                <ul>
                {functionalityList.map((li,i)=>(
                        <li key={i} aria-label={li}><Ft>{li}</Ft></li>
                    ))}
                </ul> 
                <p className="prj-pg-details-p" aria-label={functionality2}>
                    <Ft>{functionality2}</Ft>
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="Approach/Milestones:"><FunkyHeader text="Approach/Milestones:"/></h3>                
                <p className="prj-pg-details-p" aria-label={approach1}>
                    <Ft>I choose not to use HTML5 native geolocation <code><Ft> navigator.geolocation.getCurrentPosition(showPosition)</Ft></code> 
                    in order to get rid of the pop-up that asks the user to allow the website to access his location, 
                    instead I used the <a href="https://geoip-db.com/" target="_blank" rel="noopener noreferrer"> https://geoip-db.com/ </a>
                    as a workaround to get the users location. For the weather forecast the 
                    <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer"> openweathermap API </a>
                    was used. To 'GET' the data from the external APIs I used jQuery's <code><Ft> $.ajax()</Ft></code> method.</Ft>
                </p>
                <p className="prj-pg-details-p" aria-label={approach2}>
                    <Ft>One problem that I encountered was Cross-Origin Resource Sharing (CORS). While the application worked as intended on my desktop
                    when hosted on codepen.io the request to the openweathermap API was violating the CORS policy, as a workaround the 
                    <a href="https://cors-anywhere.herokuapp.com/" target="_blank" rel="noopener noreferrer"> cors-anywhere.herokuapp.com </a>
                    API was used.</Ft>
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3" aria-label="What did I learn from this project?"><FunkyHeader text="What did I learn from this project?"/></h3>
                <p className="prj-pg-details-p" aria-label={finale}>
                    <Ft>{finale}</Ft>
                </p>
            </article>
        </div>
    ) 
}

export default WeatherApp;