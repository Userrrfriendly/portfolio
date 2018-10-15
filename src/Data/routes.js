import TestComponent from '../Componets/Testcomponent';
// project images:
import flickr from '../Images/projects/flickr-photo-plotter.jpg';
import arcadeGame from '../Images/projects/arcade-1.jpg'; 
import matchingGame from '../Images/projects/matching-game.jpg';
import myReads from '../Images/projects/myReads.jpg';
import unitTest from '../Images/projects/jasmine.jpg';
import restaurantReview from '../Images/projects/restaurant-review.jpg';
import wikiReader from '../Images/projects/Wikipedia Viewer.jpg'; 
import weatherApp from '../Images/projects/weather-app.jpg';
import calculator from '../Images/projects/calculator.jpg';
import React from 'react';
//Project components:
import ArcadeGame from '../Componets/project-page/prj-components/arcade-game';
import FlickrPhotoPlotter from '../Componets/project-page/prj-components/flickr-photo-plotter';


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

  /*Sub-Routes */
const chartOptions = {
    cutoutPercentage: 60,
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
              var label = data.labels[tooltipItem.index] || 'unlabeled';
              // console.log(data.labels[tooltipItem.index]);
              return label;
          }
      }
    },
    legend: {
      position: 'bottom',
      onClick: false
    }
  };

export const subRoutes = [
    {
        path: '/projects/flickr-photo-plotter',
        title: 'Flickr-Photo-Plotter',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: <FlickrPhotoPlotter />
                },
        ],
        chartData: {
            labels: ["HTML5", "CSS", "JavaScript", "ReactJs", "Google Maps", "Wikipedia API", "Flickr API"],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2,2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
                    'rgba(0, 0, 0, 0.4)'
                ],
                borderColor: [
                    '#fff'
                ],
                borderWidth: 3
            }]
        },
        chartOptions: chartOptions
        }
    },
    {
        path: '/projects/my-reads',
        title: 'My reads',
        type: 'Project',
        data:{
            imgUrl: myReads,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/reactnd-project-myreads-starter',
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality:',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties:',
                    articleContent: ` The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using 'Content here, content here', making it look like readable English. 
                     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    articleTitle: 'What did I learn?',
                    articleContent: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
                    in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                     Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                        and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
        ],
        chartData: {
            labels: ["HTML5", "ReactJs", "JavaScript", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        chartOptions: chartOptions
        }
    },
    {
        path: '/projects/restaurant-review',
        title: 'Restaurant Review',
        type: 'Project',
        data:{
            imgUrl: restaurantReview,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/mws-restaurant-stage-1',
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality:',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties:',
                    articleContent: ` The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using 'Content here, content here', making it look like readable English. 
                     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    articleTitle: 'What did I learn?',
                    articleContent: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
                    in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                     Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                        and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
        ],
        chartData: {
            labels: ["HTML5", "ReactJs", "JavaScript", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        chartOptions: chartOptions
        }
    },
    {
        path: '/projects/arcade-game',
        title: 'Arcade Game',
        type: 'Project',
        data:{
            imgUrl: arcadeGame,
            livePageUrl: 'https://userrrfriendly.github.io/frontend-nanodegree-arcade-game/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/frontend-nanodegree-arcade-game',
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: <ArcadeGame />
                },
        ],
        chartData: {
            labels: ['HTML5', 'CSS', 'JavaScript', 'Canvas API', 'ES6', 'Object Oriented Programming'],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: [
                    '#ff0000',
                    '#00e3e4',
                    '#ffa500',
                    '#004dff',
                    '#c9cbcf',
                    '#00ff73'
                ],
                borderColor: [
                    '#fff'
                ],
                borderWidth: 3
            }]
        },
        chartOptions: {
            cutoutPercentage: 60,
            tooltips: {
              callbacks: {
                  label: function(tooltipItem, data) {
                      var label = data.labels[tooltipItem.index] || 'unlabeled';
                      // console.log(data.labels[tooltipItem.index]);
        
                      return label;
                  }
              }
            },
            legend: {
              position: 'bottom',
              onClick: false
            }
          }
        }
    },
    {
        path: '/projects/matching-game',
        title: 'Matching Game',
        type: 'Project',
        data:{
            imgUrl: matchingGame,
            livePageUrl: 'https://userrrfriendly.github.io/MatchingGame/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/MatchingGame',
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality:',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties:',
                    articleContent: ` The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using 'Content here, content here', making it look like readable English. 
                     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    articleTitle: 'What did I learn?',
                    articleContent: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
                    in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                     Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                        and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
        ],
        chartData: {
            labels: ["HTML5", "ReactJs", "JavaScript", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        chartOptions: chartOptions
        }
    },
    {
        path: '/projects/unit-tests',
        title: 'Unit Tests',
        type: 'Project',
        data:{
            imgUrl: unitTest,
            livePageUrl: false,
            sourceCodeUrl: 'https://github.com/Userrrfriendly/frontend-nanodegree-feedreader',
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality:',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties:',
                    articleContent: ` The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using 'Content here, content here', making it look like readable English. 
                     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    articleTitle: 'What did I learn?',
                    articleContent: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
                    in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                     Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                        and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
        ],
        chartData: {
            labels: ["HTML5", "ReactJs", "JavaScript", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        chartOptions: chartOptions
        }
    },
    {
        path: '/projects/calculator',
        title: 'Calculator',
        type: 'Project',
        data:{
            imgUrl: calculator,
            livePageUrl: 'https://codepen.io/Userrrfriendly/full/JbVrpp/',
            sourceCodeUrl: false ,
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality:',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties:',
                    articleContent: ` The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using 'Content here, content here', making it look like readable English. 
                     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    articleTitle: 'What did I learn?',
                    articleContent: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
                    in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                     Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                        and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
        ],
        chartData: {
            labels: ["HTML5", "ReactJs", "JavaScript", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        chartOptions: chartOptions
        }
    },
    {
        path: '/projects/wikipedia-reader',
        title: 'Wikipedia reader',
        type: 'Project',
        data:{
            imgUrl: wikiReader,
            livePageUrl: 'https://codepen.io/Userrrfriendly/full/evOVOm/',
            sourceCodeUrl: false,
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality:',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties:',
                    articleContent: ` The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using 'Content here, content here', making it look like readable English. 
                     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    articleTitle: 'What did I learn?',
                    articleContent: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
                    in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                     Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                        and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
        ],
        chartData: {
            labels: ["HTML5", "ReactJs", "JavaScript", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        chartOptions: chartOptions
        }
    },
    {
        path: '/projects/weather-app',
        title: 'Weather App',
        type: 'Project',
        data:{
            imgUrl: weatherApp,
            livePageUrl: 'https://codepen.io/Userrrfriendly/pen/qmJyOj',
            sourceCodeUrl: false,
            content: [
                {
                    articleTitle: 'Goals:',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality:',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties:',
                    articleContent: ` The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                     as opposed to using 'Content here, content here', making it look like readable English. 
                     Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                      Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
                },
                {
                    articleTitle: 'What did I learn?',
                    articleContent: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
                    in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                     Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                        and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
                },
        ],
        chartData: {
            labels: ["HTML5", "ReactJs", "JavaScript", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [2, 2, 2, 2, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        chartOptions: chartOptions
        }
    }
    ];



// const error = function ErrorRoute() {
//     return(
//         <div className="error-route">Ooops!! It seems that the path does not exist...</div>
//     )
// }


