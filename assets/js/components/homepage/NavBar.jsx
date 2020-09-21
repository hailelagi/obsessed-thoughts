import React from "react";
import styled from "styled-components";
import logo from "../../../static/logo.svg";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <NavWrapper>
      <Link to={"/"}>
        <div className="logo">
          <img src={logo} alt={"logo"} />
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to={"/collections"}>collections</Link>
        </li>
        <li>
          <Link to={"/login"}>login</Link>
        </li>
        <li>
          <button onClick={props.toggle}> dark switch</button>
        </li>
        <li>
          <Link to={"/signup"}>
            <button>sign up</button>
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.background};
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--lightshadow);

  .logo {
    margin-top: 1em;
  }
  .nav-links {
    display: flex;
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
`;

export default NavBar;
