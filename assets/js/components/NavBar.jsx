import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../static/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { lightTheme } from "../theme";
import { AuthContext } from "../contexts";

function NavBar(props) {
  const [log, setLog] = useState(false);
  const value = useContext(AuthContext);
  {console.log(value)}
  useEffect(() => {
    setLog(value.isLogged);
  });

  // TODO: fix buggy css nav
  // TODO: polish animations
  // TODO: signout navbar state functionality

  function handleToggle() {
    let mobile = document.querySelector(".mobile-nav");
    if (mobile.style.display === "flex") {
      mobile.style.display = "none";
    } else {
      mobile.style.display = "flex";
    }
  }

  function handleLogOut() {
    // TODO: log user out, delete session
    // TODO: pass in logout state function here
  }

  const signUp = (
    <Link to={"/signup"}>
      <button>sign up</button>
    </Link>
  );
  const signOut = (
    <Link to="/">
      <button onClick={handleLogOut}>sign out</button>
    </Link>
  );

  return (
    <NavWrapper>
      <Link to={"/"}>
        <div className="logo">
          <img src={logo} alt={"logo"} />
        </div>
      </Link>

      <div className="controls">
        <button className="mobile-toggle" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size="2x" color="#f38704" />
        </button>

        <ToggleContainer onClick={props.toggle}>
          <FontAwesomeIcon icon={faSun} size="1x" color="#fff" />
          <FontAwesomeIcon icon={faMoon} size="1x" color="#fff" />
        </ToggleContainer>
      </div>

      <ul className="nav-links">
        <div className="large-nav">
          <li>
            <Link to={"/collections"}>collections</Link>
          </li>
          {log ? null : (
            <li>
              <Link to="/login">login</Link>
            </li>
          )}
          <li>{log ? signOut : signUp}</li>
          <li>
            <ToggleContainer onClick={props.toggle}>
              <FontAwesomeIcon icon={faSun} size="1x" color="#fff" />
              <FontAwesomeIcon icon={faMoon} size="1x" color="#fff" />
            </ToggleContainer>
          </li>
        </div>

        <div className="mobile-nav">
          <li>
            <Link to={"/collections"}>collections</Link>
          </li>
          {log ? null : (
            <li>
              <Link to="/login">login</Link>
            </li>
          )}
          <li>{log ? signOut : signUp}</li>
        </div>
      </ul>
    </NavWrapper>
  );
}

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.toggle};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  overflow: hidden;
  width: 4rem;
  height: 2rem;

  &:focus {
    outline: none;
  }
  svg {
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ theme }) =>
        theme === lightTheme ? "translateX(0)" : "translateX(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme === lightTheme ? "translateX(-100px)" : "translateX(0)"};
    } 
  }
`;

const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.background};
  padding: 0.5em;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  box-shadow: var(--lightshadow);

  .logo {
    margin-top: 1em;
  }

  .nav-links {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    font-weight: 600;

    li {
      padding: 1em;
      text-transform: capitalize;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.navFont};
        
        button {
          color: var(--background);
          background: var(--primary);
          text-transform: capitalize;
          font-weight: 600;
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem 0.8rem;
          transition: all 0.5s ease-in-out;
        }
        button:hover {
          cursor: pointer;
          background-color: var(--secondary);
        }
        &:hover {
          color: var(--secondary);
        }
      }
    }
  }

  .large-nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  .mobile-nav {
    display: none;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  
  .controls {
    display: none;
    align-items: center;
    justify-content: center;
  }
  
  .mobile-toggle {
    display: none;
    background-color: transparent;
    border: none;
    margin: 0.5em;
  }

  @media only screen and (max-width: 500px) {
    .large-nav {
      display: none;
    }
    .controls,
    .mobile-toggle {
    display: inherit;
  }
    @media only screen and (max-width: 320px) {
      .mobile-toggle {
      margin: 0;
      }
  }
`;

export default NavBar;
