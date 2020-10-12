import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setAccess, setRefresh } from "./collections/globalMessaging";
import { Redirect, Link } from "react-router-dom";

export default function Login() {
  // TODO: source for spinner icon animation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState("not-valid");
  const [validPassword, setValidPassword] = useState("not-valid-pass");
  const [flashError, setflashError] = useState("");
  const [redirect, setRedirect] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    // access auth token
    fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "cors",
      body: `user[email]=${email}&user[password]=${password}`,
    })
      .then((res) => res.json())
      .then((payload) => {
        if (payload.hasOwnProperty("data")) {
          setflashError("");
          setAccess(payload.data.access_token);
          setRefresh(payload.data.renewal_token);
          setRedirect(true);
        } else {
          setflashError(payload.error.message);
        }
      });
  }

  function handleTwitter(e) {
    // TODO: redirect to and /auth/twitter/new
  }

  function handleValidaton(e) {
    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const name = e.target.name;
    const value = e.target.value;

    if (name === "user[email]") {
      if (isEmail.test(value)) {
        setValidEmail("valid");
        setEmail(value);
      } else {
        setValidEmail("not-valid");
      }
    }
    if (name === "user[password]") {
      if (value.length >= 8) {
        setValidPassword("valid-pass");
        setPassword(value);
      } else {
        setValidPassword("not-valid-pass");
        setPassword(value);
      }
    }
  }
  const flash = <div className="flash">{flashError}</div>;
  const userForm = (
    <FormWrapper>
      <form onSubmit={handleLogin}>
        {flashError !== "" ? flash : null}
        <label htmlFor="email">Enter your email address </label>
        <input
          title="johnsomething@domain.com"
          type="email"
          name="user[email]"
          placeholder="Email"
          required
          onChange={handleValidaton}
          className={validEmail}
        />
        <label htmlFor="password">Enter your password </label>
        <input
          type="password"
          name="user[password]"
          placeholder="password"
          title="Please enter a password"
          required
          minLength={8}
          onChange={handleValidaton}
          className={validPassword}
        />
        <button type="submit" value="user">
          login
        </button>

        <span>or</span>
        <button onClick={handleTwitter}>Login in with Twitter</button>
        <p>
          Don't have an account? <Link to="/signup"> you can sign up</Link>
        </p>
      </form>
    </FormWrapper>
  );

  if (redirect) {
    return <Redirect forceRefresh={true} to="/collections" />;
  }
  return userForm;
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

  .valid:focus,
  .valid-pass:focus {
    outline-color: green;
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
    margin: 3.6em;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  input[type="email"],
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

  span,
  p {
    padding: 1em;
    color: grey;
  }

  a {
    color: grey;
    font-weight: bold;
    text-decoration: none;
  }
`;
