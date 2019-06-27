import axios from "axios";
import jwtDecode from "jwt-decode";

import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";

import history from "../utils/history";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = user => ({
  type: USER_LOGGED_OUT,
  user
});

export const login = user => dispatch => {
  axios.post("/api/users/login", user).then(user => {
    const token = user.data.token;
    localStorage.cas = JSON.stringify(token);
    const currentUser = jwtDecode(token);
    dispatch(userLoggedIn(currentUser));
    // history.push("/dashboard");
    window.location.href = "/dashbaord";
    setAuthorizationHeader(token);
  });
};

export const logout = () => dispatch => {
  dispatch(userLoggedOut({}));
  localStorage.cas = "";

  setAuthorizationHeader();
  history.push("/");
};
