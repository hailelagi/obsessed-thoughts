import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
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
          <Link to={"/signup"}>
            <button>get started</button>
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background-color: #fff;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 7px 0 rgba(45, 51, 58, 0.16);

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
        color: var(--primary-dark);

        button {
          color: #fff;
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
