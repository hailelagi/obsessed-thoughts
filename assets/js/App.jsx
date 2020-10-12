import React, { useState } from "react";

import "../css/App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme.js";

import Header from "./components/homepage/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Features from "./components/homepage/Features.jsx";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Collections from "./components/collections/Collections";
import Default from "./Default";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts";

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
        <Switch>
          <Route exact path="/">
            <AuthProvider>
              <NavBar toggle={toggleTheme} theme={theme} />
            </AuthProvider>
            <Header />
            <Features />
          </Route>
          <Route path="/collections">
            <AuthProvider>
              <NavBar toggle={toggleTheme} theme={theme} />
              <Collections />
            </AuthProvider>
          </Route>
          <Route path="/login">
            <AuthProvider>
              <NavBar toggle={toggleTheme} theme={theme} />
            </AuthProvider>
            <Login />
          </Route>
          <Route path="/signup">
            <AuthProvider>
              <NavBar toggle={toggleTheme} theme={theme} />
            </AuthProvider>
            <SignUp />
          </Route>
          <Route path="*">
            <AuthProvider>
              <NavBar toggle={toggleTheme} theme={theme} />
            </AuthProvider>
            <Default />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}
