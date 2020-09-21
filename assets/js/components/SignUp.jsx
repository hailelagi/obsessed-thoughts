import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp(props) {
  return (
    <FormWrapper>
      <form action="#" method="POST">
        <label htmlFor="user">Enter your First name</label>
        <input
          title="john"
          type="text"
          name="user"
          placeholder="John"
          required
        />
        <label htmlFor="email">Enter your email address </label>
        <input
          title="johnsomething@domain.com"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password">Enter your password </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          title="Please enter a password"
          required
        />
        <label htmlFor="confirm">Confirm your password </label>
        <input
          type="password"
          name="confirm"
          placeholder="password"
          title="Please re-enter your password"
          required
        />
        <button type="submit" value="user">
          login
        </button>
        <p>
          Already have an account? <Link to="/signin"> sign in</Link>
        </p>
      </form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: var(--gradient);
  }

  form {
    border: none;
    background-color: #fafafa;
    border-radius: 3px;
    padding: 2.5em;
    box-shadow: var(--shadow);
    width: 60%;
    max-width: 300px;
    margin: 2.5em;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  input[type="email"],
  input[type="text"],
  input[type="password"] {
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: var(--grey);
    padding: 1em;
    margin: 0.5em;
  }

  button {
    color: var(--background);
    background-color: var(--primary);
    font-weight: 100;
    font-size: 90%;
    text-transform: uppercase;
    padding: 0.8em;
    border: none;
    border-radius: 10px;
  }

  p {
    padding: 0.8em;
    color: grey;
    text-align: center;
  }

  a {
    color: grey;
    font-weight: bold;
    text-decoration: none;
  }
`;
