import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './store';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Category from './containers/Category';
import Home from './containers/Home';
import Details from './containers/Details';
import About from './containers/About';
import Error from './containers/404';
import Team from './containers/Team';
import Login from './containers/Login';
import SearchPlayer from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/heroes" component={Category}/>
            <Route exact path="/details/hero/:id" component={Details}/>
            <Route exact path="/teams" component={Team}/>
            <Route path="/players" component={SearchPlayer}/> 
            <Route exact path="/login" component={Login}/>
            <Route exact path="/about" component={About}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
