* data.js holds the values that create the stories
* the figure has a initial width/height of 140% and on hover it shirnks to 100% 
* try implementing img or picture that can serve different images based on the device rather than the background-image prop.
* https://github.com/mbrevda/react-image think about it

## TODO: 2:54 30/09/2018
    + Create a mobile Nav (1 hour) ==> 3 hours
    + Add text overlay to the stories (1 hour) ==> 3 hours
    + Make Project Screenshots (1 hour) ==> (2hours)
    + .project-caption must be styled green for freeCodeCamp and blue for Udacity (1 hour) ==> 1hour
    + iphone5 landscape my story image sucks
    + Add filter overlays for different screens in projects figcaptions(1 hour) ==> 1hour
    + * Add an arrow next to my projects in <Nav> so that the user 'gets' the list => 15 minuts
    + * Create a Project Page 8 hours => 16 hours
    + * In routing add a component for error page (1hour) => (1/2 hour)
    + * Add React.Router or #Router 8 hours => 16hours
        - Refactor all the anchor tags into <Link/>s (30 minutes for stories)
    
    - * Create my Story Page 16 hours
    - * Create Resume Page 16 hours
    - * Create Past Experience Page 16 hours  
    - Fix the images css in the stories (1 hour)
    - Stories and Projects should be list items (1 hour) => 1hour for the projects
    - ----------------------
    - Add Alegreya font to project page
    - Instead of adding live pages, start writing about each project and also correcting everything about it( live links,git hub links,bugs etc)
        - Add live pages to all the projects
            - my reads, restaurant review,
            - in feedreader (unit tests) update code to remove live page
    - for calculator wikireader and weather app EITHER:
        - remove the source button OR
        - add it to github
    - * Change font size at the Legend change colors for the Donought component
    - * Try using object destructuring in routes.js (chart data like 'html', data etc...)
    - 
    - * Do something about the UD between 7000-1000px at Project Page
    - * It would make more sense if in <Nav> you generated the drop-down-items from a file
        - thus you could make the css inline style have height that would be 2rem*number of items
        - this would allow smooth animation.

    + * Test on Edge (5 minutes) + (10 minutes to setup at Innovator)
    - ** <Story> doesn't make much sense rename it to something meaningfull like hero section or smth
    - *** minify images with gulp-imagemin (2hours including gulp)
    - *** Refactor UI for blog stories (1 hour)
    - ** Merge some of the components (up Arrow) (1 hour)
    - ** Add aria for canvas
    - * Create a graph how things are rendered && what is the relationship for each component
    - ⇣ ↧ ⤓ ⤋ ⬍ ⇩ ⇓ ↴ ⤸ ⤶ ⤦  ▼ 

## Remember:
    - Should <Project/> consume each property at a time (main.js) or should it swallow the object and deconstruct it inside the render of project.js?
    - https://kilianvalkhof.com/2016/css-html/css-hexadecimal-colors-with-transparency-a-conversion-tool/
    - https://news.microsoft.com/stories/inthecloudwetrust/
    - https://news.microsoft.com/stories/invisible-revolution/
    - https://tylermcginnis.com/react-router-route-config/
    - move the propTypes from project into the class as a static method.
    - try flexbox for aligning the images in the stories
    - https://css-tricks.com/creating-svg-icon-system-react/
    - Stories and Projects should be list items
        - Add tab index to the stories and the projects (if all things are wrapped in links it will be taken care of)