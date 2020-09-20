import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <h1 data-app-name="obsessed-thoughts">
        A place to save interesting stuff on the web.
      </h1>
      <p>
        Have you seen a really awesome tweet thread somewhere? or maybe you read
        some fascinating blog, don't you wish you had your own little space to
        keep it all?
      </p>
      <button>Learn more</button>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  & {
    color: #fff;
    background-color: var(--primary);
    text-align: center;
    padding: 4em;
  }

  button {
    color: #fff;
    background-color: var(--primary);
    border: solid 1px #ddd;
    text-transform: capitalize;
    font-weight: 600;
    border-radius: 0.5rem;
    padding: 0.5rem 0.8rem;
    transition: all 0.5s ease-in-out;
    margin: 0.5em;
  }

  p {
    margin: 0.5em;
  }

  button:hover {
    cursor: pointer;
    background-color: var(--secondary);
  }

  a {
    color: #fff;
    font-weight: bold;
  }
`;

export default Header;
