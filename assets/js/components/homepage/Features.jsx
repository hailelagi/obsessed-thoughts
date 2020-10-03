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
  // headings
  const connect = "Connect the dots";
  const space = "tooling at your convenience";
  const learn = "social learning through conversations";

  // descriptions
  const connectDescription =
    "Organize tweet threads by category and topic, ask questions" +
    " learn as much as you want, make little notes for yourself along the way";
  const spaceDescription =
    "Use extensible technology to support your social learning! Go ahead, " +
    "ask that question and get a great answer save it to a note! Next time you're stuck? It's a click away!";
  const learnDescription =
    "Go out there! no matter what kind of topic among your peers, mentors" +
    " and industry experts. It's okay :) social learning is the best kind!";

  return (
    <FeaturesWrapper>
      <h2>What does this mean for you? </h2>
      <Feature
        img={multi}
        direction={"row wrap"}
        title={connect}
        description={connectDescription}
      />
      <Feature
        img={rocket}
        direction={"row-reverse wrap"}
        title={space}
        description={spaceDescription}
      />
      <Feature
        img={concept}
        direction={"row wrap"}
        title={learn}
        description={learnDescription}
      />
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled.section`
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.altBackground};
    padding: 0.5em;
  }
`;

export default Features;
