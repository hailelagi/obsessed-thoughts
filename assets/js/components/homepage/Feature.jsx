import React from "react";
import styled from "styled-components";

function Feature(props) {
  return (
    <FeatureWrapper>
      <div className="feature" style={{ flexFlow: props.direction }}>
        <div className={"aside"}>
          <h3>Some selling point</h3>
          <p>
            Eos sint et voluptatem temporibus. Earum ducimus tenetur fugit.
            Soluta nemo commodi eos et. Autem mollitia tenetur ipsum corporis
          </p>
        </div>
        <img src={props.img} alt={"woman thought"} width={400} />
      </div>
    </FeatureWrapper>
  );
}

const FeatureWrapper = styled.div`
  & {
    color: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.altBackground};
  }
  h3 {
    margin: 0.5em;
  }
  
  .feature {
    display: flex;
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

export default Feature;
