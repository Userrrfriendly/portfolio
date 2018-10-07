import TestComponent from '../Componets/Testcomponent';

export const routes = [
    {
        path: '/MyStory',
        component: TestComponent
    },
    {
        path: '/MyResume',
        component: TestComponent
  
    },
    {
        path: '/PastExperience',
        component: TestComponent
  
    },
    {
        path: '/MyProjects',
        component: TestComponent,
        // subRoutes: [
        //   'Flickr-Photo-Plotter',
        //   'My reads',
        //   'Restaurant Review',
        //   'Arcade Game',
        //   'Matching Game',
        //   'Unit Tests',
        //   'Calculator',
        //   'Wikipedia reader',
        //   'Weather App']
    },
    {
        path: '/ContactMe',
        component: TestComponent
    }
  ];

export const subRoutes = [
    {
        path: '/projects/flickr-fhoto-plotter',
        description: 'Flickr-Photo-Plotter'
    },
    {
        path: '/projects/my-reads',
        description: 'My reads'
    },
    {
        path: '/projects/restaurant-review',
        description: 'Restaurant Review'
    },
    {
        path: '/projects/arcade-game',
        description: 'Arcade Game'
    },
    {
        path: '/projects/matching-game',
        description: 'Matching Game'
    },
    {
        path: '/projects/unit-tests',
        description: 'Unit Tests'
    },
    {
        path: '/projects/calculator',
        description: 'Calculator'
    },
    {
        path: '/projects/wikipedia-reader',
        description: 'Wikipedia reader'
    },
    {
        path: '/projects/weather-app',
        description: 'Weather App'
    }
    ];