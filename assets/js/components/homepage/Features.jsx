import React from "react";
import styled from "styled-components";
import multi from "../../../static/images/multi.png";
import rocket from "../../../static/images/rocket.png";
import concept from "../../../static/images/concept.png";
import Feature from "./Feature";
/*
//Image source credits :)
1.
/*<a href="https://iconscout.com/illustrations/business" target="_blank">Business lady do Multi Tasking Illustration</a> by
<a href="https://iconscout.com/contributors/iconscout">Iconscout Freebies</a> on <a href="https://iconscout.com">Iconscout</a>

2.
<a href="https://iconscout.com/illustrations/concept" target="_blank">Concept of importance of  Work Place for
 employees in business Illustration</a> by <a href="https://iconscout.com/contributors/iconscout" target="_blank">
 Iconscout Freebies</a>
 
3.
<a href="https://iconscout.com/illustrations/concept" target="_blank">Concept about Problem Solution by business manager
 Illustration</a> by <a href="https://iconscout.com/contributors/iconscout" target="_blank">Iconscout Freebies</a>
*/

function Features() {
  return (
    <FeaturesWrapper>
      <h2>What does this mean exactly? </h2>
      <Feature img={multi} direction={"row wrap"} />
      <Feature img={rocket} direction={"row-reverse wrap"} />
      <Feature img={concept} direction={"row wrap"} />
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled.section`
  h2 {
    text-align: center;
    background-color: #fff;
    padding: 0.5em;
  }

  h3 {
    margin: 0.5em;
  }
  
  .feature {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  
  .aside {
    width: 28%;
    padding: 1em;
    margin: 2em;
    text-align: justify;
    font-size: 160%;
  }

   p {
    width: 80%;
    text-align: justify;
    }
  }
`;

export default Features;
