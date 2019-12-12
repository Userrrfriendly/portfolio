import React from "react";
import FunkyHeader from "../../FunkyText/FunkyHeader";
import Ft from "../../FunkyText/FunkyText";

function FlickrPhotoPlotter() {
  const goalsData = [
    "All application components render on-screen in a responsive manner.",
    "All application components are usable across modern desktop, tablet, and phone browsers.",
    "By clicking the search button a request is made to Flickr's API that fetches geotagged photos that fall within map extents",
    "Includes controls for customizing the query (max number of photos fetched, min/max date taken, etc)",
    "Clicking on the marker on the map reveals the photo, with some additional info",
    "Clicking on a photo in the gallery view opens a lightbox",
    "Photos can be added/removed from favorites that can be viewed separately from the rest of the results",
    "Map options include hide/show results/favorites",
    "Additionally the user can search photos by typing the location name/address/landmark inside a searchbox ",
    "Searchbox uses Google's autocomplete API to assist the user"
  ];
  const goals = `Main goal was to do something fun with the world's biggest image database - Flickr, eventually I decided to make an app that lets the user query geotagged photos (photos that have coordinates either from camera's or phone's GPS, or in some cases the photographs owner sets the geolocation of the photo explicitly) by the location they were taken.`;
  const functionality = `In a nutshell all the user has to do is select the location on the map by zooming/panning to the desired destination and hit the search button that fires a request to Flickr's API that fetches all geotagged photos that fall within the current map extents. Alternatively the user can use searchbox that utilizes Google's Autocomplete and Geocoding API to search for a location/address/landmark and automatically zoom/pan the map to its bounds. The results are displayed both as pins on the map and as a "tiled gallery" view, right beneath the map. 
  In the gallery view the user is given some options by hovering the photo's thumbnail these are: open the image in Flickr, add photo to favorites (at the time being the favorites are not stored persistently, but this functionality will be added soon) and temporary hide photos from a specific user.
  Additionally the user can tweak the request by modifying query parameters from the query options (max results to display, min/max date taken, optional text query, etc). Also in case the map is cluttered with pins the user can use the map options to show/hide the results/favorites from the map.`;
  const approach = `The first problem was how to implement Google Maps with React. 
  Just like every problem that involves programming the implementations of Google Maps within a React app had 
  multiple solutions. I choose not to rely on any external library for this task and instead used one 
  of react components lifecycle events:   componentDidMount()  to initialize the map. 
  Second milestone was how to use Flickr's API and although the documentation is pretty good, 
  the API itself has some small caveats (I remember trying to wrap my head why the optional 
    query parameters radius_units returned wrong results when the units was set to kilometers
     instead of miles, after some manual testing it became obvious that the particular query 
     parameter simply wasn't coded properly on the back end and always returned results in miles). `;

  const finale =
    "I learned how design patterns and UI libraries like React assist in developing a manageable codebase. I also explored how frameworks can decrease the time required developing an application and provide a number of utilities for us to use. Finally, by implementing third-party APIs that provide valuable data sets can greatly improve the quality of an application.";
  return (
    <div>
      <article className="prj-pg-details-article">
        <h3 className="prj-pg-details-article-h3" aria-label="Goals:">
          <FunkyHeader text="Goals:" />
        </h3>
        <p aria-label={goals}>
          <Ft>
            Main goal was to do something fun with the world's biggest image
            database - Flickr, eventually I decided to make an app that lets the
            user query geotagged photos{" "}
            <em>
              <Ft>
                (photos that have coordinates either from camera's or phone's
                GPS, or in some cases the photographs owner sets the geolocation
                of the photo explicitly)
              </Ft>
            </em>
            by the location they were taken.
          </Ft>
        </p>
        <strong aria-label="Additional requirements:">
          <Ft>Additional requirements:</Ft>
        </strong>
        <ul className="check-list">
          {goalsData.map((listItem, i) => (
            <li key={i} className="check-item" aria-label={listItem}>
              <Ft>{listItem}</Ft>
            </li>
          ))}
        </ul>
      </article>
      <article className="prj-pg-details-article">
        <h3 className="prj-pg-details-article-h3" aria-label="Functionality:">
          <FunkyHeader text="Functionality:" />
        </h3>
        <p className="prj-pg-details-p" aria-label={functionality}>
          <Ft>
            In a nutshell all the user has to do is select the location on the
            map by zooming/panning to the desired destination and hit the search
            button that fires a request to Flickr's API that fetches all
            geotagged photos that fall within the current map extents.
            Alternatively the user can use searchbox that utilizes Google's
            Autocomplete and Geocoding API to search for a
            location/address/landmark and automatically zoom/pan the map to its
            bounds. The results are displayed both as pins on the map and as a
            "tiled gallery" view, right beneath the map.
            <p>
              <Ft>
                In the gallery view the user is given some options by hovering
                the photo's thumbnail these are: open the image in Flickr, add
                photo to favorites (at the time being the favorites are not
                stored persistently, but this functionality will be added soon)
                and temporary hide photos from a specific user.
              </Ft>
            </p>
            Additionally the user can tweak the request by modifying query
            parameters from the query options (max results to display, min/max
            date taken, optional text query, etc). Also in case the map is
            cluttered with pins the user can use the map options to show/hide
            the results/favorites from the map.
          </Ft>
        </p>
      </article>
      <article className="prj-pg-details-article">
        <h3
          className="prj-pg-details-article-h3"
          aria-label="Approach/Milestones:"
        >
          <FunkyHeader text="Approach/Milestones:" />
        </h3>
        <p className="prj-pg-details-p" aria-label={approach}>
          <Ft>
            The first problem was how to implement Google Maps with React. Just
            like every problem that involves programming the implementations of
            Google Maps within a React app had multiple solutions. I choose not
            to rely on any external library for this task and instead used one
            of react components lifecycle events:{" "}
            <code>
              <Ft>componentDidMount()</Ft>
            </code>
            to initialize the map. Second milestone was how to use Flickr's API
            and although the documentation is pretty good, the API itself has
            some small caveats (I remember trying to wrap my head why the
            optional query parameters radius_units returned wrong results when
            the units was set to kilometers instead of miles, after some manual
            testing it became obvious that the particular query parameter simply
            wasn't coded properly on the back end and always returned results in
            miles).{" "}
          </Ft>
        </p>
      </article>
      <article className="prj-pg-details-article">
        <h3
          className="prj-pg-details-article-h3"
          aria-label="What did I learn from this project?"
        >
          <FunkyHeader text="What did I learn from this project?" />
        </h3>
        <p className="prj-pg-details-p" aria-label={finale}>
          <Ft>{finale}</Ft>
        </p>
      </article>
    </div>
  );
}

export default FlickrPhotoPlotter;
