import React from "react";
import styled from "styled-components";

function Feature(props) {
  return (
    <FeatureWrapper>
      <div className="feature" style={{ flexFlow: props.direction }}>
        <div className={"aside"}>
          <h3>{props.title}</h3>
          <p>
            {props.description}
          </p>
        </div>
        <img src={props.img} alt={"thoughts"} width={400} />
      </div>
    </FeatureWrapper>
  );
}

const FeatureWrapper = styled.div`
  & {
    color: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.altBackground};
  }

  .feature {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .aside {
    width: 28%;
    padding: 1em;
    margin: 1em;
    text-align: justify;
    font-size: 130%;
    
    h3 {
      text-align: left;
      padding: 0.5em;
      font-size: 160%;
    }
  }

   p {
    width: 80%;
    text-align: justify;
    }
    
    @media only screen and (max-width: 768px) {
      .aside {
      width: auto;
  }
    }
  }
`;

export default Feature;
