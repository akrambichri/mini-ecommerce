import { FETCH_MANY, FETCH_ONE } from "../actions/resource";

export default function (state = {}, { type, payload }) {
  switch (type) {
    case FETCH_MANY:
      return { ...state, [payload.resource]: payload.data };
    case FETCH_ONE: {
      return { ...state, [payload.resource]: { ...state[payload.resource], one: payload.data } };
    }
    default:
      return { ...state };
  }
}
