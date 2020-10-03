import React, { useState } from "react";
import styled from "styled-components";
import Note from "./Note.jsx";

export default function Notes() {
  const [data, setData] = useState(
    "Ut molestias sed ut nesciunt tenetur ullam consequatur" +
      '"Ut molestias sed ut nesciunt tenetur ullam consequatur. " +\n' +
      '        "Earum assumenda aspernatur itaque. Sed dolor quaerat ex reprehe" +\n' +
      '        "nderit earum recusandae."'
  );

  function isAuthenticated() {
    //fetch tweet data dynamically display it
    setData(
      "update card data"
    );
  }

  return (
    <NotesWrapper>
      <Note data={data} color="#00AA55" />
      <Note data={data} color="#3498DB" />
      <Note data={data} color="#9B59B6" />
      <Note data={data} color="#B8860B" />
      <Note data={data} color="#E63022" />
      <Note data={data} color="#E74C3C" />
      <Note data={data} color="#005051" />
      <Note data={data} color="#939393" />
    </NotesWrapper>
  );
}

const NotesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
