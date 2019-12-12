import mainUrl from "../Images/compressed/hero-large_h1-compressor.jpg";
import resumeUrl from "../Images/compressed/resume_Jupiter-compressor.jpg";
import aboutMe from "../Images/compressed/about-me-compressor.jpg";
// projects:
import sempernote from "../Images/compressed/projects/sempernote_compressor.jpg";
import flickr from "../Images/compressed/projects/flickr-photo-plotter-compressor.jpg";
import arcadeGame from "../Images/compressed/projects/arcade-1-compressor.jpg";
import matchingGame from "../Images/compressed/projects/matching-game-compressor.jpg";
import myReads from "../Images/compressed/projects/myReads-compressor.jpg";
import unitTest from "../Images/compressed/projects/jasmine-compressor.jpg";
import restaurantReview from "../Images/compressed/projects/restaurant-review-compressor.jpg";
import wikiReader from "../Images/compressed/projects/Wiki-Viewer-compressor.jpg";
import weatherApp from "../Images/compressed/projects/weather-app-compressor.jpg";
import calculator from "../Images/compressed/projects/calculator-compressor.jpg";

export const stories = [
  {
    name: "My Story",
    url: mainUrl,
    caption:
      "Read about my transision from Engineering to Software Engineering",
    backgroundColor: "initial",
    link: "/MyStory"
  },
  {
    name: "Resume",
    url: resumeUrl,
    caption: "Download my Resume",
    backgroundColor: "rgba(0, 0, 255, 0.5)", //purple, #0000ff80 Edge doesnt read hex colors with alpha
    link: "/MyResume"
  },
  {
    name: "About Me",
    url: aboutMe,
    caption: "A few words about me ...",
    backgroundColor: "rgba(39, 168, 175, 0.71)", //cyan #27a8afb5 Edge doesnt read hex colors with alpha
    link: "/AboutMe"
  }
];

export const projects = [
  {
    name: "Sempernote",
    description: "A note taking app similar to Evernote.",
    imageUrl: sempernote,
    projectType: "MERN",
    path: "/projects/sempernote"
  },
  {
    name: "World Gallery",
    description: "Pins images on a map based on the image's geolocation",
    imageUrl: flickr,
    projectType: "SPA",
    path: "/projects/world-gallery"
  },
  // {
  //   name: "My reads",
  //   description: "Organize books on shelves based on what you are reading",
  //   imageUrl: myReads,
  //   projectType: "Udacity",
  //   path: "/projects/my-reads"
  // },
  // {
  //   name: "Restaurant Review",
  //   description: "Restaurant review app",
  //   imageUrl: restaurantReview,
  //   projectType: "Udacity",
  //   path: "/projects/restaurant-review"
  // },
  {
    name: "Arcade Game",
    description: "Save the princess from bugs",
    imageUrl: arcadeGame,
    projectType: "Udacity",
    path: "/projects/arcade-game"
  }
  // {
  //   name: "Matching Game",
  //   description: "Retro matching game",
  //   imageUrl: matchingGame,
  //   projectType: "Udacity",
  //   path: "/projects/matching-game"
  // }
  // {
  //   name: "Unit Tests",
  //   description: "Test before you code",
  //   imageUrl: unitTest,
  //   projectType: "Udacity",
  //   path: "/projects/unit-tests"
  // }
  // {
  //   name: "Calculator",
  //   description: "A calculator build with jQuery",
  //   imageUrl: calculator,
  //   projectType: "freeCodeCamp",
  //   path: "/projects/calculator"
  // },
  // {
  //   name: "Wikipedia reader",
  //   description: "Uses the wikipedia API to browse wikipedia articles",
  //   imageUrl: wikiReader,
  //   projectType: "freeCodeCamp",
  //   path: "/projects/wikipedia-reader"
  // },
  // {
  //   name: "Weather App",
  //   description: "Find out what the weather is without going outiside!",
  //   imageUrl: weatherApp,
  //   projectType: "freeCodeCamp",
  //   path: "/projects/weather-app"
  // }
];
