import {
  SUCCESS_LOGIN,
  ATTEMPT_LOGIN,
  FAILED_LOGIN,
  LOGOUT
} from "../actions/auth";

export default function(state = {}, { type, payload }) {
  switch (type) {
    case ATTEMPT_LOGIN:
      return { ...state, loading: true };
    case SUCCESS_LOGIN: {
      return { ...state, user: payload, loading: false };
    }
    case FAILED_LOGIN:
      return { ...state, loading: false };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return { ...state };
  }
}
