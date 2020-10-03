import React from "react";
import styled from "styled-components";

export default function Note(props) {
  return (
    <NoteWrapper style={{backgroundColor: props.color}}>
        {props.data}
    </NoteWrapper>
  );
}

const NoteWrapper = styled.div`
  width: 250px;
  height: 250px;
  padding: 1em;
  margin: 0.5em;
  border-radius: 15px;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 110%;
`;
