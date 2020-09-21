import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import error from "../static/images/error.png";

export default function Default(props) {
  return (
    <DefaultWrapper>
      <h1>Did you get lost?</h1>
      <img src={error} width={400} alt={"404 error page"} />
      <p>
        It seems the page you requested does not exist on Obsessed Thoughts!
        Don't fret, these things happen, you can <Link to="/">return home</Link>{" "}
        and learn about this project or you can <Link to="signup">sign up</Link>{" "}
        to view your <Link to="/collections">collections.</Link>
      </p>
    </DefaultWrapper>
  );
}

const DefaultWrapper = styled.div`
  & {
    text-align: center;
    padding: 1em;
  }
  
  p {
    font-weight: 500;
    font-size: 120%;
    padding: 1em;
  }
  
  a {
    text-decoration: none;
    font-weight: bold;
    color: grey;
  }
`;
