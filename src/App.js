import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
// import * as Data from './Data/data';
import * as Routes from './Data/routes';
import Main from './Componets/Main/main';
import Footer from './Componets/Footer/footer';
import Nav from './Componets/NavBar/nav';
import PrjMain from './Componets/project-page/prj-main';
import ErrorRoute from './Componets/errorRoute/errorRoute';

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
            {Routes.navRoutes.map((navRoute)=>(
              <Route
                key={navRoute.path}
                path={navRoute.path}
                render= {(props)=> (
                  <navRoute.component title={navRoute.path}/>
                )}
              />
            ))}
            {Routes.projectRoutes.map((prjRoute)=> (
              <Route
                key={prjRoute.path}
                path={prjRoute.path}
                render={(props)=> (
                  <PrjMain data={prjRoute.data} title={prjRoute.title}/>
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
