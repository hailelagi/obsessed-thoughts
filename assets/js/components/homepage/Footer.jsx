import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterWrapper>
      <div className="contact">
        <p>
          Share on:
          <FontAwesomeIcon icon={faReddit} size="lg" />
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </p>
      </div>
      <p>
        Made with <span id="heart">&#10084;</span> by{" "}
        <a href={"https://github.com/obsessedyouth/"}>Haile Lagi</a>{" "}
      </p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  & {
    display: flex;
    justify-content: space-between;
  }
  p {
    padding: 1em;
    color: grey;
  }
  
  svg {
    padding: 0.1em;
  }

  a {
    color: grey;
    font-weight: bold;
    text-decoration: none;
  }
  #heart {
    color: var(--primary-blue);
  }
`;

export default Footer;
