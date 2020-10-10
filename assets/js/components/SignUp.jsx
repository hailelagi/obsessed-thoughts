import React, { useState } from "react";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validEmail, setValidEmail] = useState("not-valid");
  const [validPassword, setValidPassword] = useState("not-valid-pass");
  const [confirmValidPassword, setValidConfirmPassword] = useState(
    "not-valid-pass"
  );
  const isAuthd = !!localStorage.getItem("token");

  function handleSignup(e) {
    e.preventDefault();
    // create auth token and login
    fetch("/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `user[email]=${email}&user[password]=${password}&user[password_confirmation]=${confirmPassword}`,
    })
      .then((res) => res.json())
      .then((data) => {
        // localStorage.setItem("token", data.data);
        console.log(data);
      });
  }

  function handleValidation(e) {
    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const name = e.target.name;
    const value = e.target.value;

    if (name === "user[email]") {
      setEmail(value);
      if (isEmail.test(value)) {
        setValidEmail("valid");
      } else {
        setValidEmail("not-valid");
      }
    }
    if (name === "user[password]") {
      setPassword(value);
      if (value.length >= 8) {
        setValidPassword("valid-pass");
      } else {
        setValidPassword("not-valid-pass");
      }
    }
    if (name === "user[password_confirmation]") {
      setConfirmPassword(value);
      if (value.length >= 8 && value === password) {
        setValidConfirmPassword("valid-pass");
      } else {
        setValidConfirmPassword("not-valid-pass");
      }
    }
  }

  const userSignInForm = (
    <FormWrapper>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Enter your email address </label>
        <input
          title="johnsomething@domain.com"
          type="email"
          name="user[email]"
          placeholder="Email"
          required
          onChange={handleValidation}
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
          onChange={handleValidation}
          className={validPassword}
        />
        <label htmlFor="confirm">Confirm your password </label>
        <input
          type="password"
          name="user[password_confirmation]"
          placeholder="password"
          title="Please re-enter your password"
          required
          minLength={8}
          onChange={handleValidation}
          className={confirmValidPassword}
        />
        <button type="submit" value="user">
          sign up
        </button>
        <p>
          Already have an account? <Link to="/login"> log in</Link>
        </p>
      </form>
    </FormWrapper>
  );

  if (!isAuthd) {
    // TODO: pass access token
    return <Redirect to="/collections:" />;
  }
  return userSignInForm;
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
  .not-valid:focus,
  .not-valid-pass:focus {
    outline-color: red;
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
