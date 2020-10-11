import React, {useContext} from "react";
import Notes from "./Notes";
import styled from "styled-components";
import user from "../../../static/images/user.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts";

export default function Collections() {
  const value = useContext(AuthContext);
  if (!!value.notes) {
    return (
      <CollectionsWrapper>
        <Notes notes={value.notes} />;
      </CollectionsWrapper>
    );
  } else {
    return (
      <CollectionsWrapper>
        <PlaceHolderWrapper>
          <img src={user} alt={"user illustration with laptop"} width={400} />
          <p>
            {" "}
            Hi there :) it seems you're not logged in on Obsessed Thoughts! you
            can <Link to="/">return home</Link> and learn more about this
            project or you can <Link to="/signup">sign up</Link> to start saving
            stuff to your collections.
          </p>
        </PlaceHolderWrapper>
      </CollectionsWrapper>
    );
  }
}

const CollectionsWrapper = styled.section`
  flex: 1 1 auto;
  width: 100%;
  text-align: center;
  margin-top: 1em;
`;

const PlaceHolderWrapper = styled.div`
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
