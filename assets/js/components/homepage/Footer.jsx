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
        Made with &#10084; by{" "}
        <a href={"https://github.com/obsessedyouth/"}>Haile Lagi</a>{" "}
      </p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  & {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.background};
  }
  p {
    padding: 1em;
    color: var(--grey);
  }

  svg {
    padding: 0.1em;
  }

  a {
    color: var(--grey);
    font-weight: bold;
    text-decoration: none;
  }
`;

export default Footer;
