import React from 'react';

function FlickrPhotoPlotter()  {
    const goalsData = ['All application components render on-screen in a responsive manner.',
        'All application components are usable across modern desktop, tablet, and phone browsers.',
        'Includes a text input field that filters the map markers and list items to locations matching the text input or selection.',
        'A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.',
        'Clicking a location on the list displays unique information about the location, and animates its associated map marker.',
        'Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.',
        'Clicking a marker displays unique information about a location somewhere on the page.',
        'Application utilizes the Google Maps API or another mapping system and at least one non-Google third-party API',
        'All data requests are retrieved in an asynchronous manner using either the Fetch API or XMLHttpRequest.',
        'A README file is included detailing all steps required to successfully run the application.',
        'Functionality providing additional data about a location is provided and sourced from a 3rd party API.',
        'React code follows a reasonable component structure.',
        'State control is managed appropriately: event handlers are passed as props to child components, and state is managed by parent component functions when appropriate.',
        ]
    return (
        <div>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Goals:</h3>
                <p>Develop a single-page application using React featuring a map of your choice or a map of a place you would like to visit. 
                    Add additional functionality to this application, including: 
                    map markers to identify popular locations or places you’d like to visit, 
                    a search function to easily discover these locations, and a list view to support simple browsing of all locations. 
                    Research and implement third-party APIs that provide additional information about each of these locations 
                    (such as StreetView images, Wikipedia articles, Yelp reviews, etc).
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
                    This single page application displays a map (Google Maps) and a list of landmarks 
                    (currently the landmarks are Dodecanese islands of Greece plus Santorini and Delos). 
                    The user can filter the landmarks by using the input field above the marker list. 
                    By clicking on either the marker on the map or the list item at the list of markers 
                    an infoWindow will expand above the marker on the map.
                </p>
                <ul>
                    <em>By default the info window displays the following information:</em>
                    <li>A brief description of the landmark (fetched from the 
                        {<a href="https://en.wikipedia.org/w/api.php" target="_blank" rel="noopener noreferrer"> English Wikipedia API</a>})
                    </li>
                    <li>A thumbnail of a random public-photograph (fetched from the 
                        {<a href="https://www.flickr.com/services/api/" target="_blank" rel="noopener noreferrer"> Flickr API</a>})
                        <ul>
                            <li>By clicking on the thumbnail in the infowindow a modal window will open that displays the large version of the photo.</li>
                            <li>Each time the user clicks on a (non expanded) marker a different photo will appear (with the current version of the app each location can have up to 250 photographs)</li>
                        </ul>
                    </li>
                    <li>A button that if pressed will plot the current flickr photo on the map based on the photographs geolocation. 
                         A new marker (with a different icon from the default) will be placed on the spot that the photograph was taken 
                         <em> the geolocation of the photograph is also provided by the Flickr API.</em></li>


                </ul>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">Approach/Milestones:</h3>
                <p className="prj-pg-details-p">
                    This project had so many moving parts that it had to be broken down to many sub-problems: </p>
                    {<ul>
                        <li>How to use Google Maps with React?</li>
                        <li>Wikipedia API implementation</li>
                        <li>Flickr API implementation</li>
                        <li>Error handling for the every asynchronous request</li>
                        <li>State management </li>
                    </ul>}
                    <p className="prj-pg-details-p">
                    Just like every problem that involves programming the implementations of Google Maps within a React app had multiple solutions.
                    I choose not to rely on any external library for this task and instead used one of  
                    react components lifecycle events: <code> componentDidMount()</code> to initialize the map.
                    Although the Wikipedia API call was pretty easy to deal with the flickr API had <strong> a lot</strong> of details:
                    specifically the API call requests for photos that have geolocation as metadata and the search is based on a pair of coordinates
                    within a specific radius and must contain a certain string 
                    either as a title/album name/photograph name or TAG,
                    plus an extra call is made to get the actual geolocation and finally a function 
                    was written for the purpose of constructing the url for each photograph...fortunately the flickr API has great documentation
                    ٩(⁎❛ᴗ❛⁎)۶ Since most of the API calls were made with fetch API it the <code> catch</code> method was used to handle the errors
                    and in case of errors would provide the user with some meaningful information about what went wrong.  
                </p>
            </article>
            <article className="prj-pg-details-article">
                <h3 className="prj-pg-details-article-h3">What did I learn from this project?</h3>
                <p className="prj-pg-details-p">
                I learned how design patterns and UI libraries like React assist in developing a manageable codebase. 
                I also explored how frameworks can decrease the time required developing an application and provide a 
                number of utilities for us to use. 
                Finally, by implementing third-party APIs that provide valuable data sets can greatly improve the quality 
                of an application.
                </p>
            </article>
        </div>
    ) 
}

export default FlickrPhotoPlotter;