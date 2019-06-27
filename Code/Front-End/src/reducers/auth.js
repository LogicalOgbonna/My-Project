import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/types";
import _ from "lodash";

const initialState = {
  user: {},
  isAuthenticated: false
};
const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.user,
        isAuthenticated: !_.isEmpty(action.user)
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default User;
