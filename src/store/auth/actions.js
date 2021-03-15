import axios from "axios";
import { API_URL } from "../../config";

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });

      if (!res) {
        return console.log("Password not valid");
      }

      const jwt = res.data.jwt;
      //   console.log("jwt", jwt);
      const profile = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      //   console.log("profile", profile.data.name);
      localStorage.setItem("jwt", jwt);

      //   const storedJwt = localStorage.getItem("jwt");
      //   console.log(storedJwt);
      dispatch(userLoggedIn(jwt, profile));
    } catch (e) {
      console.log(e);
    }
  };
}

// export const getUserProfile = async (jwt) => {
//   const profile = await axios.get(`${API_URL}/me`, {
//     headers: { Authorization: `Bearer ${jwt}` },
//   });
//   //   console.log("line32;", profile.data);
//   return profile;
// };

export const userLoggedIn = (userJwt, userProfile) => ({
  type: "auth/userLoggedIn",
  payload: {
    jwt: userJwt,
    profile: userProfile,
  },
});

export function bootstrapLogin() {
  return async function thunk(dispatch, getState) {
    const jwt = localStorage.getItem("jwt");
    // console.log("JWT", jwt);
    if (!jwt) {
      console.log("jwt not stored.");
    } else {
      const user = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      dispatch(userLoggedIn(jwt, user));
    }
  };
}

export function logout() {
  return async function thunk(dispatch, getState) {
    dispatch({ type: "auth/logout" });
    localStorage.removeItem("jwt");
  };
}
