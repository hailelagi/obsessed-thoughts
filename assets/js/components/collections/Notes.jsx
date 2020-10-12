import React, { useState } from "react";
import styled from "styled-components";
import Note from "./Note.jsx";
import { Link } from "react-router-dom";
import user from "../../../static/images/user.svg";

//Image source credits :)
/* <a href="https://iconscout.com/illustrations/blog" target="_blank">Blog Illustration</a> by
 <a href="https://iconscout.com/contributors/pixel-true-designs" target="_blank">Pixel True</a> */

export default function Notes(props) {
  return (
    <NotesWrapper>
      {/*TODO: replace with a map over the tweet data*/}
      <Note data={props.notes} color="#00AA55" />
      <Note data={props.notes} color="#3498DB" />
      <Note data={props.notes} color="#9B59B6" />
      <Note data={props.notes} color="#B8860B" />
      <Note data={props.notes} color="#E63022" />
      <Note data={props.notes} color="#E74C3C" />
      <Note data={props.notes} color="#005051" />
      <Note data={props.notes} color="#939393" />
    </NotesWrapper>
  );
}

const NotesWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
  text-align: center;
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
