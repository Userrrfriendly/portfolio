import mainUrl from './Images/hero-large_h1.jpg';
import resumeUrl from './Images/travelling-card.jpg';
import pastXPUrl from './Images/weatherapp.jpg';
// projects:
import flickr from './Images/asta.jpg';
import myReads from './Images/butler.jpg';
import restaurantReview from './Images/cortana.jpg';
import arcadeGame from './Images/designers.jpg';
import matchingGame from './Images/easydom.jpg';
import unitTest from './Images/farhad.jpg';
import wikiReader from './Images/halo.jpg';
import weatherApp from './Images/hugh.jpg';
import calculator from './Images/minecraft.jpg';

export const tempStory = [
    {
        name: 'Main',
        url: mainUrl
    },
    {
        name: 'Resume',
        url: resumeUrl
    },
    {
        name: 'Engineering experience',
        url: pastXPUrl
    }];

export const tempProjects = [
    {
        name:'Flickr-Photo-Plotter',
        description:'Pins images on a map based on the images geolocation',
        imageUrl: flickr,
        projectType: 'Udacity'
    },
    {
        name:'My reads',
        description: 'Organize books on shelves based on what you are reading',
        imageUrl: myReads,
        projectType: 'Udacity'
    },
    {
        name: 'Restaurant Review',
        description: 'Restaurant review app',
        imageUrl: restaurantReview,
        projectType: 'Udacity'
    },
    {
        name: 'Arcade Game',
        description: 'Save the princess from bugs',
        imageUrl: arcadeGame,
        projectType: 'Udacity'
    },
    {
        name: 'Matching Game',
        description: 'Retro matching game',
        imageUrl: matchingGame,
        projectType: 'Udacity'
    },
    {
        name: 'Unit Tests',
        description: 'Test before you code',
        imageUrl: unitTest,
        projectType: 'Udacity'
    },
    {
        name: 'Calculator',
        description: 'A calculator build with jQuery',
        imageUrl: calculator,
        projectType: 'FreeCodeCamp'
    },
    {
        name: 'Wikipedia reader',
        description: 'Uses the wikipedia API to browse wikipedia articles',
        imageUrl: wikiReader,
        projectType: 'FreeCodeCamp'
    },
    {
        name: 'Weather App',
        description: 'Find out what the weather is without going outiside!',
        imageUrl: weatherApp,
        projectType: 'FreeCodeCamp'
    }];

// name: ,
// description: ,
// imageUrl: