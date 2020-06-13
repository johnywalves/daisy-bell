import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Home from "pages/home/Home";
import AboutUs from "pages/aboutUs/AboutUs";
import Categories from "pages/categories/Categories";
import Article from "pages/article/Article";
import Search from "pages/search/Search";
import Terms from "pages/terms/Terms";
import Login from "pages/login/Login";
import SignUp from "pages/signUp/SignUp";
import Privacy from "pages/privacy/Privacy";
// components
import ScrollToTop from "components/scrollToTop/ScrollToTop";
// styles
import GlobalStyles from "styles/GlobalStyles";
// services
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/search/:category" component={Search} />
        <Route path="/categories" component={Categories} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/article" component={Article} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
