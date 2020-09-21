import React, { useState } from "react";

import "../css/App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme.js";

import Header from "./components/homepage/Header.jsx";
import NavBar from "./components/homepage/NavBar.jsx";
import Footer from "./components/homepage/Footer.jsx";
import Features from "./components/homepage/Features.jsx";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Collections from "./components/collections/Collections";
import Default from "./Default";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// dynamic global styles
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
  }
`;

export default function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );

  function toggleTheme() {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <NavBar toggle={toggleTheme} theme={theme} />
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
            <SignUp />
            <Footer />
          </Route>
          <Route path="*">
            <Default />
            <Footer />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
