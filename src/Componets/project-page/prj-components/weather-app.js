import React from 'react';

function WeatherApp()  {
    const goalsData = [
        'the user can see the weather in his current location',
        'the user can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather',
        'the user can push a button to toggle between Fahrenheit and Celsius.',
        ]
    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Goals:</h3>
                <p className="prj-pg-details-p">
                    The objective in this challenge from 
                    <a href="https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/show-the-local-weather/" 
                        target="_blank" rel="noopener noreferrer"> freeCodeCamp
                    </a> was to create a webpage that can display the current weather.
                </p>
                <ul className="check-list"><strong>Additional requirements:</strong>
                {goalsData.map((listItem, i)=>(
                        <li key={i} className="check-item">{listItem}</li>
                    ))}
                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Functionality:</h3>
                <p className="prj-pg-details-p">
                    You can get the weather in your current location by clicking the thermometer icon.
                    Alternatively you can get the weather for any location:
                </p>
                <ul>
                    <li>Click the globe icon to expand the map</li>
                    <li>Click on the map to pick the location (after clicking on the map a popup with the coordinates appears on the map)</li>
                    <li>Click on the thermometer</li>
                </ul> 
                <p className="prj-pg-details-p">
                    By default the units that are used to display the temperature are Celsius.
                    To change the units from Celsius to Fahrenheit and via versa just click on C/F icon next to the displayed temperature.
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Approach/Milestones:</h3>
                <p className="prj-pg-details-p">
                    I choose not to use HTML5 native geolocation <code> navigator.geolocation.getCurrentPosition(showPosition)</code> 
                    in order to get rid of the pop-up that asks the user to allow the website to access his location, 
                    instead I used the <a href="https://geoip-db.com/" target="_blank" rel="noopener noreferrer"> https://geoip-db.com/ </a>
                    as a workaround to get the users location. For the weather forecast the 
                    <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer"> openweathermap API </a>
                    was used. To 'GET' the data from the external APIs I used jQuery's <code> $.ajax()</code> method.
                </p>
                <p className="prj-pg-details-p">
                    One problem that I encountered was Cross-Origin Resource Sharing (CORS). While the application worked as intended on my desktop
                    when hosted on codepen.io the request to the openweathermap API was violating the CORS policy, as a workaround the 
                    <a href="https://cors-anywhere.herokuapp.com/" target="_blank" rel="noopener noreferrer"> cors-anywhere.herokuapp.com </a>
                    API was used.
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">What did I learn from this project?</h3>
                <p className="prj-pg-details-p">
                    There's data on the web that's just waiting to be used. 
                    Most of the data-rich applications we use get the data from 3rd party websites. They actually fetch this data using APIs. 
                    The project depends on two different APIs (geoip-db & openweathermap) to get the users location and the current weather.
                    This gave me the opportunity to practice my asynchronous 
                    requests with jQuery to fetch data from external sources, parse the data and display it in a meaningful way.
                </p>
            </article>
        </div>
    ) 
}

export default WeatherApp;