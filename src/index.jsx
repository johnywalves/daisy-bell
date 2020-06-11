import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Home from 'pages/home/Home';
import AboutUs from 'pages/aboutUs/AboutUs';
import Categories from 'pages/categories/Categories';
import Article from 'pages/article/Article';
import Search from 'pages/search/Search';
import Terms from 'pages/terms/Terms';
import Privacy from 'pages/privacy/Privacy';
// styles
import GlobalStyles from 'styles/GlobalStyles';
// services
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path="/search" children={<Search />} />
        <Route path="/categories" children={<Categories />} />
        <Route path="/aboutus" children={<AboutUs />} />
        <Route path="/terms" children={<Terms />} />
        <Route path="/privacy" children={<Privacy />} />
        <Route path="/article" children={<Article />} />
        <Route path="/" children={<Home />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
