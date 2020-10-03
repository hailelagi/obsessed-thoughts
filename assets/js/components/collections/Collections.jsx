import React from "react";
import Notes from "./Notes";
import styled from "styled-components";

export default function Collections(props) {
  return (
    <CollectionsWrapper>
      <h1>collections of notes</h1>
      <Notes />
    </CollectionsWrapper>
  );
}

const CollectionsWrapper = styled.section`
  text-align: center;
  margin-top: 1em;
`;
