import React from "react";
// project images:
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
//Project components:
import Sempernote from "../Componets/project-page/prj-components/sempernote";
import ArcadeGame from "../Componets/project-page/prj-components/arcade-game";
import FlickrPhotoPlotter from "../Componets/project-page/prj-components/world-gallery";
import MyReads from "../Componets/project-page/prj-components/my-reads";
import RestaurantReview from "../Componets/project-page/prj-components/restaurant-review";
import MemoryGame from "../Componets/project-page/prj-components/memory-game";
import FeedReader from "../Componets/project-page/prj-components/feed-reader";
import WeatherApp from "../Componets/project-page/prj-components/weather-app";
import WikipediaViewer from "../Componets/project-page/prj-components/wikipedia-viewer";
import Calculator from "../Componets/project-page/prj-components/calculator";
import MyStory from "../Componets/MyStory/MyStory";
import Resume from "../Componets/Resume/resume";
import ContactMe from "../Componets/contactMe/ContactMe";
import About from "../Componets/About-me/AboutMe";

export const navRoutes = [
  {
    path: "/MyStory",
    component: MyStory
  },
  {
    path: "/MyResume",
    component: Resume
  },
  {
    path: "/AboutMe",
    component: About
  },
  {
    path: "/ContactMe",
    component: ContactMe
  }
];

/*Project-Routes */
const chartOptions = {
  cutoutPercentage: 60,
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        var label = data.labels[tooltipItem.index] || "unlabeled";
        return label;
      }
    }
  },
  legend: {
    position: "bottom",
    onClick: false //when false is passed items are not removed from the pie when clicked
  }
};

export const projectRoutes = [
  {
    path: "/projects/sempernote",
    title: "Sempernote",
    type: "Project",
    data: {
      imgUrl: sempernote,
      livePageUrl: "https://sempernote.herokuapp.com",
      sourceCodeUrl: "https://github.com/Userrrfriendly/sempernote-frontend",
      content: [
        {
          articleContent: <Sempernote />
        }
      ],
      chartData: {
        labels: [
          "React.js",
          "Material-UI",
          "Quill.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "GraphQL"
        ],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 2, 2, 2, 2, 2, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.4)",
              "rgba(54, 162, 235, 0.4)",
              "rgba(255, 206, 86, 0.4)",
              "rgba(75, 192, 192, 0.4)",
              "rgba(153, 102, 255, 0.4)",
              "rgba(255, 159, 64, 0.4)",
              "rgba(0, 0, 0, 0.4)"
            ],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/world-gallery",
    title: "World Gallery",
    type: "Project",
    data: {
      imgUrl: flickr,
      livePageUrl: "https://userrrfriendly.github.io/World-Gallery/",
      sourceCodeUrl: "https://github.com/Userrrfriendly/World-Gallery/",
      content: [
        {
          articleContent: <FlickrPhotoPlotter />
        }
      ],
      chartData: {
        labels: ["ReactJs", "Material-UI", "Google Maps", "Flickr API"],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 2, 2, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.4)",
              "rgba(54, 162, 235, 0.4)",
              "rgba(255, 206, 86, 0.4)",
              "rgba(75, 192, 192, 0.4)",
              "rgba(153, 102, 255, 0.4)",
              "rgba(255, 159, 64, 0.4)",
              "rgba(0, 0, 0, 0.4)"
            ],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/my-reads",
    title: "My reads",
    type: "Project",
    data: {
      imgUrl: myReads,
      livePageUrl:
        "https://userrrfriendly.github.io/reactnd-project-myreads-starter/",
      sourceCodeUrl:
        "https://github.com/Userrrfriendly/reactnd-project-myreads-starter",
      content: [
        {
          articleContent: <MyReads />
        }
      ],
      chartData: {
        labels: ["JavaScript", "ReactJs", "React-Router-Dom"],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 6, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.4)",
              "rgba(54, 162, 235, 0.4)",
              "rgba(255, 206, 86, 0.4)",
              "rgba(75, 192, 192, 0.4)",
              "rgba(153, 102, 255, 0.4)",
              "rgba(255, 159, 64, 0.4)"
            ],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/restaurant-review",
    title: "Restaurant Review",
    type: "Project",
    data: {
      imgUrl: restaurantReview,
      livePageUrl: false,
      sourceCodeUrl: "https://github.com/Userrrfriendly/mws-restaurant-stage-1",
      content: [
        {
          articleContent: <RestaurantReview />
        }
      ],
      chartData: {
        labels: ["HTML5", "CSS", "JavaScript", "Service Worker", "ARIA"],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 2, 2, 2, 2],
            backgroundColor: [
              "#ffe900",
              "#efd6ac",
              "#bfd7ea",
              "#21a0a0",
              "#e53d00",
              "#183a37"
            ],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/arcade-game",
    title: "Arcade Game",
    type: "Project",
    data: {
      imgUrl: arcadeGame,
      livePageUrl:
        "https://userrrfriendly.github.io/frontend-nanodegree-arcade-game/",
      sourceCodeUrl:
        "https://github.com/Userrrfriendly/frontend-nanodegree-arcade-game",
      content: [
        {
          articleContent: <ArcadeGame />
        }
      ],
      chartData: {
        labels: [
          "HTML5",
          "CSS",
          "JavaScript",
          "Canvas API",
          "ES6",
          "Object Oriented Programming"
        ],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 2, 2, 2, 2, 2],
            backgroundColor: [
              "#ff0000",
              "#00e3e4",
              "#ffa500",
              "#004dff",
              "#c9cbcf",
              "#00ff73"
            ],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/matching-game",
    title: "Matching Game",
    type: "Project",
    data: {
      imgUrl: matchingGame,
      livePageUrl: "https://userrrfriendly.github.io/MatchingGame/",
      sourceCodeUrl: "https://github.com/Userrrfriendly/MatchingGame",
      content: [
        {
          articleContent: <MemoryGame />
        }
      ],
      chartData: {
        labels: ["HTML5", "CSS", "JavaScript"],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 2, 2],
            backgroundColor: ["#ff0000", "#00e3e4", "#ffa500"],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/unit-tests",
    title: "Unit Tests",
    type: "Project",
    data: {
      imgUrl: unitTest,
      livePageUrl: false,
      sourceCodeUrl:
        "https://github.com/Userrrfriendly/frontend-nanodegree-feedreader",
      content: [
        {
          articleContent: <FeedReader />
        }
      ],
      chartData: {
        labels: ["JavaScript", "Jasmine", "jQuery"],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [1, 3, 1],
            backgroundColor: ["#108040", "#8A4182", "#0769ad"],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/calculator",
    title: "Calculator",
    type: "Project",
    data: {
      imgUrl: calculator,
      livePageUrl: "https://codepen.io/Userrrfriendly/full/JbVrpp/",
      sourceCodeUrl: "https://codepen.io/Userrrfriendly/pen/JbVrpp",
      content: [
        {
          articleContent: <Calculator />
        }
      ],
      chartData: {
        labels: ["HTML5", "CSS", "JavaScript", "jQuery", "Boostrap"],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 2, 2, 2, 2],
            backgroundColor: [
              "#ff0000",
              "#00e3e4",
              "#ffa500",
              "#004dff",
              "#c9cbcf",
              "#00ff73"
            ],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/wikipedia-reader",
    title: "Wikipedia reader",
    type: "Project",
    data: {
      imgUrl: wikiReader,
      livePageUrl: "https://codepen.io/Userrrfriendly/full/evOVOm/",
      sourceCodeUrl: "https://codepen.io/Userrrfriendly/pen/evOVOm",
      content: [
        {
          articleContent: <WikipediaViewer />
        }
      ],
      chartData: {
        labels: ["HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap"],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 2, 2, 2, 2],
            backgroundColor: [
              "#ff0000",
              "#00e3e4",
              "#ffa500",
              "#004dff",
              "#c9cbcf",
              "#00ff73"
            ],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  },
  {
    path: "/projects/weather-app",
    title: "Weather App",
    type: "Project",
    data: {
      imgUrl: weatherApp,
      livePageUrl: "https://codepen.io/Userrrfriendly/full/qmJyOj/",
      sourceCodeUrl: "https://codepen.io/Userrrfriendly/pen/qmJyOj",
      content: [
        {
          articleContent: <WeatherApp />
        }
      ],
      chartData: {
        labels: [
          "HTML5",
          "CSS",
          "JavaScript",
          "jQuery",
          "Bootstrap",
          "Leaflet"
        ],
        datasets: [
          {
            label: "Tools & Frameworks used:",
            data: [2, 2, 2, 2, 2, 2],
            backgroundColor: [
              "#ff0000",
              "#00e3e4",
              "#ffa500",
              "#004dff",
              "#c9cbcf",
              "#00ff73"
            ],
            borderColor: ["#fff"],
            borderWidth: 3
          }
        ]
      },
      chartOptions: chartOptions
    }
  }
];
