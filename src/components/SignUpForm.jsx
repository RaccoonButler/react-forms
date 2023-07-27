import React, { useState } from 'react';

const SignUpForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [validationErrors, setValidationErrors] = useState({
    username: "",
    password: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const errors = {};
    if (username.length < 8) {
      errors.username = "Username must be at least 8 characters long.";
    }
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      setValidationErrors({});

      try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        setError(error.message);
      }
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        {validationErrors.username && <p className="error">{validationErrors.username}</p>}
        <br />
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {validationErrors.password && <p className="error">{validationErrors.password}</p>}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
