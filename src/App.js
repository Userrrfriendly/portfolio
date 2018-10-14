import React, { Component } from 'react';
import './App.css';
// import * as Data from './Data/data';
import * as Routes from './Data/routes';
import Main from './Componets/main';
import Footer from './Componets/footer';
import Nav from './Componets/nav';
import { Route } from 'react-router-dom';
import TestComponent from './Componets/Testcomponent';
import PrjMain from './Componets/project-page/prj-main';
import ErrorRoute from './Componets/error-route';

// const TestComponent = ()=> {
//   return (
//     <div>This is a testComponent</div>
//   )
// }

// const routes = [
//   {
//       path: '/MyStory',
//       component: TestComponent
//   },
//   {
//       path: '/MyResume',
//       component: TestComponent

//   },
//   {
//       path: '/PastExperience',
//       component: TestComponent

//   },
//   {
//       path: '/MyProjects',
//       component: TestComponent,
//       // subRoutes: [
//       //   'Flickr-Photo-Plotter',
//       //   'My reads',
//       //   'Restaurant Review',
//       //   'Arcade Game',
//       //   'Matching Game',
//       //   'Unit Tests',
//       //   'Calculator',
//       //   'Wikipedia reader',
//       //   'Weather App']
//   },
//   {
//       path: '/ContactMe',
//       component: TestComponent
//   }
// ];

class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav/>
          <Route exact path ="/" component={Main}></Route>
          {Routes.routes.map((route)=>(
            <Route
              key={route.path}
              path={route.path}
              // component={route.component}
              render= {(props)=> (
                <route.component title={route.path}/>
              )}
            />
          ))}
          {Routes.subRoutes.map((subRoute)=> (
            <Route
              key={subRoute.path}
              path={subRoute.path}
              render={(props)=> (
                // <TestComponent title={subRoute.title} />
                <PrjMain data={subRoute.data} title={subRoute.title}/>
              )}
            />
          ))}
          <Route component={ErrorRoute}/>
          <Footer/>
        </div>
    )
  }
}

export default App;
