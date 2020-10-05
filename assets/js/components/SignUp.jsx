import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp(props) {
  function handleSignUp(e) {
    // TODO: post user session and login
    // TODO: redirect to collections

  }

  function handleValidation(e) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") { setEmail(value)}
    if (name === "password") { setPassword(value)}
    if (name === "confirm") { setConfirm(value)}

    // TODO: implement client side validation and redirection
    if (password !== confirm){
      // bad bad
    }
    else {
      // yay animation
    }
    let isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //.test(email) == true else false animation
    if (isEmail.test){
      // yay change css to red
      console.log("wtf")
    }
    else {
      // bad change css to red
    }
  }

  return (
    <FormWrapper>
      <form action="/api/users" method="post" onSubmit={handleSignUp}>
        <label htmlFor="email">Enter your email address </label>
        <input
          title="johnsomething@domain.com"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleValidation}
        />
        <label htmlFor="password">Enter your password </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          title="Please enter a password"
          required
          minLength={6}
          onChange={handleValidation}
        />
        <label htmlFor="confirm">Confirm your password </label>
        <input
          type="password"
          name="confirm"
          placeholder="password"
          title="Please re-enter your password"
          required
          minLength={6}
          onChange={handleValidation}
        />
        <button type="submit" value="user">
          sign in
        </button>
        <p>
          Already have an account? <Link to="/login"> log in</Link>
        </p>
      </form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`

  & {
    flex: 1 1 auto;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-image: var(--gradient);
  }

  form {
    border: none;
    color: grey;
    background-color: ${({ theme }) => theme.form};
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
    background-color: ${({ theme }) => theme.lightGrey};
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
