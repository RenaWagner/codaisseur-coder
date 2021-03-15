import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth/actions";
import { selectProfile } from "../store/auth/selectors";

export default function Toolbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectProfile);
  console.log(user);

  const logoutClicked = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user.me ? (
        <div>
          <h2>
            Welcome back, <span>{user.me.name}</span>
          </h2>
          <button onClick={logoutClicked}>Logout</button>
        </div>
      ) : (
        <h2>
          Please log in from <Link to="/login">here</Link>
        </h2>
      )}
    </div>
  );
}
