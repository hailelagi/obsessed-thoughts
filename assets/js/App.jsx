import React from "react";

import "../css/App.css";

import Header from "./components/homepage/Header.jsx";
import NavBar from "./components/homepage/NavBar.jsx";
import Footer from "./components/homepage/Footer.jsx";
import Features from "./components/homepage/Features.jsx";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Collections from "./components/collections/Collections";
import Default from "./Default";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Features />
          <Footer />
        </Route>
        <Route path="/collections">
          <Collections />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
          <Footer />
        </Route>
        <Route path="/signup">
          <Header />
          <SignUp />
          <Footer />
        </Route>
        <Route path="*" component={Default} />
      </Switch>
    </Router>
  );
}
