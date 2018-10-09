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
        title: 'Flickr-Photo-Plotter',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    },
    {
        path: '/projects/my-reads',
        title: 'My reads',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    },
    {
        path: '/projects/restaurant-review',
        title: 'Restaurant Review',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    },
    {
        path: '/projects/arcade-game',
        title: 'Arcade Game',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    },
    {
        path: '/projects/matching-game',
        title: 'Matching Game',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    },
    {
        path: '/projects/unit-tests',
        title: 'Unit Tests',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    },
    {
        path: '/projects/calculator',
        title: 'Calculator',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    },
    {
        path: '/projects/wikipedia-reader',
        title: 'Wikipedia reader',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    },
    {
        path: '/projects/weather-app',
        title: 'Weather App',
        type: 'Project',
        data:{
            imgUrl: flickr,
            livePageUrl: 'https://userrrfriendly.github.io/Flickr-Photo-Plotter/',
            sourceCodeUrl: 'https://github.com/Userrrfriendly/Flickr-Photo-Plotter',
            content: [
                {
                    articleTitle: 'Goals',
                    articleContent: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                },
                {
                    articleTitle: 'Functionality',
                    articleContent: `It is a long established fact that a reader will be distracted by the readable content of a page when 
                    looking at its layout. `
                },
                {
                    articleTitle: 'Difficulties',
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
        ]
        }
    }
    ];