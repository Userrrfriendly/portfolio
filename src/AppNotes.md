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
        
    - Find Past Experience Picture (half hour)
    - Make Resume Picture (8hours)
    - Fix the images css in the stories (1 hour)
    - Stories and Projects should be list items (1 hour)
        - Add tab index to the stories and the projects (if all things are wrapped in links it will be taken care of)
            - ReactRoute could solve the problem so don't be hasty
    - ----------------------
    - * It would make more sense if in <Nav> you generated the drop-down-items from a file
        - thus you could make the css inline style have height that would be 2rem*number of items
        - this would allow smooth animation.
    - * Add homescreen in <Nav> for better rooting
    - * Add an arrow next to my projects in <Nav> so that the user 'gets' the list
    - * Add a dropdown functionality for the Projects section in the <Nav>
    - * In routing add a component for error page
    - * <Story> doesn't make much sense rename it to something meaningfull like hero section or smth
    - * Create a Story Page 8 hours
    - * Create a Project Page 8 hours
    - * Create a Blog Page 16 hours
    - * Refactor UI for blog stories (1 hour)
    - * Start working on your Resume ...
    - * Add React.Router or #Router 8 hours
        - Refactor all the ankor tags into <Link/>s (30 minutes)
    - * What about image compression? ...
    + * Test on Edge (5 minutes) + (10 minutes to setup at Innovator)
    - * Create Internet Explorer fallbacks (Unknown...)
    - * minify images with gulp-imagemin (2hours including gulp)
    - * Add logo or smth for mobile screens with collapsed nav-bar

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