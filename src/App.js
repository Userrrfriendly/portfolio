import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
// import * as Data from './Data/data';
import * as Routes from './Data/routes';
import Main from './Componets/main';
import Footer from './Componets/footer';
import Nav from './Componets/nav';
// import TestComponent from './Componets/Testcomponent';
import PrjMain from './Componets/project-page/prj-main';
import ErrorRoute from './Componets/error-route';

class App extends Component {
  componentDidMount() {
    //once the App mounts smoothscroll-polyfill takes care about smooth scrolling across all devices and browsers. 
    smoothscroll.polyfill();
  }

  render() {
    return (
        <div className="App">
          <Nav/>
          <Switch>
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
          </Switch>
          <Footer/>
        </div>
    )
  }
}

export default App;
