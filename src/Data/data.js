import mainUrl from '../Images/hero-large_h1.jpg';
// import resumeUrl from '../Images/resume_test.png';
import resumeUrl from '../Images/resume2.jpg';
// import pastXPUrl from '../Images/weatherapp.jpg';
import aboutMe from '../Images/about-me.jpg';
// projects:
import flickr from '../Images/projects/flickr-photo-plotter.jpg';
import arcadeGame from '../Images/projects/arcade-1.jpg'; 
import matchingGame from '../Images/projects/matching-game.jpg';
import myReads from '../Images/projects/myReads.jpg';
import unitTest from '../Images/projects/jasmine.jpg';
import restaurantReview from '../Images/projects/restaurant-review.jpg';
import wikiReader from '../Images/projects/Wikipedia Viewer.jpg'; 
import weatherApp from '../Images/projects/weather-app.jpg';
import calculator from '../Images/projects/calculator.jpg';

export const stories = [
    {
        name: 'My Story',
        url: mainUrl,
        caption:'Read about my transision from Engineering to Software Engineering',
        backgroundColor: 'initial',
        link: '/MyStory'
    },
    {
        name: 'Resume',
        url: resumeUrl,
        caption: 'Download my Resume',
        backgroundColor: 'rgba(0, 0, 255, 0.5)', //purple, #0000ff80 Edge doesnt read hex colors with alpha
        link: '/MyResume'
    },
    {
        name: 'About Me',
        url: aboutMe,
        caption: 'A few words about me ...',
        backgroundColor: 'rgba(39, 168, 175, 0.71)',  //cyan #27a8afb5
        link: '/AboutMe'
    }];

export const projects = [
    {
        name:'Flickr-Photo-Plotter',
        description:'Pins images on a map based on the images geolocation',
        imageUrl: flickr,
        projectType: 'Udacity',
        path: '/projects/flickr-photo-plotter'
    },
    {
        name:'My reads',
        description: 'Organize books on shelves based on what you are reading',
        imageUrl: myReads,
        projectType: 'Udacity',
        path: '/projects/my-reads'
    },
    {
        name: 'Restaurant Review',
        description: 'Restaurant review app',
        imageUrl: restaurantReview,
        projectType: 'Udacity',
        path: '/projects/restaurant-review'
    },
    {
        name: 'Arcade Game',
        description: 'Save the princess from bugs',
        imageUrl: arcadeGame,
        projectType: 'Udacity',
        path: '/projects/arcade-game'
    },
    {
        name: 'Matching Game',
        description: 'Retro matching game',
        imageUrl: matchingGame,
        projectType: 'Udacity',
        path: '/projects/matching-game'
    },
    {
        name: 'Unit Tests',
        description: 'Test before you code',
        imageUrl: unitTest,
        projectType: 'Udacity',
        path: '/projects/unit-tests'
    },
    {
        name: 'Calculator',
        description: 'A calculator build with jQuery',
        imageUrl: calculator,
        projectType: 'freeCodeCamp',
        path: '/projects/calculator'
    },
    {
        name: 'Wikipedia reader',
        description: 'Uses the wikipedia API to browse wikipedia articles',
        imageUrl: wikiReader,
        projectType: 'freeCodeCamp',
        path: '/projects/wikipedia-reader'
    },
    {
        name: 'Weather App',
        description: 'Find out what the weather is without going outiside!',
        imageUrl: weatherApp,
        projectType: 'freeCodeCamp',
        path: '/projects/weather-app'
    }];
