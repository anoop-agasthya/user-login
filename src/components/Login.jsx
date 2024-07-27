import React, { useRef } from "react";

function Login({ onLogin, error }) {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    //console.log(`login clicked + usename : ${username} password :${password}`);
    onLogin(username, password);
    userNameRef.current.value=" "
    passwordRef.current.value=" "
  };

  return (
    <><div className="login-container">
      <h3>Welcome back!👋</h3>
      <h1>Sign in to your account</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Your email</label>
        <input id="username" type="text" ref={userNameRef} required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} required />
        <button id="continue" type="submit">Continue</button>
        <a href="#">Forgot Your Password?</a>
        {error && <p className="error">{error}</p>}
      </form>

    </div><p>
        Don't have an account?<span>Sign up</span>
      </p></>
  );
}

export default Login;
