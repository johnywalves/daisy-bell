import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import ScrollToTop from "components/scrollToTop/ScrollToTop";
// styles
import GlobalStyles from "styles/GlobalStyles";
// services
import * as serviceWorker from "./serviceWorker";
// pages
const Home = lazy(() => import("pages/home/Home"));
const AboutUs = lazy(() => import("pages/aboutUs/AboutUs"));
const Categories = lazy(() => import("pages/categories/Categories"));
const Article = lazy(() => import("pages/article/Article"));
const Search = lazy(() => import("pages/search/Search"));
const Terms = lazy(() => import("pages/terms/Terms"));
const Login = lazy(() => import("pages/login/Login"));
const SignUp = lazy(() => import("pages/signUp/SignUp"));
const Privacy = lazy(() => import("pages/privacy/Privacy"));

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/:category/search" component={Search} />
          <Route path="/search" component={Search} />
          <Route path="/:slug" component={Article} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
