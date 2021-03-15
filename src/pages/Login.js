import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/actions";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginClicked = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // const userProfile = useSelector(selectProfile);
  // console.log(userProfile);

  return (
    <div>
      <form onSubmit={loginClicked}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
